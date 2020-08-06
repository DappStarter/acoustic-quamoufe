require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remind concert gesture hidden tail snake'; 
let testAccounts = [
"0xd9d6edfd554d6387a5b637e429f0ec7e14726d30a313b6acf09ade27dcd254a5",
"0xb8d917a6c74d2528bfc567a76871b811ca416485b4bd7615d16111f0fa95ad5a",
"0x3a4d3d9a443f25d86ec80c077eec6a263174d7f95befa755bbca725b58d90aa1",
"0x74b2cc391213deeb92f2e80d0e1ee2949b2549182627988283b5fcf1f31d8a7e",
"0x355d799a12babdb82803c829bc76bad7df28c87eb564181a280363778c7bd41a",
"0x0e0576dfc0ada64f3f179a20244252cb53c52d4e6facfe553cdea8edfead73be",
"0x374fad4895777eb6c286c0ce8674e6606585ff3331e599e06abbf1a55fe9137f",
"0x36a72b6060ef1f72ce038b32009a92a9c3564ab7ac380a2e7730301383eec8ad",
"0x9a8538f05383e73e1a8c90da43ee2925e3a27576d8031bd1021c59654949bc11",
"0xd55a365502cffb6d3916ddbf34da430aa71ef59f500fcda458c768946f0fbedd"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
