// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * RegExp syntax errors must be caught when matcher(s) compiles
 *
 * @path ch15/15.10/15.10.1/S15.10.1_A1_T14.js
 * @description Tested RegExp is "x{1,2}{1}"
 */

//CHECK#1
try {
	$ERROR('#1.1: new RegExp("x{1,2}{1}") throw SyntaxError. Actual: ' + (new RegExp("x{1,2}{1}")));
} catch (e) {
	if ((e instanceof SyntaxError) !== true) {
		$ERROR('#1.2: new RegExp("x{1,2}{1}") throw SyntaxError. Actual: ' + (e));
	}
}


