const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners()
  const NAME = "TokenMaster"
  const SYMBOL = "TM"

  // Deploy contract
  const TokenMaster = await ethers.getContractFactory("TokenMaster")
  const tokenMaster = await TokenMaster.deploy(NAME, SYMBOL)
  await tokenMaster.deployed()

  console.log(`Deployed TokenMaster Contract at: ${tokenMaster.address}\n`)

  // Events
  const occasions = [
    {
      name: "Concierto de Mana",
      cost: tokens(3),
      tickets: 5000,
      date: "Oct 15",
      time: "8:00PM CST",
      location: "Estadio Azteca - Ciudad de México, Mexico"
    },
    {
      name: "Ricky Martin en Concierto",
      cost: tokens(2.5),
      tickets: 3000,
      date: "Nov 5",
      time: "7:30PM CST",
      location: "Auditorio Nacional - Ciudad de México, Mexico"
    },
    {
      name: "Festival Vive Latino",
      cost: tokens(2),
      tickets: 10000,
      date: "Mar 18",
      time: "12:00PM CST",
      location: "Foro Sol - Ciudad de México, Mexico"
    },
    {
      name: "Carlos Vives y Marc Anthony",
      cost: tokens(3.5),
      tickets: 4000,
      date: "Jul 7",
      time: "9:00PM CST",
      location: "Arena Monterrey - Monterrey, Mexico"
    },
    {
      name: "Alejandra Guzmán en Concierto",
      cost: tokens(1.5),
      tickets: 2000,
      date: "Sep 30",
      time: "8:00PM CST",
      location: "Auditorio Telmex - Guadalajara, Mexico"
    },
    {
      name: "Julieta Venegas: Acústico",
      cost: tokens(2),
      tickets: 2500,
      date: "Dec 12",
      time: "7:00PM CST",
      location: "Teatro Diana - Guadalajara, Mexico"
    }
  ];
  

  for (var i = 0; i < occasions.length; i++) {
    const transaction = await tokenMaster.connect(deployer).createEvent(
      occasions[i].name,
      occasions[i].cost,
      occasions[i].tickets,
      occasions[i].date,
      occasions[i].time,
      occasions[i].location,
    )

    await transaction.wait()

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});