"use strict";
var interval = window.setInterval(updatePage, 100);
var dayInterval = null;
var raveInterval = window.setInterval(rave, 100);
var x = 150;
var dx = 2;
var dy = -2;
var count = 0;
function init(event) {
    console.log("Vi logges<3");
    updatePage();
    interval;
    rave();
    raveInterval;
    var box = jquery("#documentation");
    box.hide();
}
window.addEventListener("load", init);
function clickButton(event) {
    console.log(event);
    //let box = document.querySelector(".documentation");
    var box = $(".div");
    console.log(box.val());
    if (isVisible(box)) {
        box.hide();
        console.log("hiding");
    }
    else {
        box.show();
        console.log("showing");
    }
}
function isVisible(box) {
    return box.is(":visible");
}
function onClickFunc(event) {
    console.log(event);
    stopUpdate();
    let sky = document.getElementById("id1");
    console.log(sky);
    let inside = document.getElementById("id4");
    console.log(inside);
    sky.style.fill = "lightblue";
    inside.style.fill = "yellow";
}
function updatePage() {
    let inside = document.getElementById("id4");
    inside.style.fill = "#"+generateColor()+generateColor()+generateColor();
}
function stopUpdate() {
    clearInterval(interval);
    interval = null;
}
function backToRave() {
    document.getElementById("id1").style.fill = "#216";
    updatePage();
    if (!interval) {
        interval = window.setInterval(updatePage, 100);
        interval;
    }
}
function rave() {
    count += 1;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#216";
    ctx.fillRect(0, 0, 999, 600);

    ctx.fillStyle = "#c00";
    ctx.fillRect(400, 350, 200, 250);
            
    ctx.beginPath();
    ctx.moveTo(500,250);
    ctx.lineTo(350,350);
    ctx.lineTo(650,350);
    ctx.fillStyle = "#000";
    ctx.fill();

    ctx.fillStyle = "#"+generateColor()+generateColor()+generateColor();
    ctx.fillRect(465, 450, 70, 70);

    ctx.fillStyle = "#000";
    ctx.fillRect(500, 450, 2, 70);
    ctx.fillRect(465, 485, 70, 2);
    
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(x, 100, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    if (count == 350) {
        count = 0;
        dx = -dx;
    }
    x += dx;
}
function day() {
    count += 1;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, 999, 600);

    ctx.fillStyle = "#c00";
    ctx.fillRect(400, 350, 200, 250);
            
    ctx.beginPath();
    ctx.moveTo(500,250);
    ctx.lineTo(350,350);
    ctx.lineTo(650,350);
    ctx.fillStyle = "#000";
    ctx.fill();

    ctx.fillStyle = 'yellow';
    ctx.fillRect(465, 450, 70, 70);

    ctx.fillStyle = "#000";
    ctx.fillRect(500, 450, 2, 70);
    ctx.fillRect(465, 485, 70, 2);
    
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(x, 100, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    
    if (count == 350) {
        count = 0;
        dx = -dx;
    }
    x += dx;
}
function canvasClicked() {
    if (raveInterval) {
        clearInterval(raveInterval);
        raveInterval = null;
        dayInterval = window.setInterval(day, 100);
    }
    else {
        clearInterval(dayInterval);
        dayInterval = null;
        raveInterval = window.setInterval(rave, 100);
    }
}
function generateColor() {
    const random = Math.floor(Math.random() * (255 - 0)) + 0;
    return random.toString(16);
}