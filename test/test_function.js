module.exports = {
  inflateString: (string = null, dictionary = null) => {
    if ((string === null) || (dictionary === null)) {
      return false;
    }

    const strInput = string;
    const inputArray = string.split(' ');

    let result = inputArray.map((word) => {
      let tempTranslation = word;
      for (let prop in dictionary) {
        if(word.includes(prop)) {
          tempTranslation = word.replace(prop, dictionary[prop]);
        }
      }
      return tempTranslation;
    });

    return result.join(' ').trim();
  }
}
