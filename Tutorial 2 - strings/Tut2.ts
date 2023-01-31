/** Fun fact, you can use backtick "`" to create strings spanning over multiple lines as well as embed variables into strings */
let fullDetails: string;

let name: string = "Bartek";
let age: number = 21;
let bool: boolean = true;

fullDetails = `Name: ${name}
Age: ${age}, ${bool}
And another line for good measure`

console.log(fullDetails)

export {} /** had to add this because something is using variable "name" somewhere and it was causing an erorr */