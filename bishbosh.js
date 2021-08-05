function firstImplementation() {
    console.log("==========================")
    console.log("Första Implementationen")
    console.log("==========================")
    let bishbosh = "";
    
    for (i=1; i <= 10; i++) {
        bishbosh = i;
        if (i%3 == 0 ) { bishbosh = "Bish";}
        if (i%4 == 0 ) { bishbosh = "Bosh";}
        if (i%3 == 0 & i%4 == 0) {bishbosh = "Bish-Bosh";}
        console.log(bishbosh);
    }

    console.log(" ")
}

function secondImplementationByForm(){
    console.log("==========================")
    console.log("Andra Implementationen via Form")
    console.log("==========================")

    let bish = document.getElementById("bish").value;
    let bosh = document.getElementById("bosh").value;
    let maxLoop = document.getElementById("maxloop").value;

    let bishbosh = "";
    let outputString = "";

    for (i=1; i <= maxLoop; i++) {
        bishbosh = i;
        if (i%bish == 0 ) { bishbosh = "Bish";}
        if (i%bosh == 0 ) { bishbosh = "Bosh";}
        if (i%bish == 0 & i%bosh == 0) {bishbosh = "Bish-Bosh";}
        //console.log(bishbosh);
        outputString += bishbosh + "<br>";
    }

    document.getElementById("bishboshoutput").innerHTML = outputString;
}

function secondImplementationByPromptu(){
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
    }

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