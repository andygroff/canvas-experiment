/**
 * Created By: Andrew Groff
 * Date: 7/21/15
 * Time: 12:08 AM
 */

var context;
var x = 100;
var y = 200;
var dx = 5;
var dy = 5;
var h = 1100;
var w = 1100;
var cx = 530;
var cy = 460;
var angle = 1;
var deg2rad = Math.PI / 180;
var radius = 400;

var maxCircleSize = 10;
var minCircleSize = 1;

var circles = [];
var circle;



function newCircle() {
    var colors = [
        '#6fffdf',
        '#67A9A4',
        '#456E6A',
        '#FFFFFF'
    ];

    return {
        x     : -100,
        y     : -200,
        cx    : 530,
        cy    : 500,
        sizeDir : randPos(),
        color : colors[rand(0, colors.length)],
        radiusDir : randPos(),
        radius : radius + rand(1,40),
        angle : rand(1,360),
        size  : rand(minCircleSize,maxCircleSize),
        speed : rand(20,35)
    }
}

function addCircle(){
    circle = newCircle();

    circles.push(circle);

    if(circles.length < 300){
        setTimeout(addCircle, 100);
    }
}

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function randPos(){
    var n = rand(0,1);
    if(n){
        return 1;
    }
    return -1;
}

function init() {
    context = myCanvas.getContext('2d');
    setInterval(draw, 10);
    addCircle();
}

function draw() {
    context.clearRect(0, 0, w, h);

    for(var c = 0; c < circles.length; c++){
        circle = circles[c];

        context.beginPath();
        context.fillStyle = circle.color;
        // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
        context.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();

        circle.x = circle.cx + circle.radius * Math.cos(circle.angle * deg2rad);
        circle.y = circle.cy + circle.radius * Math.sin(circle.angle * deg2rad);
        circle.angle += (circle.speed / 200);

        circle.size = circle.size + (0.1 * circle.sizeDir);

        circle.radius = circle.radius + (0.5 * circle.radiusDir);

        if(circle.size >= maxCircleSize){
            circle.sizeDir = -1;
        }
        if(circle.size <= minCircleSize){
            circle.sizeDir = 1;
        }

        if(circle.radius >= (radius + 60)){
            circle.radiusDir = -1;
        }
        if(circle.radius <= radius){
            circle.radiusDir = 1;
        }
    }

}

$(function () {

    var img = document.getElementById("mainImage");
    TweenMax.from(img, 1, {
        opacity : 0,
        delay   : 1
    });
    TweenMax.from(img, 3, {
        scale : 3,
        x     : 600,
        delay : 2
    });

    TweenMax.from("header", 0.5, {
        backgroundColor : '#e4f4f3;',
        delay           : 4
    });
    //    TweenMax.from(img, 2, {
    //        //drawSVG:"40%"
    //    });

    TweenMax.staggerFrom(".main h1, .main h2, .main a", 0.5, {
        y       : 200,
        opacity : 0,
        scale   : 1,
        delay   : 5
    }, 0.2);

    setTimeout(init, 5000);

});
