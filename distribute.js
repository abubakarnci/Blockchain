// create a method that will be called by web server


//In this method:
    // read the account.txt file
    //put the N accounts into an array
    //get the totalsupply for the token owner
    //calculate 5% of that totalsupply
    // loop N times, and execute N transcations transferring the token
    // collect tea and medals 


let fs = require('fs')

let BigNumber=require("big-number")

let method = require('./method.js');

// sets up my .env file
require('dotenv').config()

// loading my environment variables
infuraToken = process.env.INFURA_TOKEN
contractAddress=process.env.CONTRACT_ADDRESS
ownerAddress=process.env.OWNER_ADDRESS

privateKey=Buffer.from(process.env.SUPER_SECRET_PRIVATE_KEY , 'hex')

const distribute = async() => {
    //read in the file

    let distributionAddresses = fs.readFileSync('./account.txt', 'utf8').split('\n');
    console.log(`Distro addresses are: ${distributionAddresses} `);

    let bal = new BigNumber(1000000000000000000000000) // should be owner balance from smart contract
    
    let fivePerCent = bal.div(20)

    // need to divide fivePerCent by the number of addresses in the file

    let accounts = distributionAddresses.length
    console.log(`we have ${accounts} accounts in our file`)

}

module.exports= {distribute}
