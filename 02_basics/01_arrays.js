//array

const myArr = [0,1,2,3,4,5]
const myHerors=["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);

//Array methods

myArr.push(6)
myArr.push(7)
myArr.push(8)
myArr.pop()
myArr.unshift(9);
myArr.shift()
console.log(myArr.includes(9));// result true or false in boolean
console.log(myArr.indexOf(3));// index of 3
const newArr = myArr.join()//Adds all the elements of an array into a strings,separated by the specified separator
console.log(myArr);
console.log(newArr);//string

// slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);
const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

