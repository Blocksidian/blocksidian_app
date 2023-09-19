// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TokenMaster is ERC721 {
    // Estructura de un evento
    struct Occasion {
        uint256 id;
        string name;
        uint256 cost;
        uint256 tickets;
        uint256 maxTickets;
        string date;
        string time;
        string location;
    }


    // Mapping de IDs de boletos por usuario
    mapping(address => uint256[]) public userTickets;

    // Mapa de eventos por ID
    mapping(uint256 => Occasion) occasions;

    // Dirección del propietario del contrato
    address public owner;

    // Total de eventos creados
    uint256 public totalOccasions;

    // Total de boletos emitidos
    uint256 public totalSupply;

    // Modificador que asegura que solo el propietario puede ejecutar una función
    modifier onlyOwner() {
        require(msg.sender == owner, "Solo el propietario puede ejecutar esta funcion");
        _;
    }

    // Constructor del contrato
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
        owner = msg.sender;
    }

    // Función para crear un nuevo evento
    function createEvent(
        string memory _name,
        uint256 _cost,
        uint256 _maxTickets,
        string memory _date,
        string memory _time,
        string memory _location
    ) public onlyOwner {
        require(_cost > 0, "El costo debe ser mayor que cero");
        require(_maxTickets > 0, "El limite de boletos debe ser mayor que cero");

        totalOccasions++;
        occasions[totalOccasions] = Occasion(
            totalOccasions,
            _name,
            _cost,
            _maxTickets,
            _maxTickets,
            _date,
            _time,
            _location
        );
    }

    // Función para comprar un boleto y recibir un NFT
    function buyTicket(uint256 _id) public payable {
        require(_id != 0, "El ID debe ser mayor que cero");
        require(_id <= totalOccasions, "El ID no corresponde a ningun evento");
        require(msg.value >= occasions[_id].cost, "El Ether enviado no es suficiente");
        require(occasions[_id].tickets > 0, "No quedan boletos disponibles");

        occasions[_id].tickets--;
        totalSupply++;

        // Generar NFT y asignarlo al comprador
        _safeMint(msg.sender, totalSupply);

        // Agregar el ID del boleto al registro del usuario
        userTickets[msg.sender].push(totalSupply);
    }

    // Función para intercambiar boletos entre usuarios
    function exchangeTickets(address _myAddress, uint256 _myTicketId, address _theirAddress, uint256 _theirTicketId) public {
        require(_exists(_myTicketId) && _exists(_theirTicketId), "Id de boleto invalidos");

        address myOwner = ownerOf(_myTicketId);
        address theirOwner = ownerOf(_theirTicketId);

        require(myOwner == _myAddress && theirOwner == _theirAddress, "Propietarios invalidos");

        _safeTransfer(myOwner, theirOwner, _myTicketId, "");
        _safeTransfer(theirOwner, myOwner, _theirTicketId, "");
    }

    // Función para retirar fondos del contrato
    function withdraw() public onlyOwner {
        require(address(this).balance > 0, "No hay fondos para retirar");

        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success, "La operacion de retiro fallo");
    }

    // Función para obtener los detalles de un evento
    function getEventDetails(uint256 _id) public view returns (Occasion memory) {
        return occasions[_id];
    }

    // Función para obtener los IDs de boletos de un usuario
    function getTicketsByUser(address userAddress) public view returns (uint256[] memory) {
        return userTickets[userAddress];
    }
}
