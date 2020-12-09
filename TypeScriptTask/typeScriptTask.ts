import * as _ from "lodash";

//_.chunk divides an array into a chunk based on the number provided as the second argument
let usingChunk = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(usingChunk);


//_.sum sums up all the elements in an array. Very useful for replacing 'reduce' array method 
//function for _.sum from lodash
let arr1= [1,2,4,5,6,7,8,9];

let sum = (arr) =>
{
    let add = 0
   for (var i= 0 ; i< arr.length ; i++){
     add +=arr[i]
     
    }
    return add;
}
console.log(sum(arr1));

//_.filter returns a new filtered array for all elements that evaluate to true
let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];



let usingFilter = _.filter(users, 'user');
console.log(usingFilter);


//_.chunk from lodash


let arr2 = []
let arr3 = []
let chunk = (a=[], b) => {
    let arr1 = []
    for (let i = 0; i < b; i++) {
        arr1.push(a[i]);

    }
    for (let i = b; i < a.length; i++) {
        arr2.push(a[i]);
    }
    arr3.push(arr1);
    arr3.push(arr2);
    return arr3;

}
let final = chunk([1, 2, 3, 4, 5, 6], 2);

console.log(final);


//_.find implemented without using inbuilt methods
let NewArr = []
let find = (a) => {
    for (let i = 0; i < a.length; i++) {
        if (typeof (a[i]) == 'string') {
            NewArr.push(a[i]);
        }
        
    }

    return arr1;
}
let final2 = find(['a', 2, 3, 'b', 'c', 'd']);

console.log(final2);

//.reduce() implemented without using inbuilt function
let reducer = 0;
let reduce = (arr,acc) =>
{
    for(let i=0 ; i<arr.length ; i++){
        
        reducer += arr[i]
    }
    let final = reducer+ acc;
    return final;
}

console.log(reduce([1,2,3,4], 5));
