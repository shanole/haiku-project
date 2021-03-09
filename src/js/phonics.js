export function syllableChecker(string) {
  const vowels = ["a","e","i","o","u","y"]
  let vowelCount = 0;
  
  for (let i=0; i<string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}