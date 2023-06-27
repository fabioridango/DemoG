console.log("Test begin");

// variables
/*fname = "Fabio";
console.log("First Nmae:" + fname); */

// operators

//deposit = 100000;
//interest = 2.5;
//annualIncomeBeforeTax = (deposit * interest) / 100;
//console.log("Annual revenue before tax:" + annualIncomeBeforeTax);

// user inputs example above
const prompt = require('prompt-sync')();

// Cast to Number
/* depositAmount = Number(prompt('Instert the Deposit amount'));
console.log("Annual Deposit Amount enter:",depositAmount);

interestAnnual = Number(prompt('Instert Annual Intererst'));
console.log('Interest Annual Entered:',interestAnnual);

annualIncomeBeforeTax2 = (depositAmount * interestAnnual) / 100;
console.log("Annual revenue before tax:", annualIncomeBeforeTax2);

*/

// variables (let (the value can change), const (the value can't change))
let fname = 'Fabio'
const age = 10

// example IF cycle
/* let inputNumber;
inputNumber = Number(prompt('Instert a number'));

if (inputNumber == 10){

    console.log('Numero di maradona');

}else{

    console.log('Numero non di maradona');
}
*/

// Functions Examples

function printName(name){

    console.log(`The name is ${name}`)

}

// printName('Fabulo')


function sum(a,b){

 return a + b

}

//console.log('the sum is:',sum(1,2))

let resultSum = sum(1,4);

//console.log('the sum is:',resultSum)
//console.log(`the sum is: ${resultSum}`)

// Arrow functions (alway use them instead of functiomns because are more powerfull)
// Arrow function with explicit rerurn

const  sumArrow = (a,b) => {

    return a + b

}

sumArrowsValue = sumArrow(2,5)
// console.log(`the sum is: ${sumArrowsValue}`)



// Arrow function with implicit rerurn

const  sumArrow2 = (a,b) =>   a + b
//sumArrowsValue = sumArrow(2,7)
// console.log(`the sum is: ${sumArrowsValue}`)


// Arrays structure allow multiple values

const arrayTest = ['Fabio', 10, 2.50, 'Arturo']
// console.log(`Valore -> ${arrayTest[1]}`)

// method to add at the end of array
arrayTest.push(8)

let lenghtArray = arrayTest.length
// console.log(`Valore -> ${arrayTest[lenghtArray - 1]}`)

// console.log(arrayTest.slice(1,3)) 

// console.log(arrayTest.indexOf(10)) 


// Object {} Key and Value

/*

const person = {
    fname: 'Fabio',
    fsurname: 'Siciliano'
}

// access object : dot annotation
console.log(person);
console.log(person.fname);
console.log(person.fsurname);

// access object : bracket annotation
console.log(person['fname']);
console.log(person['fsurname']);


// assign object
person.eta = 10
console.log(person.eta);

// Object empty
const person2 = {}

person2.fname = 'MArlos'
person2.eta = 12

console.log(person2);
console.log(person2.fname)
console.log(person2.eta)

*/

// Function with object inside

/*
const  testObj = (paramName,paramSurname) => {

    const person3 = {
        fname: paramName,
        fsurname: paramSurname,
        deposit: 100000,
        interestAnnual: 2.5,
        incomingAnnualNet: function () {

           return this.deposit * this.interestAnnual / 100
        }


    }

    return person3

}

objPerson3 = testObj('Pluto','Parneo')

console.log(objPerson3.fname)
console.log(objPerson3.fsurname)

console.log(`Name -> ${objPerson3.fname}`)
console.log(`Name -> ${objPerson3.fsurname}`)
console.log(`AnnualIncoming -> ${objPerson3.incomingAnnualNet()}`)

*/

// FOR Loop

/*

const arrayNames = ['Fabio','Marco','Fabio','Zinno']

// old style
for (i =0; i< arrayNames.length; i++){

    console.log(arrayNames[i])

}


// more simple
for(const index of arrayNames){

    console.log(index)
}


// passa array in una funzione

const  testArrayfunc = (arrayNamesParam) => {

    const arrayApp = []
 
    for(const element of arrayNamesParam){

       if (element == 'Fabio') {

        arrayApp.push(index)

       }

    }

    return arrayApp

}

console.log(testArrayfunc(arrayNames))

*/

// Search max valuin in Array

/*
const arrayTest2 = [1,2,3,4,5,6,7]

const  searchMax = (arrayT2) => {

    tempResult = 0
 
    for(const element of arrayT2){

       if (element > tempResult) {

        tempResult = element

       }

    }

    return tempResult

}

console.log('Valore Max in Array ->' + searchMax(arrayTest2))

*/

/*

const phraseTest = ('vamos a Ganar')

const  counterPhrase = (phraseTest2) => {
 
    for(const element in phraseTest2){

        console.log('char phrase ->' + element)

       }

}

counterPhrase(phraseTest)

*/

/*
const phraseTest = ('vamos a Ganar')

const  counterPhrase = (phraseTest2) => {
 
    for(const element of phraseTest2){

        console.log('char phrase ->' + element)

       }

}

counterPhrase(phraseTest)
*/


// Frequency

/*
const phraseTest = ('vamos a ganar')

phrase = phraseTest.split(' ')

const  frequency = (phraseTest2) => {

    for(i=0; i<phraseTest2.length; i++){

        countFreq = 0
 
      for(j=0; j<phraseTest2.length; j++){
    
        if (phraseTest2[i] == phraseTest2[j] ){
   
            countFreq +=1

        }

      }

      console.log('char ->' + phraseTest2[i] + 'frequency ->' + countFreq)

    }

}

frequency(phrase)

*/


