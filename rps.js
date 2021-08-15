// let isNetworkOn = false;

// while (!isNetworkOn) {
//   console.log("Network is down. Retry to connect...");

//   // some code to connect network.

//   const randomNumber = Math.floor(Math.random() * 10);
//   console.log("randomNumber is", randomNumber);
//   if (randomNumber > 5) {
//     isNetworkOn = true;
//   }
// }

// console.log("Network is up!")


let userChoice = "rock";
let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        computerChoice = "rock";
    } 
    else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } 
    else {
        computerChoice = "scissors";
    }
    function compare (choice1, choice2) {
        if(choice1===choice2){
        return "The result is a tie!";
        }
        else if(choice1==="rock"){
            if(choice2==="scissors"){
            return "rock wins"
            }
            else if(choice2==="paper"){
            return "paper wins";
            }
        }
        else if(choice1==="paper"){
            if(choice2==="scissors"){
            return "scissors win"
            }
            else if(choice2==="rock"){
            return "paper wins";
            }
        }
        else if(choice1==="scissors"){
            if(choice2==="paper"){
            return "scissors win"
            }
            else if(choice2==="rock"){
            return "rock wins";
            }
        }

}
console.log(compare(userChoice,computerChoice));