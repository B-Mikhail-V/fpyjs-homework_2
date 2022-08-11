// функция для определения простого числа
function checkNatural(number) {
   for (let i = 2; i <= number ** 0.5; i++) {
    if (number % i == 0) {
        return false;
    }
   } 
   return true;    
}

// стартуем с двойки
let startNumber = 2

// функция для создания массива с заданным количеством простых чисел
function storeArray(numbersQty) {
    if (!storeArray.list) {
        storeArray.list = [1,];
    }
    while (numbersQty != 1) {
        if (checkNatural(startNumber)) {
            storeArray.list.push(startNumber)
            numbersQty--
        }
        startNumber ++
    }
    return storeArray.list
}

console.time()
console.dir(storeArray(process.argv[2]), {'maxArrayLength': null})
console.timeEnd()