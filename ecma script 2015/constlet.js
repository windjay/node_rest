/*
var snack = 'Meow Mix';

function getFood(food) {
    // var 키워드는 함수 스코프로 동작하므로.... undefined 가 된다...
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

console.log(getFood(false)); // undefined
*/


/*
let snack = 'Meow Mix';

function getFood(food) {
    // var 키워드는 함수 스코프로 동작하므로.... undefined 가 된다...
    if (food) {
        snack = 'Friskies';
        return snack;
    }
    return snack;
}

console.log(getFood(false)); // undefined
*/


let snack = 'Meow Mix';

function getFood(food) {
    // let 은 블록스코프이다..
    if (food) {
        console.log(snack);
        // snack = 'Friskies';
        let snack = 'Friskies';
        return snack;
    }
    return snack;
}

console.log(getFood(true)); // undefined


// const 상수값....
// const api_key = '1243';
// api_key  = '23232';



