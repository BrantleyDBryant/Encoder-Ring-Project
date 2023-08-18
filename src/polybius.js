// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const polybiusModule = (function () {

  // Define the polybius function within the anonymous module
  function polybius(input, encode = true) {

    // Check for uneven number of characters when decoding
    const newInput = input.replace(/\s/g, ''); // Convert input to numbers only so spaces do not count
    if (!encode && newInput.length % 2 !== 0) {
      return false;
    }

    // Define the Polybius square with letters and their corresponding positions
    const polybiusSquare = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I', 'K'], // Note: 'J' is combined with 'I'
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z']
    ];

    if (encode) {
      // Encoding: Convert letters to number pairs
      const message = input.toUpperCase().replace(/J/g, 'I'); // Replace 'J' with 'I'
      let encoded = '';

      for (let char of message) {
        if (char === ' ') {
          encoded += ' '; // Ignore spaces, keep them intact
        } else {
          // Loop through the rows in the Polybius square
          for (let row = 0; row < polybiusSquare.length; row++) {
            // Find the column index of the character in the current row
            const col = polybiusSquare[row].indexOf(char);
            if (col !== -1) {
              encoded += `${col + 1}${row + 1}`; // Append the encoded position to the result
              break;
            }
          }
        }
      }

      return encoded;
    } else {
      // Decoding: Convert number pairs to letters
      const pairs = input.match(/(?:[^\s]{2})|\s/g); // Split input into pairs of two characters (excluding spaces)
      let decoded = '';

      for (let pair of pairs) {
        if (pair === ' ') {
          decoded += ' '; // Ignore spaces, keep them intact
        } else {
          const row = parseInt(pair[0]) - 1; // Convert first digit to row index
          const column = parseInt(pair[1]) - 1; // Convert second digit to column index

          if (row === 3 && column === 1) {
            decoded += '(I/J)'; // Handle special case for I/J
          } else {
            decoded += polybiusSquare[column][row]; // Append decoded letter
          }
        }
      }

      return decoded.toLowerCase(); // Return the decoded message in lowercase
    }
  }

  return {
    polybius,
  };
})();

// Export the polybius function from the module
module.exports = { polybius: polybiusModule.polybius };





