


function addDiceRolls () {
    
    let num1 = Math.floor(Math.random()*6)+1;
   
    
    return num1;
}

// console.log(addDiceRolls());

console.log(noOfTimes(5));

function noOfTimes(n){
    let total = 0;
    while( n !== 0){
        total += addDiceRolls();
        n--;
    }
    return total;
}

