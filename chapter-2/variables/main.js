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
// ------------------------------------------undefined -----------------------------------------------------------------------

let unassigned
console.log("unassigned :", unassigned)

// ------ null
let empty = null
console.log('empty:', empty)

let terribleThingTodo = undefined
let lastName
console.log('Same undefined:', lastName === terribleThingTodo) // - это две неопределённые переменные

// определение типа переменной

testVariable = 1
variableTypeTest1 = typeof testVariable
variableTypeTest2 = typeof (testVariable)

console.log(testVariable) // это выведет цифру
console.log(variableTypeTest2) // это выведет тип

let str = 'Hello'
let nr = 7
let bigint = 1235546875215844n
let bool = true
let sum = Symbol('unique')
let undef = undefined
let unknown = null


console.log('str', typeof str)
console.log('nr', typeof nr)
console.log('bigint', typeof bigint)
console.log('bool', typeof bool)
console.log('sum', typeof sum)
console.log('undef', typeof undef)
console.log('unknown', typeof unknown)

// --------- преобразование типов данных -----------------

let nro = 2
let nra = '2'
console.log(nro * nra)

console.log(nro + nra)

let nrToStr = 6
nrToStr = String(nrToStr)
console.log(nrToStr, typeof nrToStr)

let nrA = 2
let nrB = '2'
console.log(nrA + Number(nrB))

// Практическое занятие 2.1
let strOne = 'Laurence'
let strTwo = 'Svekis'
let valOne = undefined
let valTwo = null
let myNum = 1000

console.log(strOne, typeof strOne)
console.log(strTwo, typeof strTwo)
console.log(valOne, typeof valOne)
console.log(valTwo, typeof valTwo)
console.log(myNum, typeof myNum)


// -------------------------------Операторы ----------------------------------------------

let nrO = 12
let nrT = 14
let result1 = nrO + nrT
console.log(result1)

// этим оператором можно склеивать строки
let str11 = 'Hello'
let str22 = 'addition'
console.log(str11 + ' ' + str22)

// практическое занятие 2.2
let name = 'Maksim'
let age = 40
let youreCodingJS = false
console.log('Hello, my name is ' + `${name}` + ', I am ' + `${age}` + ' years old and I can code JavaScript: ' + `${youreCodingJS}`)

// вычитание
let nomer1 = 20
let nomer2 = 4

let string = 'Hi'
let nomer3 = 3
let result11 = nomer1 - nomer2
let result2 = string - nomer3
console.log(result11, result2)

// умножение
let num = 15
let num2 = 10

let string1 = 'Hi'
let num3 = 3
let res1 = num * num2
let res2 = string1 * num3
console.log(res1, res2)


// деление

let numD = 30
let numD2 = 5
let result = numD / numD2
console.log(result)

// возведение в степень

let nrSt = 2
let nrSt2 = 3
let resultSt = nrSt ** nrSt2
console.log(resultSt)

// оператор деления по модулю
let nrMod1 = 10
let nrMod2 = 3
let resultMod = nrMod1 % nrMod2
console.log(resultMod)
console.log(`${nrMod1} % ${nrMod2} = ${resultMod}`)

// унарные операторы инкремент и декремент

let nrIncr = 4
nrIncr++
console.log(nrIncr)

let nrDec = 4
nrDec--
console.log(nrDec)

































































































