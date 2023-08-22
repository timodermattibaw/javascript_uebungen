function pangramm(s) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var string = s.toLowerCase();

  for (let index = 0; index < alphabet.length; index++) {
    if (!string.includes(alphabet[index])) {
      return false;
    }
  }
  return true;
}

console.log(pangramm("The quick brown fox jumps over the lazy dog."));
console.log(pangramm("Kein Pangramm."));
