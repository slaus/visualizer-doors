"use strict";
// Reference the color shape that was drawn over the image
const path = "";
const backsplash = document.getElementById("backsplash");
const doubleDoor = document.getElementById("double-door-rectangle");
const singleDoor = document.getElementById("single-door-rectangle");
const handles = document.getElementsByClassName("handles");
const sidelight = document.getElementsByClassName("sidelight");
const door = document.getElementsByClassName("door-sidelight");
const svgDoor = document.getElementsByClassName("svg-door");
const svgSingleDoor = document.getElementsByClassName("svg-single-door");

// backsplash color
var backsplashColor = document.getElementsByClassName("backsplash-color");
for (var bc = 0; bc < backsplashColor.length; bc++) {
    backsplashColor[bc].onclick = changeBacksplashColor;
}
function changeBacksplashColor(e) {
    document.getElementById("backsplash-picker").style.backgroundColor = "#ffffff";
    document.getElementById("backsplash-picker").value = "FFFFFF";
    backsplash.style.backgroundColor = "transparent";
    let bg = this.getAttribute("data-bg");
    document.getElementById("backsplash-background").src = path + "images/wall/big/" + (bg == null ? "wall-03" : bg) + ".jpg";
}
function changeBacksplashCustomColor(picker) {
    document.getElementById("backsplash-background").src = path + "images/wall/big/wall-03.jpg";
    backsplash.style.backgroundColor = picker.toHEXString();
}

//door type
var doorType = document.getElementsByClassName("door-type");
for (var d = 0; d < doorType.length; d++) {
    doorType[d].onclick = changeDoor;
}
function changeDoor(e) {
    let type = this.getAttribute("data-type");

    let slight = this.getAttribute("data-sidelight");
    for (var di = 0; di < doorInserts.length; di++) {

        doorInserts[di].style.display = "none";
    }
    for (var ds = 0; ds < doorSidelight.length; ds++) {
        doorSidelight[ds].style.display = "none";
    }
    for (var j = 0; j < document.getElementsByClassName(type).length; j++) {
        document.getElementsByClassName(type)[j].style.display = "block";
    }
    for (var s = 0; s < sidelight.length; s++) {
        sidelight[s].style.fill = "transparent";
    }
    let inserts = document.getElementsByClassName("inserts-" + type);
    for (var dt = 0; dt < inserts.length; dt++) {
        inserts[dt].style.display = "block";
    }
    document.getElementById("door").src = path + "images/door/" + type + ".png";

    if (type == "door-01") {
        document.getElementById("double-door").style.display = "block";
        document.getElementById("door-handles").style.display = "block";
        document.getElementById("handles").src = path + "images/handles/handles-01.png";
        document.getElementById("single-door").style.display = "none";
        document.getElementById("single-door-handles").style.display = "none";
    } else if (type == "door-11") {
        document.getElementById("double-door").style.display = "none";
        document.getElementById("door-handles").style.display = "none";
        document.getElementById("handles").src = path + "images/handles/handles-02.png";
        document.getElementById("single-door").style.display = "block";
        document.getElementById("single-door-handles").style.display = "block";
    }
}

//door color
var doorColor = document.getElementsByClassName("door-color");
for (var dc = 0; dc < doorColor.length; dc++) {
    doorColor[dc].onclick = changeDoorColor;
}
function changeDoorColor(e) {
    let hex = this.getAttribute("data-hex");
    doubleDoor.style.fill = hex;
    singleDoor.style.fill = hex;
    let url = e.target.getAttribute("data-url");
    let title = e.target.getAttribute("data-title");
    //document.getElementById("color").innerHTML = title;

    for (var dc = 0; dc < svgDoor.length; dc++) {
        svgDoor[dc].style.fill = "url(#door-color-" + url +")";
    }
    for (var sc = 0; sc < svgSingleDoor.length; sc++) {
        svgSingleDoor[sc].style.fill = "url(#single-door-color-" + url +")";
    }
}

//door inserts
var doorInserts = document.getElementsByClassName("door-inserts");
for (var di = 0; di < doorInserts.length; di++) {
    doorInserts[di].onclick = changeDoorInserts;
}
function changeDoorInserts(e) {
    for (var a = 0; a < door.length; a++) {
        door[a].style.display = "none";
    }
    for (var s = 0; s < sidelight.length; s++) {
        sidelight[s].style.fill = "transparent";
    }
    let inserts = this.getAttribute("data-inserts");
    let doorModel = document.getElementsByClassName(inserts);
    document.getElementById("door").src = path + "images/door/" + inserts + ".png";
    for (var i = 0; i < doorModel.length; i++) {
        doorModel[i].style.display = "block";
    }
}

//door sidelight
var doorSidelight = document.getElementsByClassName("door-sidelight");
for (var ds = 0; ds < doorSidelight.length; ds++) {
    doorSidelight[ds].onclick = changeSidelight;
}
function changeSidelight(e) {
    for (var s = 0; s < sidelight.length; s++) {
        sidelight[s].style.fill = "transparent";
    }
    let sidelightBg = this.getAttribute("data-hex");
    let sidelightType = this.getAttribute("data-sidelight");
    let type = document.getElementsByClassName(sidelightType);
    for (var h = 0; h < type.length; h++) {
        type[h].style.fill = sidelightBg;
    }
}

//handles color
var handlesColor = document.getElementsByClassName("handles-color");
for (var hc = 0; hc < handlesColor.length; hc++) {
    handlesColor[hc].onclick = changeHandlesColor;
}
function changeHandlesColor(e) {
    let handlesHex = this.getAttribute("data-handles-hex");
    for (var h = 0; h < handles.length; h++) {
        handles[h].style.fill = handlesHex;
    }
}




