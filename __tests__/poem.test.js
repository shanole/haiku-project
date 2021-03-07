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

  test('should separate the string argument into separate lines and put each line into a Poem.lines property that is an array', () => {
    expect(testPoem.lines).toEqual(["I write, erase, rewrite","Erase again, and then","A poppy blooms."])
  })
});