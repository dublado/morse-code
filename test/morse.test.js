var should = require('should');
var morse = require('../lib/morse');

suite('Morse code', function () {
    suite('letters', function () {    
        test('encode', function () {
            var actual = morse.encode('hello world');
            var expected = [
                '. . . .', ' ',
                '.', ' ',
                '. - . .', ' ',
                '. - . .', ' ',
                '- - -', ' ',
                '      ',
                '. - -', ' ',
                '- - -', ' ',
                '. - .', ' ',
                '. - . .', ' ',
                '- . .'
            ].join('');

            ( typeof( actual ) ).should.be.eql( typeof( expected ) );
            actual.should.be.have.lengthOf( expected.length );
            actual.should.be.eql( expected );
        });

        test('decode char', function () {
            var actual = morse.decodeChar([
                '. . . .',
            ].join(''));
            var expected = 'h';

            ( typeof( actual ) ).should.be.eql( typeof( expected ) );
            actual.should.be.have.lengthOf( expected.length );
            actual.should.be.eql( expected );
        });

        test('extract', function () {
            var actual =  morse.extract([
                '. . . .', ' ',
                '.', ' ',
                '. - . .', ' ',
                '. - . .', ' ',
                '- - -', ' ',
                '      ',
                '. - -', ' ',
                '- - -', ' ',
                '. - .', ' ',
                '. - . .', ' ',
                '- . .'
            ].join(''));   
            var expected = [
                '. . . .',
                '.',
                '. - . .',
                '. - . .',
                '- - -',
                '      ',
                '. - -',
                '- - -',
                '. - .',
                '. - . .',
                '- . .'
            ];

            actual.should.be.eql(expected);
        });

        test('decode', function () {
            var actual = morse.decode([
                '. . . .', ' ',
                '.', ' ',
                '. - . .', ' ',
                '. - . .', ' ',
                '- - -', ' ',
                '      ',
                '. - -', ' ',
                '- - -', ' ',
                '. - .', ' ',
                '. - . .', ' ',
                '- . .'
            ].join(''));
            var expected = 'hello world';

            ( typeof( actual ) ).should.be.eql( typeof( expected ) );
            actual.should.be.have.lengthOf( expected.length );
            actual.should.be.eql( expected );
        });
    });    
});
