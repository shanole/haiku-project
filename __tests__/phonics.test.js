import { syllableChecker } from './../src/js/phonics.js'

describe('syllableChecker', () => {

  test('should return the number of vowels', () => {
    const string = "I write, erase, rewrite";
    expect(syllableChecker(string)).toEqual(9);
  })

  test('should not count "y" as a vowel if it occurs at the beginning of a word', () => {
    const string = "Yak bat";
    expect(syllableChecker(string)).toEqual(2);
  })
})

