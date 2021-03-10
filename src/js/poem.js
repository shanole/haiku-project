import { syllableChecker } from './phonics.js'

export default class Poem {
  constructor(string) {
    this.words = string;
    this.linesArray = this.words.split(/\n/);
    this.numberOfLines = this.linesArray.length;
  }

  isHaiku() {
    if (this.numberOfLines === 3 && syllableChecker(this.linesArray[0]) === 5 && syllableChecker(this.linesArray[1]) === 7 && syllableChecker(this.linesArray[2]) === 5) {
      return true;
    } else {
      return false;
    }
  }
}
