let questions = [
  "Please enter three numbers separated by comma(,)?",
];
let answers = [];
let cloToZero;
let index = 0;

function sol(numbersArr) {
  let solArr = [];
  let combinations2 = ["+", "-"];
  let combinations3 = ["++", "+-", "-+", "--"];
  let combinations4 = ["+++", "++-", "+--", "-++", "--+", "---"];
  let combinations5 = ["++++", "+++-", "++--", "+---", "-+++", "--++", "---+", "----"];
  let combinations6 = ["+++++", "++++-", "+++--", "++---", "+----", "-++++", "--+++", "---++", "----+", "-----"];
  let combinations7 = ["++++++", "+++++-", "++++--", "+++---", "++----", "+-----", "-+++++", "--++++", "---+++", "-----++", "------+", "------"];

  let combination = numbersArr.length === 2 ?
      combinations2 :
      numbersArr.length === 3 ?
          combinations3 :
          numbersArr.length === 4 ?
              combinations4 :
              numbersArr.length === 5 ?
                  combinations5 :
                  numbersArr.length === 6 ?
                      combinations6 :
                      combinations7

  for (let i = 0; i < combination.length; i++) {
    switch (numbersArr.length) {
      case 2:
        console.log("inside 2")
        solArr.push(Number(numbersArr[0]) + combination[i] + Number(numbersArr[1]))
        break;
      case 3:
        console.log("inside 3")
        solArr.push(Number(numbersArr[0]) + combination[i][0] + Number(numbersArr[1]) + combination[i][1] + Number(numbersArr[2]))
        break;
      case 4:
        console.log("inside 4")
        solArr.push(Number(numbersArr[0]) + combination[i][0] + Number(numbersArr[1]) + combination[i][1] + Number(numbersArr[2]) + combination[i][2] + Number(numbersArr[3]))
        break;
      case 5:
        console.log("inside 5")
        solArr.push(Number(numbersArr[0]) + combination[i][0] + Number(numbersArr[1]) + combination[i][1] + Number(numbersArr[2]) + combination[i][2] + Number(numbersArr[3]) + combination[i][3] + Number(numbersArr[4]))
        break;
      case 6:
        console.log("inside 6")
        solArr.push(Number(numbersArr[0]) + combination[i][0] + Number(numbersArr[1]) + combination[i][1] + Number(numbersArr[2]) + combination[i][2] + Number(numbersArr[3]) + combination[i][3] + Number(numbersArr[4]) + combination[i][4] + Number(numbersArr[5]))
        break;
      case 7:
        console.log("inside 7")
        solArr.push(Number(numbersArr[0]) + combination[i][0] + Number(numbersArr[1]) + combination[i][1] + Number(numbersArr[2]) + combination[i][2] + Number(numbersArr[3]) + combination[i][3] + Number(numbersArr[4]) + combination[i][4] + Number(numbersArr[5]) + combination[i][5] + Number(numbersArr[6]))
        break;
      default:
        solArr.push(Number(numbersArr[0]) + combination[i][0] + Number(numbersArr[1]) + combination[i][1] + Number(numbersArr[2]) + combination[i][2] + Number(numbersArr[3]) + combination[i][3] + Number(numbersArr[4]) + combination[i][4] + Number(numbersArr[5]) + combination[i][5] + Number(numbersArr[6]))

    }

  }
  console.log(solArr)
  let negativeNumbers = [];
  let positiveNumbers = [];
  solArr = solArr.map(item => eval(item)).sort((a, b) => a - b);
  solArr.forEach(item => {
    if (item < 0) negativeNumbers.push(item)
    else positiveNumbers.push(item)

  })
  let finalArr = [];
  finalArr.push(-Math.max(...negativeNumbers));
  finalArr.push(Math.min(...positiveNumbers));
  finalArr.sort((a, b) => a - b);
  console.log(negativeNumbers, positiveNumbers);
  console.log(finalArr)

  cloToZero = finalArr[0]
}

function ask(i) {
  process.stdout.write(`\n\n ${questions[i]}`);
  process.stdout.write(' > ');
}

process.stdin.on('data', (data) => {

  answers = data.toString().trim().split(",");
  console.log(answers)
  index++;
  if (questions.length < index + 1) {
    process.exit()
  }
  ask(index)
});

process.on("exit", () => {
  process.stdout.write("\n\n")
  sol(answers)
  questions.forEach((item, i) => {
    process.stdout.write(`\n ${questions[i]}: ${answers.join(",")} : possible number close to zero is ${cloToZero}`)
  });
  process.stdout.write("\n\n")
})
ask(index)