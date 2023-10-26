noseX = 0;
noseY = 0;

function preload() {
    clownNose = loadImage('https://w7.pngwing.com/pngs/389/840/png-transparent-lip-biting-lips-love-heart-lipstick.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
