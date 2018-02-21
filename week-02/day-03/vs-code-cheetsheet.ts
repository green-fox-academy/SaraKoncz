/*
VS Code Shortcut Selection by Sári

Open Command Palette: Ctrl+Shift+P
Color Theme Selection: Ctrl+K, Ctrl+T
Zoom In/Out: Ctrl+Shift+ó and Ctrl+Shift+-
Open Keyboard Shortcuts: Ctrl+K, Ctrl+S
Add Line Comment: Ctrl+K, Ctrl+C
Remove Line Comment: Ctrl+K, Ctrl+U
Change All Occurences: Ctrl+F2
Copy Line Down: Shift+Alt+Down Arrow
Copy Line Up: Shift+Alt+Up Arrow
Delete Line: Ctrl+Shift+K
Delete Line: Ctrl+Shift+K
Delete Word Left: Ctrl+Backspace
Delete Word Right: Ctrl+Delete
Find: Ctrl+F
    jump next: F3 (or enter)
    jump right: Shift+F3
Switch between windows/GoBack: Alt + Left or Right arrow
Format Content in the Entire Document: Shigt + Alt + F
Toggle Integrated Terminal: Ctrl + ö
*/

'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve   ', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(a: string[], b: string[]) {
    let games: string[] = [];klnkrbsrbk
    for (let i = 0; i < a.length; i++) {
        games = games.concat(a[i]);
        games = games.concat(b[i]);
        return games;
    }
}
console.log(makingMatches(girls, boys));
console.log('Poor Jeff.');


