const Web3 = require('web3')

//let url = 'https://goerli.infura.io/v3/999990cf354f441ebded30594a32b3fe'
let url = 'http://localhost:8545'
let web3 = new Web3(url)

let address = '0x7be53c45fA6567e26Ea9cC1E2636AB910bb75511'

web3.eth.getBalance(address).then((bal) => {
  let balance = web3.utils.fromWei(bal, 'ether')
  console.log(balance)
})

web3.eth.getTransactionCount(address).then((txCount) => {
  console.log(txCount)
})

web3.eth.getAccounts().then((accounts) => {
  console.log(accounts)
})