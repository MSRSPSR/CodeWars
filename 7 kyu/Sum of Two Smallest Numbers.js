function sumTwoSmallestNumbers(numbers) {
  smallest = numbers.sort((a, b) => { return a - b; }).slice(0, 2);
  return smallest[0] + smallest[1];
}
