'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
let url: string = 'https//www.reddit.com/r/nevertellmethebots';

//first I split it with substr where the ':' character is missing
let firsthalf: string = url.substr(0,5);
let secondhalf: string = url.substr(5);
//console.log(firsthalf);
//console.log(secondhalf);

//here I concatenate the three parts together
let missing:string = ':';
let complete: string = firsthalf.concat(missing, secondhalf);
//console.log(complete);

//here I replace 'bots' with 'odds'
url = complete.replace('bots', 'odds');
console.log(url);

