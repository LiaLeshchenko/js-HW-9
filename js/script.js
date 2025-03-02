// завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// const logItems = function (array) {
//     for (let i = 1; i < array.length; i += 1) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// };
// logItems(["Mango", "Poly", "Ajax"]);


// завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас.
//  Для цього створи функцію calculateEngravingPrice
// (message, pricePerWord) приймаючу рядок(в рядку 
// будуть тільки слова і прогалини) і ціну гравіювання
// одного слова, і повертає ціну гравіювання всіх слів в рядку.

// const calculateEngravingPrice = function (message, pricePerWord) {
//     const array = message.split(" ");
//     console.log(array)
//     const count = array.length;
//     return count * pricePerWord;

// }
// const result = calculateEngravingPrice("Happy Valentine's Day", 0.5);
// console.log(result);


// завдання 3
// Напиши функцію findLongestWord(string),
//яка приймає параметром довільний рядок(в
//рядку будуть тільки слова і прогалини)
//і повертає найдовше слово в цьому рядку.

// const findLongestword = function (string) {
// const array = string.split(" ");
// // console. log(array);
// let longestWord = array [0];
// for (const element of array) {
// console.log(element);
// if (element.length > longestWord.length) {
//         longestWord = element;
//     }
// }
// console. log (longestWord);
// return longestWord;
// };
// findLongestword("Happy Valentine's Day!!!");
// console.log(findLongestword("Happy Valentine's Day!! |"));



// Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

// const formatString = function (string) {

//     if (string.length < 40) {
//         return string;
//     } else {

//         return string.slice(0, 41) + "...";
//     }

// };
// formatString("Hello Kateryna, Mykola, Arten");

// console.log(
// formatString("Hello Kateryna, Mykola, Artem, Liya, Nazar, Nikita, Arsenii")
//     );


// Завдання 5
// Напиши функцію checkForSpam(message),
//приймаючу 1 параметр message — рядок.
//Функція перевіряє її на вміст слів spam 
//і sale.Якщо знайшли заборонене слово, то
// функція повертає true, якщо заборонених 
// слів немає функція повертає false.Слова в 
//рядку можуть бути в довільному регістрі.

// const checkForSpam = function (message) {

// // const normalizedMessage = message. toLowercase():

//     message.toLowerCase();

// return (
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
// );
// };

// console.log(checkForSpam("JavaScript weekly newsletter")); // false 
// console.log(checkForSpam("Get best sale offers now!")); // true 
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


// Завдання 6
// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

let input;
const numbers = [];
let total = 0;
while (input !== null) {
input = prompt("Введіть число");
console. log(input);

    if (input !== null) {

        numbers.push(input);
    }

        console.log(numbers);
    }

        if(numbers.length > 0) {
for (const number of numbers) {
    total += number;
    }
}
    console.log(`Загальна сума чисел дорівнює ${total}`);