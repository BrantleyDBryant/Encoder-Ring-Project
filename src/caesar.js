// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    // Check if shift value is valid and returns false if not 
    if (shift === 0 || shift < -25 || shift > 25) return false; 
    // Create a new variable for the alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    // Use spread to create a new array with the input string broken into lowercase letters.
    const inputArray = [...input.toLowerCase()]; // Convert input to lowercase
    // Map over the input array to perform the Caesar shift
    const shiftedArray = inputArray.map((character) => {
      // Check if character is a lowercase letter
      if (character >= 'a' && character <= 'z') {
        // Find character's position in the alphabet
        const index = alphabet.indexOf(character);
        // Calculate new index after shift for both encoding and decoding 
        const newIndex = (index + (encode ? shift : -shift) + 26) % 26; 
        // Get new shifted character in lowercase
        return alphabet[newIndex];
      } else {
        // Keep special characters like spaces unchanged
        return character;
      }
    }); 

    // Convert the array of shifted characters back to a string
    return shiftedArray.join(''); 
  }
       
  return {
    caesar,
  };
})();

module.exports = caesarModule;

