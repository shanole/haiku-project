function removePunctuation(string) {
  const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const updatedString = string.replaceAll(punctuation, "");
  return updatedString;
}

function cleanString(string) {
  const noPuncString = removePunctuation(string);
  return noPuncString.toLowerCase();
}

function isVowel(letter) {
  const vowels = ["a", "e", "i", "o", "u", "y"]
  if (vowels.includes(letter)) {
    return true;
  }
  else {
    return false;
  }
}

export function syllableChecker(string) {
  const cleanedString = cleanString(string);
  let vowelCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (isVowel(cleanedString[i])) {
      vowelCount++;
    }
  }

  for (let i = 1; i < string.length; i++) {
    if (isVowel(cleanedString[i]) && isVowel(cleanedString[i - 1])) {
      vowelCount--;
    }
    if (cleanedString[i] === "y" && isVowel(cleanedString[i - 1]) && isVowel(cleanedString[i + 1])) {
      vowelCount++;
    }
  }

  const wordsArray = cleanedString.split(" ");
  wordsArray.forEach(function (word) {
    let wordVowelCount = 0
    for (let i = 0; i < word.length; i++) {
      if (isVowel(word[i])) {
        wordVowelCount++;
      }
    }
    if (word[word.length - 1] === "e" && isVowel(word[word.length - 2]) === false && wordVowelCount > 1) {
      vowelCount--;
    }
  });
  return vowelCount;
}
