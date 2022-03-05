import Web3 from 'web3';

var web3 = new Web3('http://localhost:8545');
var sendingAddress = '0x043d73a0f66377baF28f34CC856e9b6ea4A70568';
var receivingAddress = '0xf1CD47aD898508ffb2a66a7d8544A3A42dC83BC7';

web3.eth.getBalance(sendingAddress, (err, balance) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Balance of ' + sendingAddress + ' is ' + web3.utils.fromWei(balance, 'ether') + ' ETH');
    }
})

web3.eth.getTransactionCount(sendingAddress, (err, count) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Transaction count of ' + sendingAddress + ' is ' + count);
    }
})

web3.eth.getBalance(receivingAddress, (err, balance) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Balance of ' + receivingAddress + ' is ' + web3.utils.fromWei(balance, 'ether') + ' ETH');
    }
})

web3.eth.getTransactionCount(receivingAddress, (err, count) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Transaction count of ' + receivingAddress + ' is ' + count);
    }
})
