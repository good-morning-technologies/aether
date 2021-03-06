/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = 'メタマスクのmnemonic';
var accessToken = 'infura.ioのアクセストークン';
module.exports = {
  networks:{
    development:{
      host: "localhost",
      port: 8545,
      network_id: "15",
      gas: 4700000,
    },

    ropsten:{
      provider: function(){
        return new HDWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/" + accessToken
        );
      },
      network_id: 3,
      gas: 4500000
    },
    mainnet: {
           provider: function() { 
             return new HDWalletProvider(mnemonic, 
              'https://mainnet.infura.io' + accessToken
            ) 
           },
           network_id: '1',
           gas: 4500000,
           gasPrice: 10000000000,
    },

  }
};
