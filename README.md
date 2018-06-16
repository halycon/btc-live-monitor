## btc-live-monitor
A Sails JS project which fetches bitcoin price, calculates SMA and  
presents it on a realtime dashboard.
 
a [Sails v1](https://sailsjs.com) application 

## Tech/framework used
Sails JS (was chosen because it has in house socket.io support) ,
mocha, supertest, node-schedule 


<b>Built with</b>
- [NPM](https://www.npmjs.com/)


## Installation

NPM have to be installed.

npm install
npm install node-schedule
npm install mocha 
npm install supertest 

for running :

sails lift

or 

docker-compose build

docker-compose up

## Testing
For both unit and integration test

node_modules/mocha/bin/mocha test

© [Volkan Cetin]()
