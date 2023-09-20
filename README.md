# Blocksidian

Blocksidian is a blockchain-based ticketing platform. It uses blockchain technology to offer a number of advantages, including:

- **Security:** Tickets are tokenized on the blockchain, making them impossible to counterfeit or steal.
- **Transparency:** Users can track the history of tickets on the blockchain. This provides greater transparency and trust for users.
- **Efficiency:** Transactions can be carried out quickly and easily. This makes it easier for users to buy and sell tickets.
- **Decentralization:** The platform is not controlled by a single entity. This makes it more resistant to censorship and fraud.

Blocksidian allows event organizers to sell tickets in a secure and transparent way. Users can purchase tickets with cryptocurrencies.

The platform is still under development.

##

We use React, Tailwind, Metamask, Solidity, Hardhat and Firebase.

Implementing NomoApp plugin:

<div align="center">

| [![QR Plugin](https://firebasestorage.googleapis.com/v0/b/blocksidian-7b83e.appspot.com/o/NomoAppChido.png?alt=media&token=f3c7096d-bdcc-4c35-a4ba-9fd1cd7919f4)](https://nomo.app/pluginv1/blocksidian.netlify.app) | [![QR Website](https://firebasestorage.googleapis.com/v0/b/blocksidian-7b83e.appspot.com/o/BlocksidianChido.png?alt=media&token=cb029596-6f74-4c12-a087-d610ad1dc4fe)](https://blocksidian.netlify.app/) |
| :---: | :---: |
| [`QR Plugin`](https://nomo.app/pluginv1/blocksidian.netlify.app) | [`QR Website`](https://blocksidian.netlify.app/) |

</div>


<div align="center">

| [![Presentation Link](https://firebasestorage.googleapis.com/v0/b/blocksidian-7b83e.appspot.com/o/PORTADA.png?alt=media&token=e1bf0d6e-9c2b-467c-8ebf-5a73f1d5fd52)](https://www.canva.com/design/DAFrZGpuBaw/y30Y9olN_WOxbLrNb2khPw/watch?utm_content=DAFrZGpuBaw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink) | 
| :---: |
| [`Presentation Link`](https://www.canva.com/design/DAFrZGpuBaw/y30Y9olN_WOxbLrNb2khPw/watch?utm_content=DAFrZGpuBaw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink) |

</div>

##

Install dependencies: `npm install`.

This code is executed with the command: `npm run dev`.

A deploy was made using [Netlify](https://www.netlify.com/).
### [Visit the page here](https://blocksidian.netlify.app/)

##

## Team Members:

<div align="center">

| [![LinkedIn Photo](https://media.licdn.com/dms/image/D4D03AQGmLHhGD51Z9g/profile-displayphoto-shrink_400_400/0/1691507975975?e=1700697600&v=beta&t=GjLhgKuLl0JNxzzKpTeN67EHxPH8JoXICxWkJCswqhc)](https://www.linkedin.com/in/yasser-alvarez/) | [![LinkedIn Photo](https://media.licdn.com/dms/image/D5635AQF9Nfuj4W-pgA/profile-framedphoto-shrink_400_400/0/1686029356658?e=1695798000&v=beta&t=lOYGr0FCUzPeEavBrLCY4PyRx-BkfbT_dBROnNeQvms)](https://www.linkedin.com/in/cristopher-salazar-665831236/) | [![LinkedIn Photo](https://media.licdn.com/dms/image/D5603AQEcymEk7jsPZQ/profile-displayphoto-shrink_400_400/0/1681116860455?e=1700697600&v=beta&t=7xajqHjYoFwyu6e4Ua-ExFJ_TF3GjkP9tn4Pp_CQF7Q)](https://www.linkedin.com/in/sherlyn-delahoya-quinonez-a85a15271/) |
| :---: | :---: | :---: |
| [Yasser Francisco Alvarez Esqueda](https://github.com/YasserAlvarez) | [Cristopher Adan Salazar Escobedo](https://github.com/CristopherSa9) | [Sherlyn de la Hoya Quiñonez](https://github.com/SherlynDeLaHoyaQuinonez) |
| `blockchain` `pitcher` | `frontend` `documenter` | `backend` `designer` |

| [![LinkedIn Photo](https://media.licdn.com/dms/image/D4E03AQEm7i0rNkym1g/profile-displayphoto-shrink_400_400/0/1695198042119?e=1700697600&v=beta&t=gz9hIa5Xdp-sxfmVWWeFsedk4GWe6bxx51hOPdiHWtY)](https://www.linkedin.com/in/francisco-riv/) | [![LinkedIn Photo](https://media.licdn.com/dms/image/D4E35AQGeKgwbYQeGGA/profile-framedphoto-shrink_400_400/0/1695191661243?e=1695798000&v=beta&t=mTZWuxye0q6fHy4B8FCxHJGzi7Js8ASd-6RnSIr5KFw)](https://www.linkedin.com/in/imrtr/) |
| :---: | :---: |
| [Francisco Javier Rivera](https://github.com/MierderTheKat) | [Arturo Hernández Bueno](https://github.com/imR2D2) |
  | `frontend` `designer` | `blockchain` `fullstack` |

</div>

##

## Project Structure:

- **contracts / TokenMaster.sol:** Smart contract implemented with solidity.
  
- **public / nomo_manifest.json:** Permissions required to use the application in the NomoApp.
  
- **scripts / deploy.cjs:** Compiles and deploys the contract on the blockchain.
  
  - **Commands to execute it:**
```
> npx hardhat compile
> npx hardhat run./scripts/deploy.js -network localhost
> npx hardhat run./scripts/deploy.js -network zeniq
```

- **hardhat.config.cjs:** HardHat environment configuration file.
  
- **manifest.json:** Visual configuration of name, icons and themes to make a progressive web application (PWA).
  
- **service-worker.js:** Technical configuration (code) to make a progressive web application (PWA).
  
- **tailwind.config.js:** Tailwind configuration file.
  
- **vite.config.js:** Vite configuration file.
  
- **src:**
  - **assets:** Images, logos and visual resources used.
    
  - **components:** Pages of the site structured by folders depending on the functionality.
  
  - **context:** Contexts of the site pages are defined.

  - **data:** Data used by the site is managed.

  - **routes:** Routing of the web site.

  - **utils:** Validations that can be used in frontend.

##
