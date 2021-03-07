export default class Poem {
  constructor(string) {
    this.words = string;
  }

  findLines() {
    this.lines = this.words.split( /\n/);
  }
}
