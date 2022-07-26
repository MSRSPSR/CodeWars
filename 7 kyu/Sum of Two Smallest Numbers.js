function sumTwoSmallestNumbers(numbers) {
  return numbers.sort((a, b) => { return a - b; }).slice(0, 2).reduce((x, y) => x + y);
}
