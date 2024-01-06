function swapNum(firstNum, secNum) {
  //    firstNum = firstNum + secNum - (secNum = firstNum);
  //     return [firstNum,secNum];
  let a = firstNum,
    b = secNum;

    let final = [a,b] = [b,a];
    return final;
}

let result = swapNum(1, 2);
console.log(result, "result");
