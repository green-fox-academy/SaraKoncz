// -  Create an array variable named `nimals`
//    with the following content: `["kuty", "macsk", "cic"]`
// -  Add all elements an `"a"` at the end

'use strict';
let nimals: string[] = ["kuty", "macsk", "cic"];
nimals = nimals.map(function(whole){
    return whole + "a";
}
);
console.log(nimals);
