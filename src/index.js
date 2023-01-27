function sums(input) {
  let numArr = input.toString().split("");
  let sum = numArr.reduce((a, b) => Number(a) + Number(b));
  return sum < 10 ? sum : sums(sum);
}
console.log(sums(12367677565645343));
