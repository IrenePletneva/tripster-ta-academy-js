// Task 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task 2
function isEmpty(obj) {
    for (let key in obj){
        return false;
    }
    return true;
}

// Task 3
// Объект, объявленный через const, может быть изменён.
const user = {
    name: "John"
  };
  
  // это будет работать? - да будет
  user.name = "Pete";

// Task 4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
console.log(sum);

// Task 5
function multiplyNumeric(obj) {
    for (let key in obj){
        if (typeofobj[key] == 'number'){
            obj[key] *= 2;
        }
    }
}


