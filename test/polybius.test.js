const { expect } = require('chai');
const { polybius } = require('../src/polybius');

describe('polybius() function', () => {
    //test that it encodes messages properly according to given directions
    describe('encoding messages', () => {
        it ('should translate each letter to a pair of numbers', () => {
            const message = 'polybius';
            const actual = polybius(message);
            const expected = '5343134521425434';

            expect(actual).to.equal(expected);
        });

        //test that both i and j are encoded to 42
        it('should encode both i and j to 42', () => {
            const message = 'jackpot juicer';
            const actual = polybius(message);
            const expected = '42113152534344 425442315124';

            expect(actual).to.equal(expected);
        });

        //test that function ignores spaces
        it('should ignore spaces', () => {
            const message = 'jackpot juicer';
            const actual = polybius(message);
            const expected = '42113152534344 425442315124';

            expect(actual).to.equal(expected);
        });
    });

    //test that it decodes messages properly according to given instructions
    describe('decoding messages', () => {

        //test that it translates both i and j correctly
        it('should translate 42 to i and j respectively', () => {
            const message = '42113152534344 425442315124';
            const actual = polybius(message, false);
            
            expect(actual).to.include('i');
            expect(actual).to.include('j');
        });

        //test that it decodes number pairs correctly
        it('should translate each number pair in message to a letter', () => {
            const message = '5343134521425434'
            const actual = polybius(message, false);
            const expected = 'polyb(i/j)us';

            expect(actual).to.equal(expected);
        });

        //test that it ignores spaces
        it('should ignore spaces', () => {
            const message = '42113152534344 425442315124';
            const actual = polybius(message, false);
            const expected = '(i/j)ackpot (i/j)u(i/j)cer';

            expect(actual).to.equal(expected);
        });

        //test that function returns false if input message has an odd number of numbers
        it('should return false if input message is not an even number', () => {
            const message = '124354452';
            const actual = polybius(message, false);

            expect(actual).to.be.false;
        });
    });
});