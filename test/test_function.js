module.exports = {

  inflateString: (string, definitions) => {
    return string.split(' ').map((word) => {
      let Caps = (word.toLowerCase() === word)
      ? false
      : true;

      word = word.toLowerCase();

      for (let term in definitions) {
        (word.includes(term))
        ? word = word.replace(term, definitions[term])
        : word;
      }

      return (Caps)? `${word[0].toUpperCase()}${word.slice(1)}` : word;
    }).join(' ');
  }

}
