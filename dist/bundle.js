(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let add = function (a, b) {
    console.log(a + b);
 };
 
 let sub = function (a, b) {
    console.log(a - b);
 };

 module.exports.add = add;
 module.exports.sub = sub;
},{}],2:[function(require,module,exports){
const addd =  function (a, b) {
    console.log(a - b);
 };

const subb =  function (a, b) {
    console.log(a - b);
 };


//export modules
module.exports = {
    addd,
    subb 
}
},{}],3:[function(require,module,exports){
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
},{"./five":1,"./four":2,"./one":4,"./three":5,"./two":6}],4:[function(require,module,exports){
 
var go = function (){
    console.log('xxxxx')
}
module.exports = go;
},{}],5:[function(require,module,exports){
var myFunctions = { 
    myfunc1:function(){
        console.log(1);

    },
    myfunc2:function(){
        console.log(2);
    },
    myfunc3:function(){
        console.log(3);
    },
}
module.exports=myFunctions;
},{}],6:[function(require,module,exports){
 
var two = function (){
    console.log('two')
}
module.exports = two;
},{}]},{},[3]);
