const cons = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const vowel = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];

const encodeIntoPigLatin = (str) => {
  const words = str.split(" ");
  const result = [];
  for (const word of words) {
    const firstLetter = word.charAt(0);

    if (vowel.includes(firstLetter)) {
      result.push(`${word}ay`);
    } else {
      const secondLetter = word.charAt(1);
      if (cons.includes(secondLetter)) {
        result.push(`${word.slice(2, word.length)}${word.slice(0, 2)}ay`);
      } else {
        result.push(`${word.slice(1, word.length)}${word.slice(0, 1)}ay`);
      }
    }
  }

  return result.join(" ");
};

const result = "Encodeay intoay igpay atinlay ilesmay";
console.log(result == encodeIntoPigLatin("Encode into pig latin smile"));
