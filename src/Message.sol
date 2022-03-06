// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;


contract Message {
    string myMessage;

    function setMessage(string calldata x) public {
        myMessage = x;
    }

    function getMessage() public view returns (string memory) {
        return myMessage;  
    }
}
