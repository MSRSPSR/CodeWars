// complete the function
function solution(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "A" && string[i] <= "Z") {
      arr += " ";
    }

    arr += string[i];
  }

  return arr;
}
