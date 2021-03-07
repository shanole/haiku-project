export default class Poem {
  constructor(string) {
    this.words = string;
  }

  findLines() {
    this.linesArray = this.words.split( /\n/);
    this.numberOfLines = this.linesArray.length;
  }
}
