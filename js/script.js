`use strict`

const userNumber = prompt('enter your number');

if(userNumber > 0) {
let flag = `${userNumber} is whole number`;

    for(let i = 2; i < userNumber; i += 1) {
   
        if (userNumber % i === 0) {
            flag = `${i} smallest divisor of numbers ${userNumber}`;
            break;
        } 
    }
    console.log(flag);
} else (console.log('Nan'))

