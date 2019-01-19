/*
let name = '이름';
let age = 30;

// let user = {
//     name: name,
//     age: age
// };

// ecma 2015의 변화...
let user = {
    name,
    age,
    // func: function () {
    //
    // },
    func() {

    }
};


console.log(user);
*/


let arr = [1,2,3];


let one, two, three;

one = arr[0];
two = arr[1];
three = arr[2];

console.log(one);
console.log(two);
console.log(three);

////////////////////////////////

let x, y, z;
[x, y] = [1,2];
console.log("x", x);
console.log("y", y);



// spread 연산자
// let x, y, z;

[x, ...y] = [1,2,3,4,5];

console.log("x", x);
console.log("y", y);
console.log("z", z);




/////////////////////////////////////////


let user = {
    name: '이름',
    age: 30
};


// let name = user.name;
// let age = user.age;

let {name, age} = user;

console.log(name);
console.log(age);

function evenNumbers(...numbers) {
    return numbers.filter(n => n %2 === 0);
}

console.log(evenNumbers(1,2,3,4,5,6,7,8,9));


// import { quest, register, User } from './module/user';
//
// console.log(quest);
// register();






