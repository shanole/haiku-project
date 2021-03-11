import Poem from './../src/js/poem.js'

describe('Poem', () => {
  let testPoem;

  beforeEach(() => {
    testPoem = new Poem(`An old silent pond...
A frog jumps into the pond,
splash! Silence again.`);
  });

  test('should correctly create a poem object from a string argument', () => {
    expect(testPoem.words).toEqual(`An old silent pond...
A frog jumps into the pond,
splash! Silence again.`);
      });

  test('should separate the string into separate lines, put each line into a seperate index within an array, and assign the array to a property with the key linesArray', () => {
    expect(testPoem.linesArray).toEqual(["An old silent pond...", "A frog jumps into the pond,", "splash! Silence again."])
  })

  test('creates a property with the key numberOfLines and the value of linesArray.length', () => {
    expect(testPoem.numberOfLines).toEqual(3)
  })

  test('should return true for a 3-line Poem that has 5 syllables in its first line, 7 syllables in its second line, and 5 syllables in its third line, and return false otherwise', () => {
    let notHaiku = new Poem(`This is an example of something
that is not a haiku
hello`);
    expect(testPoem.isHaiku()).toEqual(true);
    expect(notHaiku.isHaiku()).toEqual(false);
  })
})