let str = "this is a good thing";
let str2 = "this is a good thing to do and will always be a good the best thing";

let strArr = str.split(" ");


function ask(question) {
  process.stdout.write(`\n\n ${question}`);
  process.stdout.write(' > ');
}

process.stdin.on("data", (data) => {
  strArr = data.toString().trim().split(" ");
  countFrequency()
});

function countFrequency() {

  let pairArr = [];

  for (let i = 0; i < strArr.length; i++) {

    for (let j = 0; j < strArr[i].length; j++) {
        if (j === strArr[i].length -1) continue;
      pairArr.push(`${strArr[i][j]}${strArr[i][j + 1]}`)
    }
  }
console.log(pairArr)
  const reducer = (accumulator, currentValue) => {
    if (accumulator[currentValue]) {
      accumulator[currentValue] = ++accumulator[currentValue]
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator
  };


  let final = pairArr.reduce(reducer, {})
  console.log(final)
  process.exit()
}

ask("Please write a phrase/string to get the result");