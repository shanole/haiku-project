import { syllableChecker } from './../src/js/phonics.js'

describe('syllableChecker', () => {

  test('should return the number of vowels', () => {
    const string = "I am a talking dog";
    expect(syllableChecker(string)).toEqual(6);
  })

  test('should not count "y" as a vowel if it occurs at the beginning of a word', () => {
    const string = "Yak bat";
    expect(syllableChecker(string)).toEqual(2);
  })

  test('should not count the silent "e"s that occur at the end of words after a consonant', () => {
    const string = "I write, erase, rewrite";
    expect(syllableChecker(string)).toEqual(6);
  })

  test('should not count a vowel if it occurs immediately after another vowel', () => {
    const string = "Eat my shorts";
    expect(syllableChecker(string)).toEqual(3);
  })
})

