
var A1 = {};
var A2 = {};
var A3 = {};
var A4 = {};
var A5 = {};
var B1 = {};
var B2 = {};
var B3 = {};
var B4 = {};
var B5 = {};
var C1 = {};
var C2 = {};
var C3 = {};
var C4 = {};
var C5 = {};
var D1 = {};
var D2 = {};
var D3 = {};
var D4 = {};
var D5 = {};
var E1 = {};
var E2 = {};
var E3 = {};
var E4 = {};
var E5 = {};
var Tiles = [A1, A2, A3, A4, A5, B1, B2, B3, B4, B5, C1, C2, C3, C4, C5, D1, D2, D3, D4, D5, E1, E2, E3, E4, E5];
var row1 = [A1, A2, A3, A4, A5];
var row2 = [B1, B2, B3, B4, B5];
var row3 = [C1, C2, C3, C4, C5];
var row4 = [D1, D2, D3, D4, D5];
var row5 = [E1, E2, E3, E4, E5];
var Rows = [row1, row2, row3, row4, row5];
var col1 = [A1, B1, C1, D1, E1];
var col2 = [A2, B2, C2, D2, E2];
var col3 = [A3, B3, C3, D3, E3];
var col4 = [A4, B4, C4, D4, E4];
var col5 = [A5, B5, C5, D5, E5];
var Cols = [col1, col2, col3, col4, col5];
var baseVal = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var holdVal = {};
var lev1 = ["316", "036", "506", "226", "416"];
var lev2 = ["137", "607", "327", "047", "517"];
var lev3 = ["238", "708", "428", "148", "618"];
var lev4 = ["338", "058", "8010", "5210", "2410"];
var lev5 = ["7110", "4310", "1510", "9010", "6210"];
var lev6 = ["3410", "0610", "8110", "5310", "2510"];
var lev7 = ["7210", "4410", "1613", "9113", "6310"];
var lev8 = ["0710", "8210", "5410", "2610", "7310"];
var Levels = [lev1, lev2, lev3, lev4, lev5, lev6, lev7, lev8];
var soonX = 24;
var soonY = 24;
var level = 0;
var correctFlips = 0;
var levUsing = 0;
var noting = false;
var selRow = 0;
var selSpot = 0;
var canInput = true;
var inText = false;
var gameWon = false;
var levelChange = false;
var spot = 0;
var curCoin = 0;
var colCoin = 0;
var multCount = 0;
var multFound = 0;
var firstFlip = true;
var waitTime = 50;
var interval1;
var interval2;
var textId = 0;
var bounceOffput = 0;
var bounceDown = true;
var bounceInterval;
var consecWins = 0;

function tileSetup() {
    Tiles.forEach(defineTiles);
    soonX = 531;
    soonY = 24;
    Rows.forEach(defineRows);
    soonX = 51;
    Cols.forEach(defineRows);
    levelStart();
}

function defineRows(row) {
    row.x = soonX;
    row.y = soonY;
    row.val = 0;
    row.volt = 0;
    row.draw = function() {
        if (row.val < 10) gtx.drawImage(tilePics, 531, 12, 18, 24, row.x, row.y, 18, 24);
        else gtx.drawImage(tilePics, 555, 12, 18, 24, row.x, row.y, 18, 24);
        gtx.drawImage(tilePics, 531 + 24 * (row.val % 10), 12, 18, 24, row.x + 24, row.y, 18, 24);
        gtx.drawImage(tilePics, 531 + 24 * row.volt, 12, 18, 24, row.x + 24, row.y + 39, 18, 24);
    }
    if (soonY == 504) soonX += 96;
    else soonY += 96;
}

function levelStart() {
    holdVal = baseVal.slice(0);
    levUsing = Math.floor(Math.random() * 5);
    multCount = +Levels[level][levUsing][0] + +Levels[level][levUsing][1];
    multFound = 0;
    correctFlips = 0;
    curCoin = 0;
    noting = false;
    firstFlip = true;
    spot = 0;
    for (let i = 0; i < Levels[level][levUsing][0]; i++) {
        holdVal.splice(spot, 1, 2);
        spot += 1;
    }
    for (let i = 0; i < Levels[level][levUsing][1]; i++) {
        holdVal.splice(spot, 1, 3);
        spot += 1;
    }
    for (let i = 0; i < Levels[level][levUsing].slice(2); i++) {
        holdVal.splice(spot, 1, 0);
        spot += 1;
    }
    for (let i = holdVal.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = holdVal[i]
        holdVal[i] = holdVal[j]
        holdVal[j] = k
    }
    for (let i = 0; i < 25; i++) {Tiles[i].val = holdVal[i]};
    Rows.forEach(calcRows);
    Cols.forEach(calcRows);
}

function tileSelected() {
    if (selRow >= 0 && selSpot >= 0) {
        if (Rows[selRow][selSpot].selected == true) Rows[selRow][selSpot].selected = false;
    }
    selRow = count;
    selSpot = count2;
    
    Rows[selRow][selSpot].selected = true;
    requestAnimationFrame(drawScreen);
    if (noting == false) {
        if (Rows[selRow][selSpot].revealed == false) {
            canInput = false;
            if (firstFlip == true) waitTime = 75;
            else waitTime = 25;
            requestAnimationFrame(Rows[selRow][selSpot].revealFlip);
            setTimeout(function() {selectedOutcome();}, 5 * waitTime);
        }
    }
}

function selectedOutcome() {
    if (Rows[selRow][selSpot].val == 0) {
        textId = 3;
        consecWins = 0;
        inText = true;
        canInput = true;
        if (correctFlips < level + 1 && level > 0) {
            if (correctFlips > 0) level = correctFlips - 1;
            else level = 0;
            levelChange = true;
        }
        requestAnimationFrame(drawScreen);
    }
    else {
        if (curCoin == 0) curCoin = Rows[selRow][selSpot].val;
        else curCoin = curCoin * Rows[selRow][selSpot].val;
        if (correctFlips < level + 1) correctFlips += 1;
        if (firstFlip == true || Rows[selRow][selSpot].val > 1) {
            inText = true;
            if (firstFlip == true) {
                textId = 1;
                firstFlip = false;
            }
            else textId = 2;
        }
        if (Rows[selRow][selSpot].val > 1) multFound += 1;
        if (multFound >= multCount) {
            if (multFound >= 8) consecWins += 1;
            if (consecWins >= 5 && level < 7) {
                level = 7;
                levelChange = true;
            }
            else if (level < 6) {
                level += 1;
                levelChange = true;
            }
            else levelChange = false;
            gameWon = true;
        }
        canInput = true;
        requestAnimationFrame(drawScreen);
    }
}

function resetTiles() {
    Rows.forEach(function(row) {row.val = 0; row.volt = 0;});
    Cols.forEach(function(colu) {colu.val = 0; colu.volt = 0;});
    waitTime = 50;
    requestAnimationFrame(function() {Tiles.forEach(function(tile) {if (tile.revealed == false) tile.revealFlip(); tile.noteV = false; tile.note1 = false; tile.note2 = false; tile.note3 = false;});});
    setTimeout(function() {
        count = 0;
        interval1 = setInterval(function() {requestAnimationFrame(function() {Cols[count].forEach(function(tile) {tile.concealFlip();}); count += 1;}); if (count >= 5) {canInput = true; inText = true; requestAnimationFrame(drawScreen); clearInterval(interval1);}}, 275);
    }, 1150);
}

function defineTiles(tile) {
    tile.flipPos = 0;
    tile.val = 3;
    tile.x = soonX;
    tile.y = soonY;
    tile.selected = false;
    tile.revealed = false;
    tile.noteV = false;
    tile.note1 = false;
    tile.note2 = false;
    tile.note3 = false;
    tile.draw = function() {
        if (tile.revealed == false) {
            gtx.drawImage(tilePics, 0, 0, 72, 72, tile.x, tile.y, 72, 72);
            if (tile.noteV == true) gtx.drawImage(tilePics, 318, 114, 15, 15, tile.x + 6, tile.y + 6, 15, 15);
            if (tile.note1 == true) gtx.drawImage(tilePics, 366, 114, 12, 15, tile.x + 54, tile.y + 6, 12, 15);
            if (tile.note2 == true) gtx.drawImage(tilePics, 318, 159, 12, 15, tile.x + 6, tile.y + 51, 12, 15);
            if (tile.note3 == true) gtx.drawImage(tilePics, 366, 159, 12, 15, tile.x + 54, tile.y + 51, 12, 15);
        }
        else {
            gtx.drawImage(tilePics, 288, 0, 72, 72, tile.x, tile.y, 72, 72);
            if (tile.val == 0) gtx.drawImage(tilePics, 480, 48, 48, 48, tile.x + 12, tile.y + 12, 48, 48);
            else gtx.drawImage(tilePics, 528 + 24 * (tile.val - 1), 57, 24, 30, tile.x + 24, tile.y + 21, 24, 30);
        }
        if (tile.selected == true) {
            if (noting == false) gtx.drawImage(tilePics, 84, 264, 84, 84, tile.x - 6, tile.y - 6, 84, 84);
            else {
                gtx.drawImage(tilePics, 0, 264, 84, 84, tile.x - 6, tile.y - 6, 84, 84);
                if (tile.flipPos == 0) gtx.drawImage(tilePics, 333, 126, 33, 33, tile.x + 21, tile.y + 18, 33, 33);
            }
        }
    }
    
    tile.revealFlip = function() {
        tile.flipPos += 1
        gtx.clearRect(tile.x, tile.y, 72, 72);
        gtx.drawImage(tilePics, 0 + 72 * tile.flipPos, 0, 72, 72, tile.x, tile.y, 72, 72);
        tile.noteV = false;
        tile.note1 = false;
        tile.note2 = false;
        tile.note3 = false;
        
        if (tile.flipPos > 2) {
            if (tile.val == 0) gtx.drawImage(tilePics, 480, 96 - 48 * (tile.flipPos - 3), 48, 48, tile.x + 12, tile.y + 12, 48, 48);
            else gtx.drawImage(tilePics, 528 + 24 * (tile.val - 1), 105 - 48 * (tile.flipPos - 3), 24, 30, tile.x + 24, tile.y + 21, 24, 30);
        }
        if (tile.selected == true) gtx.drawImage(tilePics, 84, 264, 84, 84, tile.x - 6, tile.y - 6, 84, 84);
        if (tile.flipPos < 4 && tile.flipPose != 2) setTimeout(function() {requestAnimationFrame(tile.revealFlip);}, waitTime);
        else if (tile.flipPos == 2) setTimeout(function() {requestAnimationFrame(tile.revealFlip);}, waitTime * 2);
        else {
            tile.revealed = true;
        }
    }
    
    tile.concealFlip = function() {
        tile.flipPos -= 1
        gtx.clearRect(tile.x, tile.y, 72, 72);
        gtx.drawImage(tilePics, 0 + 72 * tile.flipPos, 0, 72, 72, tile.x, tile.y, 72, 72);
        
        if (tile.flipPos > 2) {
            if (tile.val == 0) gtx.drawImage(tilePics, 480, 96 - 48 * (tile.flipPos - 3), 48, 48, tile.x + 12, tile.y + 12, 48, 48);
            else gtx.drawImage(tilePics, 528 + 24 * (tile.val - 1), 105 - 48 * (tile.flipPos - 3), 24, 30, tile.x + 24, tile.y + 21, 24, 30);
        }
        if (tile.flipPos > 0 && tile.flipPos != 2) setTimeout(function() {requestAnimationFrame(tile.concealFlip);}, 50);
        else if (tile.flipPos == 2) setTimeout(function() {requestAnimationFrame(tile.concealFlip);}, 75);
        else {
            tile.revealed = false;
        }
    }
    
    if (soonX == 408) {
        soonX = 24;
        soonY += 96;
    }
    else soonX += 96;
}

function calcRows(row) {
    row.val = 0;
    row.volt = 0;
    for (let i = 0; i < 5; i++) {if (row[i].val == 0) row.volt += 1; else row.val += row[i].val;};
}

