const numerals = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

function solution (roman) {
  let count = 0;
  let sum = 0;

  while (count < roman.length) {
    if (numerals[roman[count]] < numerals[roman[count + 1]]) {
      sum += numerals[roman[count + 1]] - numerals[roman[count]];
      count = count + 1;
    } else {
      sum += numerals[roman[count]];
    }
    count = count + 1;
  }

	return sum;
}

console.log("IV = ", solution("IV"));
console.log("XII = ", solution("XII"));
console.log("MDCLXVI = ", solution("MDCLXVI"));
console.log("MMVIII = ", solution("MMVIII"));
console.log("MCMXC = ", solution("MCMXC"));

