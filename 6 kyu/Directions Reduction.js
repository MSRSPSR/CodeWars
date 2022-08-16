let dirHash = {
  NORTH: "SOUTH",
  SOUTH: "NORTH",
  EAST: "WEST",
  WEST: "EAST",
};

function dirReduc(arr) {
  let retArr = [];
  for (let char = 0; char < arr.length; char++) {
    if (arr[char] === "NORTH" && arr[char - 1] === "SOUTH") arr.pop();
    else if (arr[char] === "SOUTH" && arr[char - 1] === "NORTH") arr.pop();
    else if (arr[char] === "EAST" && arr[char - 1] === "WEST") arr.pop();
    else if (arr[char] === "WEST" && arr[char - 1] === "EAST") arr.pop();
    else {
      retArr = [arr[char]];
    }
  }
  return retArr;
}

console.log(dirReduc(["NORTH", "WEST", "SOUTH", "WEST"]));
