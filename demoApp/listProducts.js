var faker = require('faker');

function randProd(){
    return faker.commerce.productName();
}

function randPrice(){
    return faker.commerce.price();
}

function genRand(){
    console.log('===================')
    console.log('WELCOME TO MY SHOP!')
    console.log('===================')
    for(var i = 0; i < 10; i++){
        console.log(randProd() + " - $" +  randPrice())
    }
}

genRand()