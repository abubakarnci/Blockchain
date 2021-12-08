
# Readme #

This is the readme for this project. It includes step by step instructions of how to run this project.

# Setting up tools to run the code #

## Set-up METAMASK on browser ##

```https://metamask.io/```

## Create infura account ##

```https://infura.io/```

Create new Ethereum project of your own choice name

## Go to Etherscan for details of transaction ##

```https://ropsten.etherscan.io/```

## Use remix to create and deploy contracts ##

```http://remix.ethereum.org/```

## Install Visual Studio Code ##

```https://code.visualstudio.com/Download```

## Install Git ##

1. Get a github account at github.com

2. Install git locally

```https://github.com/git-guides/install-git```

## Install NodeJs ##

Install following the instructions at the following web page:

```https://nodejs.org/en/download/```

## Validation Steps ##

How to tell you have git installed:

```$git version```

How to tell you have node & npm installed:

```$node -v```

```$npm -v```

# Steps to follow to run this project #

## Cloning a Repository ##

Create a folder on your local machine.  Go into that folder.

Inside that folder open git bash and run:

```git clone https://github.com/abubakarnci/Blockchain.git```

## Open Visual Studio Code ##

Open that cloned project in visual code 

## Create a file ##

1. Create a file named ```.env``` in the same folder with rest of the files.

2. Open that file and past this:

```INFURA_TOKEN =  ``` 
Put Infura PROJECT ID after equals which you can get by going onto project settings.

```CONTRACT_ADDRESS =```
Get your verified contract address and put it after equals. 

```OWNER_ADDRESS=```
Put your METAMASK account address.

```SUPER_SECRET_PRIVATE_KEY=```
Paste your private key by coping it from METAMASK.   

## Dependencies and NPM ##

To use large chunks of code that others have written to interact with Ethereum, like the web3 package. You need to set up the Node Package Manager (npm).

From inside your folder, to create your own package.json:

```$npm init```

## Install following dependencies ##

Run each command in terminal inside project folder.

```$npm install web3 ```

```$npm install dotenv ```

```$npm install ethereumjs-tx ```

```$npm install express ```

```$npm install fs ```

```$npm install big-number ```

## Executing a .JS file ##

To execute a javascript file using node.js, run the following command:

```$node <file name>```

## Run app through REST API ##

```$node handlers.js ```

Open another terminal and execute the following CURL command to get symbol:

``` curl -XGET http://localhost:8082/symbol ```

To POST to a route, execute the following command:

``` curl -XPOST http://localhost:8082/transfer -H 'content-type: application/json' -d '{"account_to": "any account address", "amount": "put amount"}' ```

## Run app without REST API ##

```$node distribute.js ```

Check terminal to see response after each transaction

Check Etherscan for more details about each transaction



## Docker ##

### View running docker containers ###

```docker ps```

### build a docker container ###

```docker build -t nci/project2021 .```

### run the image ###

```docker run -p 8090:8082 --name nci -d nci/project2021```

### kill a running container ###
```docker kill [name]```

### start/stop a container ###
```docker start/stop [name]```

### view logs ###
```docker logs [name]```

### view logs inside a container ###
```docker logs -f [name]```

### view images on your computer ###
```docker image ls```

### clear the docker system ###
```docker system prune -f```

### remove all docker images ###
```docker image prune -a -f```