// Task 1
// Разметку страницы закоментриую, потому что файл становится красным
// <!DOCTYPE html>
// <html>
// <body>
//   <script></script>
console.console.log("Я JavaScript!" );
// </script>
// </body>
// </html>


// Task 2
// <!DOCTYPE html>
// <html>
// <body>
//   <script>
//     <script src="alert.js"></script>
//   </script>
// </body>
// </html>

// Task 3
let admin;
let name;
name = "Джон";
admin = name;
console.log( admin );

// Task 4
let planetName = "Земля";

// Tasl 5
let name = "Ilya";
console.log( `hello ${1}` ); // Вывод: hello 1
console.log( `hello ${"name"}` ); // Вывод: hello name
console.log( `hello ${name}` ); // Вывод: hello Ilya

// Task 6
let userName = prompt("Ваше имя?", '');
//alert(`${userName}`);
console.log(`${userName}`);

// Task 7
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

// Task 8
let a = 2;

let x = 1 + (a *= 2); // x=5

// Task 9
"" + 1 + 0 // 10
"" - 1 + 0 // -1, т.к - не работает со строками и переводит в число
true + false // 1, тк преобразуются в числа
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 //NaN
" \t \n" - 2 // -2, тк такие выражения игнорируются при приобразованиии в числа

// Tasl 10 Уже исправленный код
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

console.log(Number(a) + Number(b)); // 3

// Tasl 11
5 > 4 // true
"ананас" > "яблоко" //false
"2" > "12" // true
undefined == null // true
undefined === null //false
null == "\n0\n" // false
null === +"\n0\n" //false

// Task 12
if ("0") {
    console.log( 'Привет' );
  } // Значение выведется

// Task 13
let javascriptName = prompt('Какое «официальное» название JavaScript?', '');
if (javascriptName == 'ECMAScript') {
    console.log('Верно!');
} else {
    console.log('Не знаете? ECMAScript!');
}

// Task 14
let valueNumber = prompt('Введите число', '');
if (valueNumber > 0) {
    console.log('1');
} else if (valueNumber < 0) {
    console.log('-1');
} else {
    console.log('0');
}

// Task 15
let result = (a + b < 4) ? "Мало" : "Много";

// Tasl 16
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина':
    '';

// Task 17
console.log(null || 2 || undefined ); // выведет 2

// Task 18
// alert( alert(1) || 2 || alert(3) ); выведет сначала 1, потом 2

// Tasl 19
console.log( 1 && null && 2 ); // выведется null

// Task 20
//alert( alert(1) && alert(2) );  сначала 1, потом undefined

// Task 21
console.log( null || 2 && 3 || 4 ); //Выведет 3

// Task 22
let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

console.log(value); //30

// Task 23
let age;
if (age >= 14 && age <= 90);

// Task 24
if (age < 14 || age > 90);

//Task 25
if (-1 || 0) console.log( 'first' ); //выполнится
if (-1 && 0) console.log( 'second' );
if (null || -1 && 1) console.log( 'third' ); //выполнится

// Task 26
let userLogin = prompt('Кто там?', '');
if (userLogin === 'Админ') {
    let userPass = prompt('Пароль?', '')
    if (userPass === 'Я главный'){
        console.log('Здравствуйте!');
    } else if (userPass === '' || userPass === null) {
        console.log('Отменено')
    } else {
        console.log('Неверный пароль');
    }  
} else if (userLogin === '' || userLogin === null) {
    console.log('Отменено');
    else {
        console.log('Я вас не знаю');
    }
}

// Task 27 
console.log(undefined ?? NaN ?? null ?? "" ?? " "); //  NaN выводим первое определенное значние

// Task 28
let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

console.log(city); // "Берлин"

// Task 29 
let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2;

// Task 30
let i = 3;

while (i) {
  console.log( i-- );
} // Выведет 1

// Task 31
let i = 0;
while (++i < 5) console.log( i ); // i = 4

// Task 32
let i = 0;
while (i++ < 5) console.log( i ); //i = 5

// Task 33
for (let i = 0; i < 5; i++) console.log( i ); //одинаково от 0 до 4 

// Task 34
for (let i = 0; i < 5; ++i) console.log( i ); //одинаково от 0 до 4 

// Task 35
for (let i = 2; i <= 10; i++) 
    if (i % 2 == 0) {
        console.log(i);
    }

// Task 36
let i = 0;
while (i < 3) {
    console.log( `number ${i}!` );
    i++;
}

// Task 37
let numInput;
do {
    numInput = prompt("Введите число больше 100", 0);
} while(numInput <= 100 & numInput);

// Task 38
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  console.log( i ); 
}

// Task 40
switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }
// переписано на if ... else
let browser = prompt("Введите браузер", '');
if (browser == 'Edge') {
    console.log("You've got the Edge!")
} else if (browser == 'Chrome' 
    || browser == 'Firefox' 
    || browser == 'Safari' 
    || browser == 'Opera' ) {
    console.log('Okay we support these browsers too' );
} else {
    console.log('We hope that this page looks ok!');
}

// Task 41
const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
// переписано на конструкцию switch case
const number = +prompt('Введите число между 0 и 3', '');
switch(number) {
    case '0': console.log('Вы ввели число 0');
    break;

    case '1': console.log('Вы ввели число 1');
    break;

    case '2': 
    case '3': console.log('Вы ввели число 2, а может и 3');
    break;
}

// Task 42
// function 1
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
  }
  // function 2
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Родители разрешили?');
  }
  // Вывод: Обе функции будут работать одинаково

// Task 43
function checkAge(age) {
    return (age > 18)? true : confirm('Родители разрешили?');
  }
// Task 44
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

// Task 45
function minNumber(a, b) {
    return a < b ? a : b;
}

// Task 46
function exponentiation(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
      }
    return result;
    }   
let x = prompt("x", '');
let n = prompt("n", '');

if (n>=1 && n % 1 == 0) {
    console.log(exponentiation(x, n));
} else {
    console.log("Введите натуральное число n")
}

// Task 47
function ask (question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () console.log("Вы согласились."); ,
    () console.log("Вы отменили выполнение."); 
  );

