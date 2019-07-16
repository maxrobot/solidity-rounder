module.exports = {
  compilers: {
    solc: {
      version: '0.5.10',
      docker: false,
      settings: { optimizer: { enabled: true, runs: 200 } },
    },
  },
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
      websockets: true        // Enable EventEmitter interface for web3 (default: false)
    }
  },
};
