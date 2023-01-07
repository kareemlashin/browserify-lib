var one = require('./one');
var two = require('./two');
var myFunctions = require('./three');
var sub = require('./five').sub;
var add = require('./five').add;
var {
    addd,
    subb
} = require('./four');
myFunctions.myfunc1()
myFunctions.myfunc2()
myFunctions.myfunc3()

add(1, 1)
sub(2, 1)
addd(1, 1)
subb(2, 1)
one();
two()