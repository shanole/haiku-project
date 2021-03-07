export default class Poem {
  constructor(string) {
    this.words = string;
    this.linesArray = this.words.split( /\n/);
    this.numberOfLines = this.linesArray.length;
  }

  isHaiku() {
    if (this.numberOfLines === 3) {
      return true;
    } else {
      return false;
    }
  }
}
