// create a web server

//add URL to the web server to do transfer 

// use this web server to distribute our tokens 


let contract =require("./contract.js")

let method = require("./method.js") 

let distribute = require("./distribute.js") 

const express = require("express");

const app= express();

app.use(express.json());

const port = 8082;

app.get('/symbol', async(req, res) => {
    res.send(await contract.getSymbol())
})

app.post('/transfer', async(req, res) => {

    let account_to = req.body.account_to;
    let amount = req.body.amount;

    res.send(await method.transferToken(account_to, amount))

})

app.get('/distribute', async(req, res) => {

    res.send (await distribute.distribute());

})


app.get('/decimals', async(req, res) => {
    res.send(await contract.getDecimals())
})

app.listen(port, () => console.log(`Listening on port ${port} ...`));