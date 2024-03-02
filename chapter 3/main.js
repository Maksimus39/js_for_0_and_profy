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

let arrOfShapes = ['circle', 'triangle', 'rectangle', 'pentagon']
arrOfShapes.splice(2, 0, 'square', 'trapezoid')  // этот метот начал работу со второго индекса и добавил всё содержимое по условию
// первый индекс это с чего начать вставку а второй сколько мы хотим удалить с ранее определённого индекса
console.log(arrOfShapes)


// ---------------------------------------------------- Объединение массивов ----------------------------------------------------------------------

let arr5 = [1, 2, 3]
let arr6 = [4, 5, 6]
let arr7 = arr5.concat(arr6)
console.log(arr7)

let arr8 = arr7.concat(7, 8, 9)
console.log(arr8)

// ---------------------------------------------------- удаление элемента из массива ----------------------------------------------------------------
arr8.pop()
console.log(arr8) // удалится последний элемент массива

arr8.shift()
console.log(arr8) // удаляет первый элемент массива

arr8.splice(1, 3) // удаляет первый элемент и нужное количество затем
console.log(arr8)

delete arr8[0]
console.log(arr8)


// --------------------------------------------------- Поиск элемента --------------------------------------------------------------------------------------

arr8I = [2, 6, 7, 8]
let findValue = arr8I.find(function (e) {
    return e === 6
})  // этот метод вернёт значение массива
let findValue2 = arr8I.find(function (e) {
    return e === 10
})  // // этот метод вернёт значение массива undefined
console.log(findValue, findValue2)


arr8I = [2, 6, 7, 8]
let findIndex = arr8I.indexOf(6) // воврат значения индекса
let findIndex2 = arr8I.indexOf(10) // воврат значения индекса
console.log(findIndex, findIndex2)


arr8I = [2, 6, 7, 8]
let findIndex3 = arr8I.indexOf(6, 1) // этот метод принимает и второй параметр, он указывает с чего начать поиск
console.log(findIndex3)

let animals = ['dog', 'horse', 'cat', 'platupus', 'dog']
let lastDog = animals.lastIndexOf('dog') // тот метод ищет совпадение в массиве по типу а не по индексу
console.log(lastDog)
let search = animals.lastIndexOf('horse')  // тот метод ищет совпадение в массиве по типу а не по индексу
console.log(search)

// ----------------------------------------------------------- Сортировка ------------------------------------------------------------------------------------

let names = ['James', 'Alicia', 'Fatiha', 'Maria', 'Bert']
names.sort() // - этот метод сортируеит массив по именам
console.log(names)

let ages = [18, 72, 33, 56, 40]
ages.sort()  // - этот метод сортируеит массив и по числам
console.log(ages)

// метод reverse
names.reverse()
console.log(names) // этим методом я разворачиваю массив наоборот

// -------------------------------------------------------- Практическое занятие 3.2 ---------------------------------------------------------------------------

let purchase = ['Milk', 'Bread', 'Apples']  // создал массив
console.log(purchase)
purchase.splice(1, 0, 'Bananas', 'Eggs') // заменил значения в массиве
console.log(purchase)

let lastFruits = purchase.pop() // удалил последний элемент массива и вывел его на экран
console.log(lastFruits)

purchase.sort() // отсортировал массив по алфавиту
console.log(purchase)

let indexMilk = purchase.indexOf('Milk') // нашёл и вывел значение индекса Milk
console.log(indexMilk)

purchase.splice(1, 0, 'Carrots', 'Lettuce') // тим методом я добавил два элемента в массив
console.log(purchase)

purchase2 = ['Juice', 'Pop']
console.log(purchase2)

newArraiFruits = purchase.concat(purchase2, purchase2)
console.log(newArraiFruits)

let searchFruit = newArraiFruits.indexOf('Pop', 9)
console.log(searchFruit)
console.log(newArraiFruits)

// --------------------------------------------------------------------------- Многомерные массивы ----------------------------------------------------------------------------------

let someValues1 = [1, 2, 3]
let someValues2 = [4, 5, 6]
let someValues3 = [7, 8, 9]

let arrOfArrays = [someValues1, someValues2, someValues3] // в этой записи получиться массив массивов
console.log(arrOfArrays)

let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(arrOfArrays2)

let value1=arrOfArrays[0][1] // получил значение массива массива
console.log(value1)

let value2=arrOfArrays[2][2] // 9
console.log(value2)

arrOfArraysOfArrays = [arrOfArrays,arrOfArrays,arrOfArrays]
console.log(arrOfArraysOfArrays)

let middleValue = arrOfArraysOfArrays[1][1][1]
console.log(middleValue)

// ---------------------------------------------------------------- Практическое значение 3.3 ---------------------------------------------------------------------

let numberArrays =[1,2,3]
console.log(numberArrays)

let newArr = [numberArrays,numberArrays,numberArrays]
console.log(newArr)

let number = newArr[2][1]
console.log(number)































































