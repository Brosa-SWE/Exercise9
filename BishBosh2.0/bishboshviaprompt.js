secondImplementationByPrompt();

// Bish-Bosh via Prompt Input
function secondImplementationByPrompt(){
    console.log("==========================")
    console.log("Andra Implementationen via Prompt")
    console.log("==========================")

    let bish = getIntegerFromUser("Bish");
    let bosh = getIntegerFromUser("Bosh");
    let maxLoop = getIntegerFromUser("MaxLoop");

    let bishbosh = "";
    let outputString = "";
    
    for (i=1; i <= maxLoop; i++) {
        bishbosh = i;
        if (i%bish == 0 ) { bishbosh = "Bish";}
        if (i%bosh == 0 ) { bishbosh = "Bosh";}
        if (i%bish == 0 & i%bosh == 0) {bishbosh = "Bish-Bosh";}
        console.log(bishbosh);
        outputString += bishbosh + "<br>";
    }

    document.getElementById("bishboshoutput").innerHTML = outputString;
}

function getIntegerFromUser(valueInPrompt) {

    while(true) {
       
        let inputInt = parseInt(prompt("Ange talet för " + valueInPrompt + ":"), 10);

        if (isNaN(inputInt) | inputInt < 0) {
            alert("Du måste ange ett heltal mer än 0!");
        }
        else {
            return inputInt;
        }
    }
}
