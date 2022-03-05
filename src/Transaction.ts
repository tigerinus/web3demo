import Web3 from 'web3';

var web3 = new Web3('http://localhost:8545');
var sendingAddress = '0x043d73a0f66377baF28f34CC856e9b6ea4A70568';
var receivingAddress = '0xf1CD47aD898508ffb2a66a7d8544A3A42dC83BC7';

var rawTransaction = {
    to: receivingAddress,
    gasPrice: 3000000000,
    gasLimit: 30000,
    value: 100000,
    data: ""
}

var privateKeySender = '7c5897a6807f2611c860d96d0757aae1dcd5ff2f81e9990ffd63ac60b8b9173f'
var privateKeySenderHex = Buffer.from(privateKeySender, 'hex');


web3.eth.accounts.signTransaction(rawTransaction, privateKeySender, (err, signedTransaction) => {
    if (err) {
        console.log(err);
    } else {
        var rawTransactionSigned = signedTransaction.rawTransaction as string;
        web3.eth.sendSignedTransaction(rawTransactionSigned, (err, transactionHash) => {
            if (err) {
                console.log(err);
            } else {
                console.log(transactionHash);
            }
        });
    }
});
