// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"
'use strict';
class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;
  constructor(backgroundColor, text, textColor) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

let PostIt1 = new PostIt('orange', 'Idea 1', 'blue');
let PostIt2 = new PostIt('pink', 'Awesome', 'black');
let PostIt3 = new PostIt('yellow', 'Superb!', 'green');

console.log(PostIt1);
console.log(PostIt2);
console.log(PostIt3);