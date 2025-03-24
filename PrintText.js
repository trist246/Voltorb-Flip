
var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.,'()#";
var fives = "fj.,'";
var fours = "l";
var threes = "i";
var pRow;
var rLength;
var loc;
var takeRow;
var takeLet;


function printText(text) {
    //50 per second
    pRow = 0;
    rLength = 0;
    //" " is 69 a is 26 0 is 52

    for (let i = 0; i < text.length; i++) {
        loc = alph.indexOf(text[i]);
        if (loc == 69) nextLine();
        else if (loc == -1) rLength += 4;
        else {
            takeLet = loc % 26 * 18;
            takeRow = Math.trunc(loc / 26) * 45;

            gtx.drawImage(ttc, takeLet, takeRow, 18, 45, 48 + rLength * 3, 456 + 48 * pRow, 18, 45);

            if (fives.indexOf(text[i]) != -1) rLength += 5;
            else if (fours.indexOf(text[i]) != -1) rLength += 4;
            else if (threes.indexOf(text[i]) != -1) rLength += 3;
            else rLength += 6;
        }
    }

    //document.getElementById("demo").innerHTML = takeRow + " " + takeLet;

    /*
    gtx.drawImage(tilePics, 726, 450, 30, 33, 723, 513, 30, 33);
    bounceInterval = setInterval(function () {
        gtx.drawImage(tilePics, 723, 573, 30, 33, 723, 510 + bounceOffput, 30, 33);
        if (bounceDown == false) bounceOffput -= 3;
        else bounceOffput += 3;
        gtx.drawImage(tilePics, 726, 450, 30, 33, 723, 510 + bounceOffput, 30, 33);
        if (bounceOffput == 0) bounceDown = true;
        else if (bounceOffput == 6) bounceDown = false;
    }, 250);
    */
}

function nextLine() {
    if (pRow < 1) {
        pRow += 1;
        rLength = 0;
    }
}