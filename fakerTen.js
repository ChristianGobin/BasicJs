/*
Generate 10 random products and prices using faker library in Node.js
install faker using 'npm install faker' in the console while running node.
require faker and assign it to a variable to add it to script.
*/

var faker = require("faker");
function randomTen (){
    for(var i = 0; i<=9; i++){
        console.log(faker.commerce.price([i]) + ' ' + faker.commerce.productName([i]));
    }
}
randomTen();
