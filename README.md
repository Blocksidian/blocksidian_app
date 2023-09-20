# Blocksidian

We use React, Tailwind, Metamask, Solidity, Hardhat and Firebase.

Implementing NomoApp plugins

##

Install dependencies: `npm i`.

It is executed with the command: `npm run dev`.

A deploy was made using [Netlify](https://www.netlify.com/).
### [Visit the page here](https://blocksidian.netlify.app/)

##

## Team Members:

| [![LinkedIn Photo](https://media.licdn.com/dms/image/D4D03AQGmLHhGD51Z9g/profile-displayphoto-shrink_400_400/0/1691507975975?e=1700697600&v=beta&t=GjLhgKuLl0JNxzzKpTeN67EHxPH8JoXICxWkJCswqhc)](https://www.linkedin.com/in/yasser-alvarez/) | [![LinkedIn Photo](https://media.licdn.com/dms/image/D5635AQF9Nfuj4W-pgA/profile-framedphoto-shrink_400_400/0/1686029356658?e=1695798000&v=beta&t=lOYGr0FCUzPeEavBrLCY4PyRx-BkfbT_dBROnNeQvms)](https://www.linkedin.com/in/cristopher-salazar-665831236/) | [![LinkedIn Photo](https://media.licdn.com/dms/image/D5603AQEcymEk7jsPZQ/profile-displayphoto-shrink_400_400/0/1681116860455?e=1700697600&v=beta&t=7xajqHjYoFwyu6e4Ua-ExFJ_TF3GjkP9tn4Pp_CQF7Q)](https://www.linkedin.com/in/sherlyn-delahoya-quinonez-a85a15271/) |
| :---: | :---: | :---: |
| [Yasser Francisco Alvarez Esqueda](https://github.com/YasserAlvarez) | [Cristopher Adan Salazar Escobedo](https://github.com/CristopherSa9) | [Sherlyn de la Hoya Quiñonez](https://github.com/SherlynDeLaHoyaQuinonez) |
| `blockchain` `pitchman` | `frontend` `blockchain` | `backend` `designer` |

| [![LinkedIn Photo](https://media.licdn.com/dms/image/D5603AQEUfqYh84YeWQ/profile-displayphoto-shrink_400_400/0/1686946962662?e=1700697600&v=beta&t=TYrl9qaWBxmUqNkgK1OMQsX_iNEMWOT4ulAlaJFAzZU)](https://www.linkedin.com/in/francisco-riv/) | [![LinkedIn Photo](https://media.licdn.com/dms/image/D4E35AQGeKgwbYQeGGA/profile-framedphoto-shrink_400_400/0/1695191661243?e=1695798000&v=beta&t=mTZWuxye0q6fHy4B8FCxHJGzi7Js8ASd-6RnSIr5KFw)](https://www.linkedin.com/in/imrtr/) |
| :---: | :---: |
| [Francisco Javier Rivera](https://github.com/MierderTheKat) | [Arturo Hernández Bueno](https://github.com/imR2D2) |
| `frontend` `designer` | `blockchain` `fullstack` |

##

## Project Structure:

- **contracts / TokenMaster.sol:** Smart contract implemented with solidity.
  
- **public / nomo_manifest.json:** Permissions required to use the application in the NomoApp
  
- **scripts / deploy.cjs:** Compiles and deploys the contract on the blockchain
  
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

  - **routes:** routing of the web site.

  - **utils:** Validations that can be used in frontend.

##
