class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }
  static titleize(sentence) {
    const exceptions = [
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
      "the",
    ];
    const result = [];
    let arrOfWords = sentence.split(" ");
    for (let n = 0; n < arrOfWords.length; n++) {
      if (n === 0) {
        result.push(this.capitalize(arrOfWords[n]));
      } else {
        if (exceptions.includes(arrOfWords[n])) {
          result.push(arrOfWords[n]);
        } else {
          result.push(this.capitalize(arrOfWords[n]));
        }
      }
    }
    return result.join(" ");
  }
}
