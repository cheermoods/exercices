function printNumbers(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i;
    if (i < n) {
      result += " ";
    }
  }
  return result;
}

console.log(printNumbers(5));

export default printNumbers;
