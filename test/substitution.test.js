const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe('substitution() function', () => {
    //test error handling according to given instructions
    describe('error handling', () => {
        //test that it returns false if no substitution alphabet is given
        it('should return false if no substitution alphabet is given', () => {
            const message = 'betamon';
            const actual = substitution(message);

            expect(actual).to.be.false;
        });

        //test that it returns false if substitution alphabet is not 26 characters
        it('should return false if substitution alphabet is not 26 characters', () => {
            const message = 'agumon';
            const alphabet = 'error';
            const actual = substitution(message, alphabet);

            expect(actual).to.be.false;
        });

        //test that it returns false if substitution alphabet has repeating characters
        it('should return false if substitution alphabet has any repeating characters', () => {
            const message = 'the five boxing wizards';
            const alphabet = 'bsbsbsbsbsbsbsbsbsbsbsbs';
            const actual = substitution(message, alphabet);

            expect(actual).to.be.false;
        });
    });

    //test that it encodes messages according to given instructions
    describe('encoding messages', () => {
        //test that it encodes messages by using given substitution alphabet
        it('should encode messages using given substitution alphabet', () => {
            const message = 'garurumon';
            const alphabet = 'aoitcljdhvgmufenyxswqbkprz';
            const actual = substitution(message, alphabet);
            const expected = 'jaxqxquef';

            expect(actual).to.equal(expected);
        });

        //test that it should work if alphabet given contains special characters
        it('should encode messages if substitution alphabet includes special characters', () => {
            const message = 'despacito';
            const alphabet = '3&9@h8gzywckx%rp1fn*$qit.m';
            const actual = substitution(message, alphabet);
            const expected =  '@hnp39y*r';

            expect(actual).to.equal(expected)
        });

        //test that it should ignore spaces
        it('should ignore spaces', () => {
            const message = 'hello world';
            const alphabet = '3&9@h8gzywckx%rp1fn*$qit.m';
            const actual = substitution(message, alphabet);
            const expected = 'zhkkr irfk@';

            expect(actual).to.equal(expected);
        });
    });

    //test that it decodes messages according to given instructions
    describe('decoding messages', () => {
        //test that it decodes messages using given substitution alphabet
        it('should use given substitution alphabet to decode messages', () => {
            const message = 'zhkkr irfk@';
            const alphabet = '3&9@h8gzywckx%rp1fn*$qit.m';
            const actual = substitution(message, alphabet, false);
            const expected = 'hello world';

            expect(actual).to.equal(expected);
        });

        //test that it decodes messages with special characters
        it('should decode messages with special characters correctly', () => {
            const message = '@hnp39y*r';
            const alphabet = '3&9@h8gzywckx%rp1fn*$qit.m';
            const actual = substitution(message, alphabet, false);
            const expected = 'despacito';

            expect(actual).to.equal(expected);
        });

        //test that it ignores spaces
        it('should ignore spaces', () => {
            const message = 'zhkkr irfk@';
            const alphabet = '3&9@h8gzywckx%rp1fn*$qit.m';
            const actual = substitution(message, alphabet, false);
            const expected = 'hello world';

            expect(actual).to.equal(expected);
        });
    });
});
