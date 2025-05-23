
# Easy-Hardhat Starter

Easy-Hardhat is a quick start template designed for developing Ethereum smart contracts using the Hardhat framework and Yarn package manager.  
The main goal of this project is to enable blockchain developers to set up their development environment quickly without complex configurations, write Solidity contracts, test them, and deploy on local or test networks.  
With this template, you can experience faster learning and development.

## Key Features

- Pre-configured and optimized Hardhat environment for easy development  
- Sample simple yet practical Solidity contracts for quick learning and extension  
- Comprehensive and extensible unit tests using Mocha and Chai frameworks  
- Ready deployment scripts for local and test networks (e.g., localhost and testnet)  
- Full dependency and package management with Yarn for fast installation and up-to-date packages  
- Clean and standard folder structure to facilitate project maintenance and development

## Prerequisites

Before starting, ensure the following are installed on your system:  
- Node.js version 14 or higher  
- Yarn package manager (faster and with more features than npm)  
- Hardhat Ethereum smart contract development framework  
Also, basic knowledge of Solidity smart contracts and blockchain concepts will help you make better use of this project.

## Installation

- Clone this repository to your local machine:  
```
git clone https://github.com/me2roid/Easy-Hardhat.git
```

- Navigate into the project folder:  
```
cd Easy-Hardhat
```

- Install all required dependencies using Yarn:  
```
yarn install
```

This will automatically download and prepare all necessary packages.

## Usage

- To compile Solidity contracts, run:  
```
npx hardhat compile
```

- To run unit tests and ensure correctness of your code:  
```
npx hardhat test
```

- To deploy contracts on the local network (e.g., Ganache or Hardhat Network):  
```
npx hardhat run scripts/deploy.js --network localhost
```

- To deploy on testnets or mainnets, adjust the network settings inside `hardhat.config.js`.

## Project Structure

```
contracts/          # Solidity smart contracts  
scripts/            # Deployment and helper scripts  
test/               # Unit tests  
cache/              # Hardhat cache (ignored by git)  
artifacts/          # Compiled contract artifacts (ignored by git)  
hardhat.config.js   # Hardhat configuration file  
package.json        # Project metadata and dependencies  
yarn.lock           # Yarn lockfile for dependency versions  
```


##How to Contribute
```
We welcome contributions! To propose a change:

1 Fork this repository.
2 Create a new branch:
```
bash
```
git checkout -b feature/your-feature-name 
```
## License

This project is licensed under the MIT License, allowing you to freely use, copy, modify, and distribute the code, provided that proper attribution is given to the original authors.  
See the LICENSE file for more details.
