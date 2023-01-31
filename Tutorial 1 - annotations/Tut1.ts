/**
 * Hello kids, in today's lesson we'll learn about annotations in typescript
 * All stolen from: https://www.typescripttutorial.net/
 *
 * To compile Typescript to Javascript in Webstorm right-click on your code and at the bottom you should see an option "Compile TypeScript",
 * after pressing it an arrow will appear under the compiled file in File browser on the left, under that file you will see another file
 * with the same name but with .js at the end, you can only run THAT version of the file
 *
 * OR
 *
 * Enable autocompile in settings: Ctrl + Alt + S -> Languages & Frameworks -> TypeScript -> check "Recompile on changes"
 */

/** Basics */

/** Below you can see a basic use of annotation with simple variables, pretty self-explanatory */
let myVar: string = "its a stringgg"
myVar = "another string"
console.log(myVar)
//myVar = 5 // COMPILE ERROR: Type 'number' is not assignable to type 'string'.

/** Now let's do this with an array(arrays in js ;-;) */
let arrayName: number[] = [1, 5, 6, 3, 8];
console.log(arrayName)

/** Now let's do that for an object */
let person: {
    name: string,
    age: number
};

person = {
    name: "John",
    age: 25
}

/** And now for a function
 *
 * 1. Creating a variable to which we can assign any function that takes a string as an argument and then returns a string
 */
let func: (str: string) => string;

func = function (str: string) {
    return `Your String: ${str}`;
}

console.log(func("test string here"))