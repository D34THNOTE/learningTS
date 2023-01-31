/** tuple is like an array of two objects */
let exampleTuple: [string, number];
exampleTuple = ["Jerry", 25]

/** it can also have an optional field defined with a "?" */
let anRGBwithAlphaExample: [number, number, number, number?]
let anRGBwithAlphaExample2: [number, number, number, number?]

anRGBwithAlphaExample = [255, 0, 0];
anRGBwithAlphaExample2 = [200, 200, 200];
anRGBwithAlphaExample2 = [200, 200, 200, 0.8];

let tupleArray: [string, number][];
tupleArray = [ ["string1", 20], ["string2", 23] ];

console.log(tupleArray)
console.log(tupleArray[0][0])
