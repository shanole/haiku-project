import { syllableChecker } from './../src/js/phonics.js'

describe('syllableChecker', () => {

  test('should return the number of vowels', () => {
    const string = "I write, erase, rewrite";
    expect(syllableChecker(string)).toEqual(9);
  })
})

