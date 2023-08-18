// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    // Validate the alphabet parameter
    if (!alphabet || typeof alphabet !== 'string' || alphabet.length !== 26 || [...new Set(alphabet)].length !== 26) {
      return false;
    }

    // Define the standard alphabet and substitution alphabet
    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const substitutionAlphabet = alphabet.toLowerCase();

    let result = '';

    for (let char of input) {
      // Ignore spaces
      if (char === ' ') {
        result += ' ';
        continue;
      }

      // Ignore case
      char = char.toLowerCase();

      // Find the index of the character in the appropriate alphabet
      const index = encode ? standardAlphabet.indexOf(char) : substitutionAlphabet.indexOf(char);
      
      // If character is found, apply the substitution
      if (index !== -1) {
        result += encode ? substitutionAlphabet[index] : standardAlphabet[index];
      } else {
        // If character is not in the alphabet, keep it unchanged
        result += char;
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

