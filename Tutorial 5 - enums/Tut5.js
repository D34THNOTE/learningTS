"use strict";
/** enums are of course a.. something, its own thing, that lets you store values which never change */
var exampleEnum1;
(function (exampleEnum1) {
    exampleEnum1[exampleEnum1["January"] = 1] = "January";
    exampleEnum1[exampleEnum1["February"] = 2] = "February";
    exampleEnum1[exampleEnum1["March"] = 3] = "March";
    exampleEnum1[exampleEnum1["April"] = 4] = "April";
    exampleEnum1[exampleEnum1["May"] = 5] = "May";
    exampleEnum1[exampleEnum1["June"] = 6] = "June";
    exampleEnum1[exampleEnum1["July"] = 7] = "July";
})(exampleEnum1 || (exampleEnum1 = {}));
;
const request = {
    id: 1,
    monthOrdered: exampleEnum1.January //will put number "1" here instead
};
function checkIfJanuary(req) {
    // was creating an error, would still run properly in(or without any type annotation) Javascript but Typescript
    // was underlining it
    if (req.monthOrdered === exampleEnum1.January) {
        console.log("The request was sent in January!");
    }
    else {
        console.log("The request wasn't sent in January");
    }
}
;
checkIfJanuary(request);
