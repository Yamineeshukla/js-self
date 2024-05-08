// singleton
//object.create
//object literals

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")
const JsUser ={
    name : "Hitesh",
    fullname : "Hiteshhh",
    mySym:"myKey1",
    [mySym2]:"myKey2",
    age : 18,
    location: "Jaipur",
    email: "yaminee@google.com",
    isLoggedIn: false,
    lastLoginDays:  ["Monday","staurday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullname"])
console.log(typeof JsUser.mySym)
console.log(typeof JsUser[mySym2])
console.log( JsUser[mySym2])

JsUser.email="yaminee.com"
//Object.freeze(JsUser)
JsUser.email="lalala.com"
console.log(JsUser);
//output  ==yaminee@google.com
//yaminee@google.com
//Hiteshhh
//string
//string
//myKey2
/*{
  name: 'Hitesh',
  fullname: 'Hiteshhh',
  mySym: 'myKey1',
  age: 18,
  location: 'Jaipur',
  email: 'yaminee.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'staurday' ],
  [Symbol(key2)]: 'myKey2'
}*/

JsUser.greeting = function(){
   console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`)
 }

console.log(JsUser.greeting);
// [Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
