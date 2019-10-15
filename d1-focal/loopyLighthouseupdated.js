function multiple(number, division, word) {
  if (number % division === 0) {
    return word;
  } else {
    return "";
  }
}
function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (multiple(i, multiples[0], words[0]) || multiple(i, multiples[1], words[1])) {
      console.log(multiple(i, multiples[0], words[0]) + multiple(i, multiples[1], words[1]));
    }
    else {
      console.log(i);
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"])