let latinString = "";
for (let i = 2; i < process.argv.length; i++) {
  for (let j = 1; j < process.argv[i].length; j++) {
    latinString += process.argv[i][j];
  }
  latinString += process.argv[i][0] + "ay ";
}
console.log(latinString);