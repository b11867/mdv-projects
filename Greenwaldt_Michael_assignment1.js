//alert("JavaScript works!");

// Michael Greenwaldt
// SDI 1306
// Project 1
// My first foray into JavaScript

// My variables
var mngerSig = true; //boolean value
var scrnBox = true; // boolean value
var flexoBox = false;// boolean value
var digBox = false;// boolean value
var numOfBoxChecked = 1;// number value
var mngr = "General Manager" + " \"Bob\"";// string value with a sting with escape value

//My first outputs
console.log ("The " + mngr + " selects either the Silkscreen box, the Flexo box, or the Digital box.");
console.log ("If more than " + numOfBoxChecked + " check box is selected, the request must be returned to the " + mngr +" .");
console.log ("When the Silkscreen box is " + mngerSig + " no other box may be checked.");
console.log ("When the Flexo box is " + mngerSig + " no other box may be checked.");
console.log ("When the Digital box is " + mngerSig + " no other box may be checked.");
console.log ("In this scenario the " + mngr + " marking the silkscreen box is " + scrnBox +".");
console.log ("The " + mngr + " marking the Flexo box is " + flexoBox +".");
console.log ( "The  " + mngr + " marking the Digital box is also " + digBox +".");



//My conditionals
if (scrnBox === mngerSig) {
    //request is approved by the general manager
    console.log ("The " + mngr + " has approved the request for silkcreen.");
    if (numOfBoxChecked > 1) {//math
        //warning that only one box may be checked (nested conditional)
        console.log ("One and only one box may be checked.");
    } else {
        // one box checked is correct
        console.log ("Good job! Only one box has been checked.");
    }
} else {
    // not approved
    console.log ("The " + mngr + " has not approved the request for Silkscreen.")
}

if (flexoBox === mngerSig) {
    //request is approved by the general manager
    console.log ("The " + mngr + " has approved the request for Flexo.");
    if (numOfBoxChecked > 1) {//math
        //warning that only one box may be checked (nested conditional)
        console.log ("One and only one box may be checked.");
    } else {
        // one box checked is correct
        console.log ("Good job! Only one box has been checked.");
    }
} else {
    // not approved
    console.log ("The " + mngr + " has not approved the request for Flexo.")
}

if (digBox === mngerSig) {
    //request is approved by the general manager
    console.log ("The " + mngr + " has approved the request for Digital.");
    if (numOfBoxChecked > 1) {//math
        //warning that only one box may be checked (nested conditional)
        console.log ("One and only one box may be checked.");// output
    } else {
        // one box checked is correct
        console.log ("Good job! Only one box has been checked.");
    }
} else {
    // not approved
    console.log ("The " + mngr + " has not approved the request for Digital.")
}
