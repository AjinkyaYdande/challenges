function generateRandomNumber(){
    let ran = Math.floor(Math.random() * 5);
    return ran;
}

let result = generateRandomNumber();
console.log("Random no is ", result);