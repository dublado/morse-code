'use strict';
var root = this;
var charMap = require('./morse-map');

var encode = root.encode = function ( input ) {
    var out = '';

    if ( input )
        out = input.split('').map(function ( c, i ) {
            var code = ( charMap[ c ] !== undefined ?
                         charMap[ c ].split('').join(' ') :
                         '' );
            if ( !(i + 1 === input.length) ) code += ' ';
            if ( c === ' ' ) code = '      ';
            return code;
        }).join('');

    return out;
};

var decodeChar = root.decodeChar = function ( c ) {
    var out = '';
    var c = ( c !== undefined ? c.split(' ').join('') : '' );

    if ( c )
        for ( var k in charMap ) {
            var current = charMap[ k ];
            if ( current === c ) {
                out = k;    
                break;
            }
        }

    return out;
};

var extract = root.extract = function ( input ) {
    var out = [];    

    if ( input )
        for ( var k in charMap ) {
            var current = charMap[ k ].split('').join(' ');
            var p = input.indexOf( current ) > -1;
            console.log(current);
            if ( p ) out.push( charMap[ k ] );
        }

    return out;
};

var decode = root.decode = function ( input ) {
    var out = '';
    var input = ( input !== undefined ? input.split('      ') : '' );

    if ( input )
        console.log( input );
        out = input.map(function ( c, i ) {
            var code = decodeChar( c );
            if ( !(i + 1 === input.length) ) code += ' ';
            return code;
        }).join(' '); 

    return out;
};
