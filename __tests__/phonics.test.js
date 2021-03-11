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

  test('should count an "e" at the end of a word as a syllable if it is the only vowel in the word', () => {
    const string = "the";
    expect(syllableChecker(string)).toEqual(1);
  })

  test('should not count a vowel if it occurs immediately after another vowel', () => {
    const string = "Eat my shorts";
    expect(syllableChecker(string)).toEqual(3);
  })

  test('if a word has a vowel+"y"+vowel combination, should increment vowelCount by 2', () => {
    const string = "player";
    expect(syllableChecker(string)).toEqual(2);
  })
})

