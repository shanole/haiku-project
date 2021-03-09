export function syllableChecker(string) {
  const vowels = ["a","e","i","o","u","y"]
  let vowelCount = 0;
  const stringLowerCase = string.toLowerCase();
  
  for (let i=0; i<string.length; i++) {
    if (vowels.includes(stringLowerCase[i])) {
      vowelCount ++;
    }
  }
  const wordsArray = stringLowerCase.split(" ");
  wordsArray.forEach(function(word) {
    if (word[0] === "y") {
      vowelCount --;
    }
  });
  return vowelCount;
}