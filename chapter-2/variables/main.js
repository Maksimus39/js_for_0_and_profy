let firstName = "Maaike"
console.log(firstName)
firstName = "Max"
console.log(firstName)

let a = 5
console.log(a)
a = 6
console.log(a)

const work = "NLMK"
console.log(work)
// work = "LPACK" - для констант нельзя менять значение в примитивах

const sport = "Run"
console.log(sport)

let nr1 = 12
var nr2 = 8
const PI = 3.1159
console.log(nr1, nr2, PI)

// ----------------------------------------------------STRING ---------------------------------------------

let singleString = 'Hi there!'
console.log(singleString)

let doubleString = "How are you?"
console.log(doubleString)

let funActivity = "Let's learn JavaScript"
console.log(funActivity)

let funActiv = 'Let"s learn JavaScript' //  - этот вариант хуже
console.log(funActiv)

let language = "JavaScript"
let message = `Let's learn ${language}`
console.log(message)

let language2 = "GoLand"
let message2 = `Let's learn ${language2}`
console.log(message2)

// ---------------------------------------------------------Number --------------------------------------------------

let intNr = 1
let decNr = 1.5
console.log(intNr)
console.log(decNr)
let expNr = 1.4e15
console.log(expNr)


let bigNr = 5248925622523325522n
console.log(bigNr)

//---------------------------------------------------Boolean----------------------------------------------

let bool1 = true
let bool2 = false

console.log(bool1)
console.log(bool2)

//-----------------------------------------------Symbol------------------------------------------------------

let str1 = "JavaScript is fun"
let str2 = "JavaScript is fun"
console.log("Равны эти две переменные?", str1 === str2)


let str3 = Symbol("JavaScript is fun")
let str4 = Symbol("JavaScript is fun")
console.log("Равны эти две переменные?", str3 === str4)