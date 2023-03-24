function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    modal = ml5.poseNet(video, modalloaded);
    modal.on('pose', getposes);
}
song1="";
song2="";
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3"); 
}
function draw(){
    image(video, 0, 0, 500, 500);

}
xleft="0";
xright="0";
yright="0";
yleft="0";


function modalloaded() {
    console.log("modaleloaded");
}
function getposes(result) {
    if (result.length > 0) {
        console.log(result);
        X_left = result[0].pose.leftWrist.x;
        Y_left = result[0].pose.leftWrist.y;
        X_right = result[0].pose.rightWrist.x;
        Y_right = result[0].pose.rightWrist.y;
        scoresever = result[0].pose.keypoints[9].score;
        rightWrist = result[0].pose.keypoints[10].score;
    }
}
