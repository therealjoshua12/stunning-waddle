canvas =document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasaimgarray=["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG","https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631230503683E01_DXXX.jpg"];

random_numbermaerd=Math.floor(Math.random()*4);
console.log(random_numbermaerd);

rover_width=100;
rover_height=90;
background_image=nasaimgarray[random_numbermaerd];
rover_img="https://www.pngall.com/wp-content/uploads/5/Mars-Rover.png";
roverX=10;
roverY=10;
function add(){
    background=new Image();
    background.onload=uploadbackground;
    background.src=background_image;
    rover=new Image();
    rover.onload=uploadrover;
    rover.src=rover_img;
}
function uploadbackground(){
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover,roverX,roverY,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e) {
      keypressed=e.keyCode;
      if(keypressed=='38')
    {
        up();
    }
    if(keypressed=='40')
    {
        down();
    }
    if(keypressed=='37')
    {
        left();
    }
    if(keypressed=='39')
    {
        right();
    }

}
function up(){
    if(roverY >= 0){
        roverY= roverY-10;
        console.log("when up arrow is pressed,roverX="+roverX+"roverY"+roverY);
        uploadbackground();
        uploadrover();
    }
    

}
function down(){
    if(roverY <= 500){
        roverY= roverY+10;
        console.log("when down arrow is pressed,roverX="+roverX+"roverY"+roverY);
        uploadbackground();
        uploadrover();
    }
    

}
function left(){
    if(roverX >= 0){
        roverX= roverX-10;
        console.log("when left arrow is pressed,roverX="+roverX+"roverY"+roverY);
        uploadbackground();
        uploadrover();
    }
    

}
function right(){
    if(roverX <= 700){
        roverX= roverX+10;
        console.log("when right arrow is pressed,roverX="+roverX+"roverY"+roverY);
        uploadbackground();
        uploadrover();
    }
    

}
