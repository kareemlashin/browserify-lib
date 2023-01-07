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
