// We should know about each sharpie:
// color (which should be a string)
// width (which will be a number)
// inkAmount (another number)
// When instantiating a Sharpie, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount by the width
// Write a loop that consumes all the sharpie's ink.
// Make sure your loop works with any inkAmount, so your code figures out when it's out of ink.

let sharpie = {
  color: '',
  width: 0,
  inkAmount: 0,
  use: function () {
    this.inkAmount -= this.width;
  },
  create: function (color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
    return sharpie;
  }
}

function sharpieConstructor(color, width) {
  let newSharpie = sharpie.create(color, width);
  return newSharpie;
}

let mySharpie = sharpieConstructor('pink', 5);
console.log(mySharpie.color);
console.log(mySharpie.width);
console.log(mySharpie.inkAmount);

mySharpie.use();
console.log(mySharpie.color);
console.log(mySharpie.width);
console.log(mySharpie.inkAmount);

do {
  mySharpie.use();
} while (mySharpie.inkAmount > 0);

mySharpie.use();
console.log(mySharpie.color);
console.log(mySharpie.width);
console.log(mySharpie.inkAmount); 
