/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.2/15.2.3.2-1-3.js
 * @description Object.getPrototypeOf throws TypeError if 'O' is a boolean
 */


function testcase() {
        try {
            Object.getPrototypeOf(true);
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
