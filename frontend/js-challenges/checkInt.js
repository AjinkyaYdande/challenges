function checkInteger(num) {
  if (num % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
let result = checkInteger("2");
console.log(result);
