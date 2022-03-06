import Web3 from 'web3';

var web3 = new Web3('http://localhost:8545');

web3.eth.getAccounts((err, accounts) => {
    if (err) {
        console.log(err);
    } else {

        web3.eth.defaultAccount = accounts[0]

        var contract = new web3.eth.Contract([
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "x",
                        "type": "string"
                    }
                ],
                "name": "setMessage",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getMessage",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ], '0xEB37d6b117c8399FaFF7ad7034Ff9afA7CEfe622')

        contract.methods.setMessage('Hello World3').send({
            from: web3.eth.defaultAccount
        }, (transactionHash: String) => {
            console.log("Transaction hash: " + transactionHash);

            contract.methods.getMessage().call({
                from: web3.eth.defaultAccount
            }, (err: String, message: String) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(message);
                }
            })
        })


    }
})