function submit(){
    console.log("==========================")
    console.log("Andra Implementationen via Form")
    console.log("==========================")

    let inputError = false;
    let bish = document.getElementById("bish").value;
    if (isInputValueOK(bish)) {
        clearValidityField("bish");
    } else {
        setInvalidField("bish");
        inputError = true;
    }

    let bosh = document.getElementById("bosh").value;
    if (isInputValueOK(bosh)) {
        clearValidityField("bosh");
    } else {
        setInvalidField("bosh");
        inputError = true;
    }

    let maxloop = document.getElementById("maxloop").value;
    if (isInputValueOK(maxloop)) {
        clearValidityField("maxloop");
    } else {
        setInvalidField("maxloop");
        inputError = true;
    }

    if (inputError) {return false;}

    let bishbosh = "";
    let outputString = "";

    for (i=1; i <= maxloop; i++) {
        bishbosh = i;
        if (i%bish == 0 ) { bishbosh = "Bish";}
        if (i%bosh == 0 ) { bishbosh = "Bosh";}
        if (i%bish == 0 & i%bosh == 0) {bishbosh = "Bish-Bosh";}
        console.log(bishbosh);
        outputString += bishbosh + "<br>";
    }

    updateOutput(outputString);
}

function isInputValueOK(inputValue) {

    let inputInt = parseInt(inputValue, 10);

    if (isNaN(inputInt) | inputInt < 0) {
        return false;
    }
    else {
        return true;
    }
}

function hideAlert() {

    var element = document.getElementById("alert");
    element.classList.remove("show");

    updateOutput("");
}

function updateOutput(outputString) {
    document.getElementById("bishboshoutput").innerHTML = outputString;
}

function setupJS() {
    // Event Listener for Submit
    let btn1 = document.querySelector('#btn1');
    btn1.addEventListener('click', submit);

    // Event Listener for Hardcoded Test Buttons

    /* let btn2 = document.querySelector('#btn2');
    btn2.addEventListener('click', setInvalidBosh);

    let btn3 = document.querySelector('#btn3');
    btn3.addEventListener('click', setValidBosh);

    let btn4 = document.querySelector('#btn4');
    btn4.addEventListener('click', clearValidityBosh);
    */

    // F??r inte Event Listeners focus/blur p?? f??lt att fungera!
    // Dessutom anropas funktionerna s?? fort man l??gger till dem p?? Eventen, s??
    // n??got ??r generalknas

    const form = document.querySelector('#inputForm');
    //form['bish'].addEventListener('focus', function(e) {console.log('Fyll i Bishv??rdet')});
 
    form['bish'].addEventListener('focus', clearValidityField("bish"));
 /*
    form['bish'].addEventListener('blur', validateInteger("bish"));

    form['bosh'].addEventListener('focus', clearValidityField("bosh"));
    form['bosh'].addEventListener('blur', validateInteger("bosh"));

    form['maxloop'].addEventListener('focus', clearValidityField("maxloop"));
    form['maxloop'].addEventListener('blur', validateInteger("maxloop"));
*/

    // Add Event Listeners for Field Blur / Focus
/*
    let field1 = document.getElementById("bish");
    field1.addEventListener('blur', validateInteger(field1.id));
    field1.addEventListener('focus', clearValidityField(field1.id));

    let field2 = document.getElementById("bosh");
    field2.addEventListener('blur', validateInteger(field2.id));
    field2.addEventListener('focus', clearValidityField(field2.id));

    let field3 = document.getElementById("maxloop");
    field3.addEventListener('blur', validateInteger(field3.id));
    field3.addEventListener('focus', clearValidityField(field3.id));
*/
}

function validateInteger(fieldname) {

    let inputValue = document.getElementById(fieldname).value;

    if (isInputValueOK(inputValue)) {
        setValidField(fieldname);
    } 
    else {
        setInvalidField(fieldname);
    }
}

function setInvalidField(fieldname) {
    console.log('setInvalidField for ' + fieldname + " called from " + arguments.callee.caller.name);

    clearValidityField(fieldname);

    let field1 = document.getElementById(fieldname);
    field1.classList.add("is-invalid");
    
    let field2 = document.getElementById(fieldname + "invalid");
    field2.classList.add("d-block");
    
}

function setValidField(fieldname) {
    console.log('setValidField for ' + fieldname);

    clearValidityField(fieldname);

    let field1 = document.getElementById(fieldname);
    field1.classList.add("is-valid");
    
}

function clearValidityField(fieldname) {

    // F??r att f??rhindra att funktionerna anropas fr??n setupJS on load
    // redan n??r man l??gger till dem p?? Eventen testade jag detta, men
    // det ska ju inte beh??vas. N??got med event handling ??r fel uppsatt
    // k??nns det som. Skippade till slut att validera f??lt p?? focus/blur
    // och la det p?? Submitknappen ist??llet.
    if (arguments.callee.caller.name == "setupJS") {return;}
    console.log("clearValidityField " + fieldname + " called from " + arguments.callee.caller.name);

    let field1 = document.getElementById(fieldname);
    field1.classList.remove("is-invalid");
    field1.classList.remove("is-valid");
    //field1.value = "";
    
    let field2 = document.getElementById(fieldname+"invalid");
    field2.classList.remove("d-block");
    return false;
}

// H??rdkodade Testmetoder f??r testknapparna mot Bosh-f??ltet
// (Bortkommenterade s?? fixa det i index.html om du vill anv??nda testknapparna)
function setInvalidBosh() {
    console.log('setInvalidBosh hardcoded');

    clearValidityField("bosh");

    let field1 = document.getElementById("bosh");
    field1.classList.add("is-invalid");
    
    let field2 = document.getElementById("boshinvalid");
    field2.classList.add("d-block");
    
}

function setValidBosh() {
    console.log('setValidBosh hardcoded');

    clearValidityField("bosh");

    let field1 = document.getElementById("bosh");
    field1.classList.add("is-valid");
    
}

function clearValidityBosh() {
    console.log("clearValidityBosh hardcoded");

    let field1 = document.getElementById("bosh");
    field1.classList.remove("is-invalid");
    field1.classList.remove("is-valid");
    
    let field2 = document.getElementById("boshinvalid");
    field2.classList.remove("d-block");
    
}