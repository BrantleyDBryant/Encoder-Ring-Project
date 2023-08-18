const { expect } = require('chai');
const { caesar } = require('../src/caesar');

describe('caesar shift function', () => {
    //test for basic error handling in function according to given instructions
    describe('error handling', () => {
        //test that function returns false if inputted shift amounts are 0,
        //above 25, or below -25
        it('should return false if shift amount is 0', () => {
            const message = 'the fault';
            const actual = caesar(message, 0);

            expect(actual).to.be.false;
        });

        it('should return false if shift amount is above 25', () => {
            const message = 'dear brutus';
            const actual = caesar(message, 30);

            expect(actual).to.be.false;
        });

        it('should return false if shift amount is less than -25', () => {
            const message = 'is not in';
            const actual = caesar(message, -30);

            expect(actual).to.be.false;
        });
    });

    //test that the function correctly encodes messages according to given instructions
    describe('encoding a message', () => {

        //test that shifting is done correctly
        it('should shift letters by the input shift amount to encode a message', () => {
            const message = 'our stars';
            const actual = caesar(message, 3);
            const expected = 'rxu vwduv';

            expect(actual).to.equal(expected);
        });

        //test that the function ignores spaces and special characters
        it('should ignore spaces and special characters', () => {
            const message = 'but in ourselves';
            const actual = caesar(message, 3);
            const expected = 'exw lq rxuvhoyhv';

            expect(actual).to.equal(expected);
        });

        //test that the function ignores capital letters
        it('should ignore capital letters', () => {
            const message = 'et tu Brute';
            const actual = caesar(message, 3);
            const expected = 'hw wx euxwh';

            expect(actual).to.equal(expected);
        });

        //test that function correctly wraps to beginning of alphabet or end depending on shift amount
        it('should allow for shift that wrap to opposite end of alphabet', () => {
            const message = 'zenitsu best boy';
            const actual = caesar(message, 3);
            const expected = 'chqlwvx ehvw erb';

            expect(actual).to.equal(expected);
        });

        //test that function allows for negative shift inputs
        it('should shift letters to the left if a negative shift input is given', () => {
            const message = 'zenitsu';
            const actual = caesar(message, -3);
            const expected = 'wbkfqpr';

            expect(actual).to.equal(expected);
        });
    });

    //test that function decodes messages properly according to given instructions
    describe('decoding messages', () => {

        //test that function decodes messages by shifting letters by shifting in opposite direction
        it('should decode a message by shifting letters in opposite direction', () => {
            const message = 'wbkfqpr';
            const actual = caesar(message, -3, false);
            const expected = 'zenitsu';

            expect(actual).to.equal(expected);
        });

        //test that function ignores spaces and special characters when decoding
        it('should ignore spaces and special characters', () => {
            const message = 'hw wx euxwh';
            const actual = caesar(message, 3, false);
            const expected = 'et tu brute';

            expect(actual).to.equal(expected);
        });

        //test that function should ignore capital letters
        it('should ignore capital letters', () => {
            const message = 'hw wx Euxwh';
            const actual = caesar(message, 3, false);
            const expected = 'et tu brute';

            expect(actual).to.equal(expected);
        });

        //test that function wraps around alphabet properly
        it('should wrap around the alphabet for characters near the end', () => {
            const message = 'chqlwvx';
            const actual = caesar(message, 3, false);
            const expected = 'zenitsu';

            expect(actual).to.equal(expected);
        });

        //test that function allows for negative shift inputs
        it('should shift characters to the left for negative shift inputs', () => {
            const message = 'wbkfqpr';
            const actual = caesar(message, -3, false);
            const expected = 'zenitsu';

            expect(actual).to.equal(expected);
        });
    });
});
