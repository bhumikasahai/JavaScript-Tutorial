let myName = "bhumika      "
console.log(myName.length); //13
console.log(myName.trim().length); //7

//console.log(myName.trueLength());

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.bhumika = function(){
    console.log(`bhumika is present in all objects`);
}

Array.prototype.heybhumika = function(){
    console.log(`bhumika says hello`);
}

//heroPower.bhumika()
//myHeroes.bhumika() // hierarchy of getting include every where
myHeroes.heybhumika()
//heroPower.heybhumika()

//INHERITANCE

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User //teacher can inherit user

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chai aur code      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"bhumika".trueLength()
"icetea".trueLength()