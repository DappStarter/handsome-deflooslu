require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remain million grid gloom swift toy'; 
let testAccounts = [
"0x93179e590b1cd4e6eda6d540ffd9f260cb7f3f79bba18ea71713cdefc37bd325",
"0x88cfd430bbfea635af01722f4db61dd44900e10bea7f2b59767de7eaeb91a5d4",
"0x5f865a27aeac4409c3f2bbea7db65fca888ce015bb3d50925cce8d0ac3fa9249",
"0x5e64673c0138c6503b2385dbe779888a03f961f2254f06089655b623b52df48e",
"0x3d55f982b21c914cb4cbc4ef81650fd2872fb263dbcf64b6b8855d73eb19422d",
"0xc070775879f433d239a859c070c27d481a18e5b21e0931575c96c4ed69f612dd",
"0x0dfbead6ea165ab9ad193d9e5f2d601facdc4bd42f953a1a0dabe488fb30fc43",
"0x02d47f8e55c651cb15a1f1c212fd8486bc66b5354f90d6b162afbcf2fb8a3564",
"0x23b06026d521c33d49f143d6c1987fc8994998ec565509c85212907b98489fa7",
"0xc1f19e2ad333444e4b5717aca376042808475d894cb4d2fe6ac7c9d2d1886b94"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
