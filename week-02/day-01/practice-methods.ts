'use strict';

//So let's try how .indexOf works:
let str1: string = 'Hello I am a new string.';

let index: number = str1.indexOf ('new');
console.log(index);

//Let's se .replace:
//var re = /apples/gi; 
let re = /juicy/gi; 
let str = "Apples are round, and apples are juicy.";
let newstr = str.replace(re, "sweet"); 
console.log(newstr)

//this is till replace
var re2 = /(\w+)\s(\w+)/; 
var str2 = "zara ali"; 
var newstr2 = str2.replace(re2, "$2, $1"); 
console.log(newstr2);

//Separator: we can specify a character where is splits up the string:
var str3 = "Apples are round, and apples are juicy."; 
var splitted = str3.split(" ", 6); 
console.log(splitted)

//substr: returns a new string extracted from the original, starting from the given start value till the lengths defined
var str4 = "Apples are round, and apples are juicy."; 
console.log("(1,2): "    + str4.substr(1,2)); 
console.log("(-2,2): "   + str4.substr(-2,2)); 
console.log("(1): "      + str4.substr(1)); 
console.log("(-20, 2): " + str4.substr(-20,2)); 
console.log("(20, 2): "  + str4.substr(20,2));

//slice: copies out a part of the origina string which is specified by the index number or start and end
var str5 = "Apples are round, and apples are juicy."; 
var sliced = str5.slice(3, -2); 
console.log(sliced);

//charAt: returns a character from a specified index
let str6: string = "This is string"; 
console.log("str.charAt(0) is:" + str6.charAt(0)); 
console.log("str.charAt(1) is:" + str6.charAt(1)); 

//concat: adding one string after the other and returns them together in a concatenated string
let str7: string = "This is string one"; 
let str8: string = "This is string two"; 
let str9 = str7.concat( str8 ); 
console.log("str7 + str8 : "+str9)