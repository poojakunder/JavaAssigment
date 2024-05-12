let arr =[1,2,3,4,5];
console.log("Joined String: "+arr);
arr.push(6);
arr.push(7);
console.log("After Push: "+arr);
arr.pop();
console.log("After Pop: "+arr);
arr.shift();
console.log("After Shift: "+arr);
arr.unshift(0);
console.log("After Unshift: "+arr);
let arr1 =arr.slice(1, 4);
console.log("Sliced Array: "+arr1);
arr.splice(1,1,8);
arr.splice(2,1,9);
console.log("After Splice: "+arr);
console.log("Index of 5: "+arr.indexOf(5));
console.log("3 exists in array: "+arr.includes(3));
console.log("After Reverse: "+arr.reverse());
console.log("After Sort: "+arr.sort());

let st1 = "JavaScript is awesome!";
console.log("Uppercase: "+st1.toUpperCase());
console.log("Lowercase: "+st1.toLowerCase());
console.log("Length: "+st1.length);
console.log('Index of "is": '+st1.indexOf("is"));
console.log("Substring: "+st1.substring(4,10));
let replace = st1.replace("awesome","amazing");
console.log("Replaced String: "+replace);
console.log("Split Array: "+st1.split());










