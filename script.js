const web3 = new Web3("https://rpc2.sepolia.org");
$(document).ready(function () {
    const address = "0x3214f0a4faDe84629c8fadC537292B2b050C0256";
    const abi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_About_Product",
                    "type": "string"
                }
            ],
            "name": "Set_About",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string[]",
                    "name": "_areas",
                    "type": "string[]"
                }
            ],
            "name": "Set_Area",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_MRP",
                    "type": "string"
                }
            ],
            "name": "Set_MRP",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "About_Product",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "Area",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "MRP",
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
    ]
    const contract = new web3.eth.Contract(abi, address);

    contract.methods.Area().call().then(function (A) {
        $('#information1').html(A);
        console.log(A)
    })
    contract.methods.MRP().call().then(function (A) {
        $('#information2').html(A);
        console.log(A)
    })
    contract.methods.About_Product().call().then(function (A) {
        $('#information3').html(A);
        console.log(A)
    })
});
