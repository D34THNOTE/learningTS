/** enums are of course a.. something, its own thing, that lets you store values which never change */
enum exampleEnum1 {
    January = 1, // you can specify the number or use the default ones(starting at 0)
    February = 2,
    March = 3,
    April,
    May,
    June,
    July
};

const request = {
    id: 1,
    monthOrdered: exampleEnum1.January //will put number "1" here instead
};

function checkIfJanuary(req: any) { // what is any??? We'll get to it, but you probably already realized and it was very useful here as type "object"
                                    // was creating an error, would still run properly in(or without any type annotation) Javascript but Typescript
                                    // was underlining it
    if(req.monthOrdered === exampleEnum1.January) {
        console.log("The request was sent in January!")
    } else {
        console.log("The request wasn't sent in January")
    }
};

checkIfJanuary(request);