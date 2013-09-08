'use strict';
var root = this;
var charMap = require('./morse-map');

var encode = root.encode = function ( input ) {
    var out = '';

    if ( input )
        input.map(function ( c ) {
            return charMap[ c ];
        });
        out = input;

    return out;
};
