inputpls = "";

function preload() {
}

function setup() {
    canvas = createCanvas(480 , 380);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 0 , 0 , 480 , 380);
}

function START() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    inputpls = document.getElementById("sup").value;
}

function modelLoaded() {
 console.log('Model Loaded');
 statuses = true
 video.loop();
 video.speed(1);
 video.volume(0);
}