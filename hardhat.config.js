require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
require('solidity-coverage')
require('dotenv').config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    bsc_testnet: {
      url: `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/bsc/testnet`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gasPrice: 10 * 1000000000,
    },
    bsc_mainnet: {
      url: `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/bsc/mainnet`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gasPrice: 5 * 1000000000,
    },
  }
}