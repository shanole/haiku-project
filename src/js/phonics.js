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
  const vowels = ["a","e","i","o","u","y"]
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
  
  for (let i=0; i<string.length; i++) {
    if (isVowel(cleanedString[i])) {
      vowelCount ++;
    }
  }
  const wordsArray = cleanedString.split(" ");
  wordsArray.forEach(function(word) {
    if (word[0] === "y") {
      vowelCount --;
    } else if (word[word.length-1] === "e" && isVowel(word[word.length-2]) === false) {
      vowelCount --;
    }
  });
  return vowelCount;
}


