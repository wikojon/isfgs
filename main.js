function setup()
{
    video = createCapture(VIDEO);//this is creating the video
    video.size(450,400);//these are the settings for the video

    canvas = createCanvas(550,500);//this is creating the canvas
    canvas.position(500,150)// postion settings for canvas

    poseNet = ml5.poseNet(video, modelLoaded)//this is loading the posenet variable
    poseNet.on('pose', gotPose);//this will give u 17 points on your body

}
function draw()
{
    background('#32a87d')//this is the background for the canvas
}

function modelLoaded()
{
    console.log('Posenet is initalized')//this will be displayed when the module is loaded
}

function gotPose(results)
{
    if(results.length > 0)//if the length is greather than 0, then it will show results
    {
        console.log(results);//this will log the results
    }
}