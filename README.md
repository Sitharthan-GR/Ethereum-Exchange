# Ethereum‑Exchange

A simple Ethereum-based exchange dApp that allows users to deposit, trade, and withdraw tokens via smart contracts and a web interface.



## Tech Stack
- 🌐 React.js – Basic UI in `public/` 
- 🛠️ Solidity – Smart contract development
- 🔧 Truffle – Deploy and test contracts
- 💻 Web3.js – Frontend blockchain interactions
- 🌐 HTML/CSS/JS – Basic UI in `public/`
- ✅ Mocha + Chai – Smart contract unit tests




## Features
- **Smart Contracts**: Trade management, user balances, and order matching
- **Frontend Interface**: React or plain HTML/JS to connect with MetaMask
- **Truffle Framework**: Simplifies contract deployment and migrations
- **Automated Tests**: Verify core contract functions
- **Local dApp Hosting**: Run frontend served from `public/`



## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) ≥ 14
- [npm](https://www.npmjs.com/) or yarn
- [Truffle](https://www.trufflesuite.com/)
- [Ganache CLI](https://github.com/trufflesuite/ganache-cli) or Ganache GUI
- MetaMask (or similar) browser wallet



### Install

```bash
# Clone the repository
git clone https://github.com/Sitharthan‑GR/Ethereum‑Exchange.git
cd Ethereum‑Exchange
```
# Install dependencies
```
npm install
```

### Compile & Deploy
Start Ganache:
```
ganache-cli 
```
### Compile contracts:

```
truffle compile
```
### Run migrations:

```
truffle migrate --network development
```
