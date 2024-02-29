// массивы

let arr = ['hi there', 5, true]
console.log(typeof arr[0])
console.log(typeof arr[1])
console.log(typeof arr[2])

cars = ['Toyota', 'Renault', 'Volkswagen']
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars[-1])

// ------ Следующим кодом можно переписать ячейку массива
cars[0] = 'Tesla'
console.log(cars[0])
console.log(cars)
cars[3] = 'Kia'
cars[-1] = 'Fiat'
console.log(cars[3])
console.log(cars[-1])

// ------------------------------------------------------------- Встроенное свойство длины ---------------------------------------------------------------
colors = ['black', 'orange', 'pink']
booleans = [true, false, false, true]
emtyArray = []

console.log('Length of colors:', colors.length)
console.log('Length of booleans:', booleans.length)
console.log('Length of emtyArray:', emtyArray.length)

// доступ к последнему элементу массива
lastElement = colors[colors.length - 1]
console.log(lastElement)

numbers = [12, 24, 36]
numbers[5] = 48
console.log(numbers.length) // numbers [12,24,36, <2 empty items>, 48] ---- итого значение будет 6 у массива.

// ---------------------------------------------------------- Добавление и замена элементов ------------------------------------------------------------------

favoriteFruits = ['grapefruit', 'orange', 'lemon']
favoriteFruits.push('tangerine')
let lengthFavoriteFruits = favoriteFruits.push('lime')
console.log(lengthFavoriteFruits)
console.log(favoriteFruits)

//        splice

let arrOfShapes=['circle','triangle','rectangle','pentagon']
arrOfShapes.splice(2,0,'square','trapezoid')  // этот метот начал работу со второго индекса и добавил всё содержимое по условию
console.log(arrOfShapes)

































































