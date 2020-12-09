"use strict";
exports.__esModule = true;
var _ = require("lodash");
//_.sum sums up all the elements in an array. Very useful for replacing 'reduce' array method 
//function for _.sum from lodash
var arr1 = [1, 2, 4, 5, 6, 7, 8, 9];
var sum = function (arr) {
    var add = 0;
    for (var i = 0; i < arr.length; i++) {
        add += arr[i];
    }
    return add;
};
console.log(sum(arr1));
//_.filter returns a new filtered array for all elements that evaluate to true
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];
var usingFilter = _.filter(users, 'user');
console.log(usingFilter);
//_.chunk from lodash immplemented without using built in methods
var arr2 = [];
var arr3 = [];
var chunk = function (a, b) {
    if (a === void 0) { a = []; }
    var arr1 = [];
    for (var i = 0; i < b; i++) {
        arr1.push(a[i]);
    }
    for (var i = b; i < a.length; i++) {
        arr2.push(a[i]);
    }
    arr3.push(arr1);
    arr3.push(arr2);
    return arr3;
};
var final = chunk([1, 2, 3, 4, 5, 6], 2);
console.log(final);
//_.find implemented without using inbuilt methods
var NewArr = [];
var find = function (a) {
    for (var i = 0; i < a.length; i++) {
        if (typeof (a[i]) == 'string') {
            NewArr.push(a[i]);
        }
    }
    return arr1;
};
var final2 = find(['a', 2, 3, 'b', 'c', 'd']);
console.log(final2);
//.reduce() implemented without using inbuilt function
var reducer = 0;
var reduce = function (arr, acc) {
    for (var i = 0; i < arr.length; i++) {
        reducer += arr[i];
    }
    var final = reducer + acc;
    return final;
};
console.log(reduce([1, 2, 3, 4], 5));
