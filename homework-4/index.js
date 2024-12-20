// Task 1
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// первый вариант
function sumTo(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result;
}
// второй вариант
function sumTo(n) {
    if (n == 1) {
        return 1;
      } else {
        return n + sumTo(n - 1);
      }
}
// третий вариаант (самый быстрый)
function sumTo(n) {
    n * (n + 1) / 2;
}

// Task 2
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
function factorial(n) {
    if (n == 1) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
}

// Task 3
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// Task 4
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.
// цикл
function printList(list) {
    let tmp = list;
    while (tmp) {
      comsole.log(tmp.value);
      tmp = tmp.next;
    }
  }
// рекурсия
function printList(list) {

    console.log(list.value); 
    if (list.next) {
      printList(list.next);
    }
  
  }

// Task 5
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.
// рекурсия 
function printReverseList(list) {
    if (list.next) {
      printReverseList(list.next);
    }
    console.log(list.value);
  }
// цикл
function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log( arr[i] );
    }
  }

// Task 6
// Функция sayHi использует имя внешней переменной. Какое значение будет использоваться при выполнении функции?
let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // что будет показано: "John" или "Pete"?
// Pete

// Task 7
// Приведенная ниже функция makeWorker создает другую функцию и возвращает ее. Эта новая функция может быть вызвана из другого места.
// Будет ли она иметь доступ к внешним переменным из места своего создания, или из места вызова, или из обоих мест?
function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // создаём функцию
  let work = makeWorker();
  
  // вызываем её
  work(); // что будет показано? - Pete

// Task 8
// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // 0,1
alert( counter2() ); // 0,1

// Task 9
// Здесь объект счётчика создан с помощью функции-конструктора.
// Будет ли он работать? Что покажет?
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  alert( counter.up() ); // 1
  alert( counter.up() ); // 2
  alert( counter.down() ); // 1

// Task 10
// Посмотрите на код. Какой будет результат у вызова на последней строке?
// Обратите внимание: результат зависит от режима выполнения кода. Здесь используется строгий режим "use strict".
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
// будет ошибка

// Task 11
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
function sum(a) {
    return function(b) {
      return a + b; // берёт "a" из внешнего лексического окружения
    };
  }
console.log( sum(1)(2) ); // 3
console.log( sum(5)(-1) ); // 4

// Task 12
// Что выведет данный код?

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
// будет ошибка

// Task 13
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }

// Task 14
// У нас есть массив объектов, который нужно отсортировать
//Обычный способ был бы таким:
// по имени (Анна, Иван, Пётр)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Пётр, Анна, Иван)
users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, например вот таким?
users.sort(byField('name'));
users.sort(byField('age'));
// То есть чтобы вместо функции мы просто писали byField(fieldName).
// Напишите функцию byField, которая может быть использована для этого.
  function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }

// Task 15  
// Следующий код создаёт массив из стрелков (shooters).
//  Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
// Почему у всех стрелков одинаковые номера?
// Почините код, чтобы он работал как задумано.
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let shooter = function() { // функция shooter
        alert( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter); // и добавлять стрелка в массив
      i++;
    }
  
    // ...а в конце вернуть массив из всех стрелков
    return shooters;
  }
  
  let army = makeArmy();
  
  // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
  army[0](); // 10 от стрелка с порядковым номером 0
  army[1](); // 10 от стрелка с порядковым номером 1
  army[2](); // 10 ...и т.д.

// починенный код
function makeArmy() {
    let shooters = [];
  
    for (let i = 0; i < 10; i++) {
      let shooter = function() {
        alert( i );
      };
      shooters.push(shooter);
    }
    return shooters;
  }