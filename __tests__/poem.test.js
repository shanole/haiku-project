import Poem from './../src/js/poem.js'

describe('Poem', () => {
  let testPoem;

  beforeEach(() => {
    testPoem = new Poem(`I write, erase, rewrite
Erase again, and then
A poppy blooms.`);
  });

  test('should correctly create a poem object from a string argument', () => {
    expect(testPoem.words).toEqual(`I write, erase, rewrite
Erase again, and then
A poppy blooms.`)
  });

  test('should separate the string into separate lines, put each line into a seperate index within an array, and assign the array to a property with the key linesArray', () => {
    expect(testPoem.linesArray).toEqual(["I write, erase, rewrite","Erase again, and then","A poppy blooms."])
  })

  test('creates a property with the key numberOfLines and the value of linesArray.length', () => {
    expect(testPoem.numberOfLines).toEqual(3)
  })

  test('should have a method isHaiku that returns true if the poem has 3 lines, and false if not', () => {
    expect(testPoem.isHaiku()).toEqual(true);
  })
});