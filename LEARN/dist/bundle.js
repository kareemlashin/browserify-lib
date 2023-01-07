(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
 // browserify main.js -o bundle.js
var one = require('./src/one');
var two = require('./src/news');
var data = require('./src/data');
var main = require('./src/main');

},{"./src/data":2,"./src/main":3,"./src/news":4,"./src/one":5}],2:[function(require,module,exports){
// get data 
function getData(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(null, xhr.responseText);
        } else {
            callback(new Error(xhr.statusText));
        }
    };
    xhr.onerror = function () {
        callback(new Error("Network Error"));
    };
    xhr.send();
}
},{}],3:[function(require,module,exports){
// array functions
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.push(11);
arr.unshift(0);
arr.pop();
arr.shift();
arr.splice(2, 2);
arr.reverse();
arr.sort();
arr.join();
arr.slice(2, 4);
arr.concat(arr);
arr.indexOf(2);
arr.lastIndexOf(2);
arr.every(function (item) {
    return item > 0;
}
);
arr.some(function (item) {
    return item > 0;
}
);
arr.filter(function (item) {
    return item > 0;
}
);
arr.map(function (item) {
    return item * 2;
}
);
arr.reduce(function (acc, item) {
    return acc + item;
}
);
arr.reduceRight(function (acc, item) {
    return acc + item;
}
);
arr.forEach(function (item) {
    console.log(item);
}
);
arr.map(function (item) {
    return item * 2;
}
);
arr.filter(function (item) {
    return item > 0;
}
);

},{}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"dup":4}]},{},[1]);
