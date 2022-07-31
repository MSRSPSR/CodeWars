function solution(number){
  let count = 0;
  let sum = 0;

  if (number < 0) return 0;
  while (count < number) {
    if (count % 3 === 0 || count % 5 === 0)
      sum += count;
    count++;
  }
  return sum;
}
