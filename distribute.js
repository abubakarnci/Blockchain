// create a method that will be called by web server


//In this method:
    // read the account.txt file
    //put the N accounts into an array
    //get the totalsupply remaning for the token owner
    //calculate 5% of that totalsupply
    // loop N times, and execute N transcations transferring the token
    // collect tea and medals 


let fs = require('fs')

let BigNumber=require("big-number")

let method = require('./method.js');
let contract= require('./contract.js');

// sets up my .env file
require('dotenv').config()

// loading my environment variables
infuraToken = process.env.INFURA_TOKEN
contractAddress=process.env.CONTRACT_ADDRESS
ownerAddress=process.env.OWNER_ADDRESS

privateKey=Buffer.from(process.env.SUPER_SECRET_PRIVATE_KEY , 'hex')

const distribute = async() => {
    //read in the file

    let distributionAddresses = fs.readFileSync('./account.txt', 'utf8').split('\r\n');
    console.log(`Distro addresses are: ${distributionAddresses} `);


    //get the balance of token owner

    let ownerBalance= await contract.getBalanceOwner(ownerAddress)

    let ob= new BigNumber(ownerBalance);
    console.log(`Owner balance is ${ob}`)

    let fivePerCent = ob.div(20);
    console.log(`Five % of Owner balance is ${fivePerCent}`)

    // work out how many address in file (N)

    let numberOfAddresses = distributionAddresses.length;
    console.log(`Number of addresses is ${numberOfAddresses}`)

    // get the symbol of the token
    let tokenSymbol = await contract.getSymbol();
    console.log(`symbol is ${tokenSymbol}`);

    // Divide the 5% by N
    let distributionAmount = fivePerCent.div(numberOfAddresses);
    console.log(`Distribution amount per address is ${distributionAmount}`)

    //Loop through N accounts
    for (looper = 0; looper < numberOfAddresses; looper++) {
        console.log(`About to distribute ${tokenSymbol}, ${distributionAmount} tokens go to ${distributionAddresses[looper]}`)

        // execute a ERC20transfer(ownerAddress, distributionAddresss[looper], distributionAmount);
        let retval = await method.transferToken(distributionAddresses[looper], distributionAmount)

    }

    

    // for each account do the transfer 



    //let bal = new BigNumber(1000000000000000000000000) // should be owner balance from smart contract
    
    //let fivePerCent = bal.div(20)

    // need to divide fivePerCent by the number of addresses in the file

    //let accounts = distributionAddresses.length
    //console.log(`we have ${accounts} accounts in our file`)

}

distribute()
//module.exports= {distribute}
