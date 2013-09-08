var should = require('should');
var morse = require('../lib/morse');

suite('Morse code', function () {
    suite('letters', function () {    
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

        actual.should.be.eql( expected );
    });    
});
