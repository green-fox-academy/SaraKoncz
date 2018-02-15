'use strict';

let a: number = 3;
// make it bigger by 10
a = a + 10;
console.log(a);

let b: number = 100;
// make it smaller by 7
b = b - 7;
console.log(b);

let c: number = 44;
// double c's value
c = c *2;
console.log(c);

let d: number = 125;
// divide d's value by 5
d = d / 5;
console.log(d);

let e: number = 8;
// what's the cube of e's value?
e = e **2;
console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
let f3: boolean;
if (f1 > f2){
    f3 = true;
    console.log (f3);
 } else {
     f3 = false;
     console.log (f3);
 }

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
let g3: boolean;
if ((g2 *2)>g1) {
    g3 = true;
    console.log (g3);
} else {
    g3 = false;
    console.log (g3);
}

let h: number = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)
let hB : boolean;
if (h%11 == 0) {
    hB = true;
    console.log (hB);
} else {
    hB = false;
    console.log (hB);
}

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let i3: boolean;
if (i1 > (i2**2) && i1 < (i2 **3)) {
    i3 = true;
    console.log (i3);
} else {
    i3 = false;
    console.log (i3);
}

let j: number = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)
let jB: boolean;
if (j%3 ==0 || j%5 ==0) {
    jB = true;
    console.log (jB);
} else {
    jB = false;
    console.log (jB);
}

let k: string = 'Apple';
// fill the k variable with its content 4 times
k = k + k + k + k;
console.log(k);