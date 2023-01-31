/** I thought I'd preserve this info: you can specify something should be of type "object" like here */

let guy: object
guy = {
    name: "John",
    age: 25
}

//console.log(guy.name); // this shows an error but compiles fine, I guess don't declare objects like above
/** Object is a different thing than object, Object is the thing that has methods like .toString(), valueOf() etc.  */


/** a cool though long way of declaring objects */
let guy1: {
    name: string,
    age: number
} = {
    name: "Guyyy",
    age: 69
}

console.log(guy1)