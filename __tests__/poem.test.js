import Poem from './../src/js/poem.js'

describe('Poem', () => {
  test('should correctly create a poem object from a string argument', () => {
    const poem = new Poem(`I write, erase, rewrite
    Erase again, and then
    A poppy blooms.`);
    expect(poem.words).toEqual(`I write, erase, rewrite
    Erase again, and then
    A poppy blooms.`)
  });
});