// arrow function
const numbers = [1,2,3,4,5];


console.log(numbers.map(n => n+2));


//this
function func() {
    // console.log(this);
    // console.log( this === window);
}

func();

function Person(name) {
    this.firstName = name;
}

Person.prototype.prefixName = function (arr) {
    // 아래 일반 함수에서 사용하기 위해 that이란 변수 생성
    const that = this;

    return arr.map(function (character) {
        // 일반 익명 함수에서 this는 window객체이므로 this.firstName === undefined
        // 따라서 위에서 정의한 that을 사용
        return character + ' ' + that.firstName;
    });
};

const person = new Person('철수');
console.log(person.prefixName(['김', '이']));




