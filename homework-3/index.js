// Task 1
let str = "Привет";

str.test = 5;

alert(str.test);
// Это не сработает, примитивы не являются объектами

// Task 2
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let firstNumber = +console.log("Введите первое число", "");
let secondNumber = +console.log("Введите второе число", "");

console.log(firstNumber+secondNumber);

// Task 3
// почему в примере ниже 6.35 округляется до 6.3? 
 alert( 6.35.toFixed(1) ); // 6.3 - т.к во внутреннем представлении это бесконечная двоичная дробь, поэтому округляется с потерей точности
 // Как правильно округлить 6.35?
 console.log( Math.round(6.35 * 10) / 10 );

 // Task 4
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
 function readNumber () {
    let valueNumber;
    do {
        valueNumber = console.log("Введите число", 0);
      } while ( !isFinite(valueNumber) );
    if (valueNumber === null || valueNumber === '') { return null;
    }
    return +valueNumber;
 }
 console.log(`Число: ${readNumber()}`);

// Task 5
//Этот цикл – бесконечный. Он никогда не завершится, почему?
let i = 0;
while (i != 10) {
  i += 0.2;
}
// цикл не завершится из-за потери точности при сложении десятичных дробей

// Task 6
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Task 7
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
function randomInteger(min, max) {
  let randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}

// Task 8
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
function ucFirst(str) {
    let upStr = str[0].toUpperCase() + str.slice(1);
    return upStr;
}

// Task 9
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
function checkSpam(str) {
    let lowerStr = srt.toLowerCase();
    return (lowerStr.includes("viagra") || lowerStr.includes("XXX"));

}

// Task 10
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
function truncate(str, maxlength) {
    let strLength = str.length;
    if (srtLength > maxlength) {
       let newStr = srt.slice(0, maxlength-1) + '…';
       return newStr;
    } else {
        return str;
    }
}

// // Task 11
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
function extractCurrencyValue(str) {
    return Number(str.slice(1));
}

// Task 12
// Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits?
alert( fruits.length ); // 4

// Task 13
// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Регги");

// Task 14
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
function sumInput(){
    let values = [];
    while (true) {
        let numbers = console.log("Введите число", 0);
        if (numbers === "" || numbers === null || !isFinite(numbers)) break;
        value.push(+value);
}   
    let sum = 0;
    for (let values of value) {
        sum += values;
    }
    return sum;
}

// Task 15
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
    return maxSum;
  }

// Task 16
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
function camelize(str) {
    return str
      .split('-')
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
  }

// Task 17
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

// Task 18
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
          arr.splice(i, 1);
          i--;
        }
      }
}

// Task 19 
// сортировать в порядке по убыванию
arr.sort((a, b) => b - a);

// Task 20
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
function copySorted(arr) {
    return str.slice().sort(arr);
}

// Task 21
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };
      this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

// Task 22
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name); 
let str = users.join(', ')
console.log( names ); // Вася, Петя, Маша

// Task 23
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => {
    return { id : user.id,
             fullName: `${user.name} ${user.surname}`
    }
});

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин

// Task 24
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}

// Task 25
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.
function shuffle(array) {
    for (let i = array.length - 1. i > 0, i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [array [i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
}

// Task 26
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
function getAverageAge(users) {
    let average = users.reduce((sum, user) => sum + user.age, 0);
    return average / users.length;
}

// Task 27
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
function unique(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}

// Task 28
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
function groupById(arr) {
    let result = {}; 
    arr.forEach(user => {
        result[user.id] = user;  // Используем user.id как ключ, а сам user как значение
      });
      return result;
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  
  /*
  после вызова у нас должно получиться:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */

// Task 29
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.
function sumSalaries(salaries) {
    let sum = 0;
    for (let value of Object.values(salaries)) {
        sum += value; 
}
    return sum;
}

// Task 30
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
function count(obj) {
    return Object.keys(obj).length;
}

// Task 31
// У нас есть объект:
let user = {
  name: "John",
  years: 30
};
// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства) 
  let {name, years: age, isAdmin = false} = user;
  
  alert( name ); // John
  alert( age ); // 30
  alert( isAdmin ); // false

// Task 32
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
function topSalary(salaries) {
    let max = 0;
    let maxName = null;
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }

// Task 33
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.parse(JSON.stringify(user));

// Task 34
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));
  
  /*
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
  */
  