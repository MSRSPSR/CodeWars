function sumTwoSmallestNumbers(numbers) {
  const [a, b] = numbers.sort((a, b) => { return a - b; }).slice(0, 2);
  return a + b;
}
