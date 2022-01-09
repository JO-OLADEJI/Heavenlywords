# Heavenlywords
A decentralized application(dApp) for minting text-based generated image NFTs.

![Heavenlywords screenshot](https://user-images.githubusercontent.com/53357470/147779552-3751e412-0a98-46b0-9c63-a374ef39122d.png)

## Installation
**Note**: Instructions are for testing the dApp on the [Rinkeby](https://www.rinkeby.io/) testnet.

### Setup
- Clone the repository:
```bash
git clone https://github.com/Joshua-Oladeji/Heavenlywords.git
```
- Change directory to the cloned folder:
```bash
cd Heavenlywords
```
- Install dependencies for client(frontend):
```bash
cd nft-website
npm install
```
- Install dependencies for contract deployment:
```bash
cd ../nft-contract
npm install
```

### Contract deployment
- Create a **.env** file in the nft-contract directory and add the following:
```
API_URL = "<< your alchemy HTTP key >>"
PRIVATE_KEY = "<< private key of contract deployer >>"
```
- Create an app on [Alchemy](https://www.alchemy.com/)(rinkeby network) and copy the HTTP link
- Paste the link as the value of **API_URL** variable in the .env file
- Also paste the private key(of the address that'll deploy the contract) in the .env file
- Run the follwing to compile and deploy the contract:
```javascript
npx hardhat compile
npx hardhat run scripts/deploy.js --network rinkeby
```
- Copy the contract address displayed on the terminal

### Frontend
- Change directory to client:
```bash
cd ../nft-website
```
- Create a **.env** file in the current directory and add the following:
```
REACT_APP_ALCHEMY_URL = ""
REACT_APP_CONTRACT_ADDRESS = ""
```
- Fill the variables with their values
- Start the development server:
```bash
npm run start
```
- The site would be live on [http://localhost:3000/](http://localhost:3000/)
- Enjoy ✨

## [Check out the collection on OpenSea](https://opensea.io/collection/heavenlywords)

## Technologies
- [React.js](https://reactjs.org/) 💙
- Solidity
- [Hardhat](https://hardhat.org/)
