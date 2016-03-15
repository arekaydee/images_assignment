//================================
//	view your project using anvil at:
//	http://images.dev
//
// or after you upload it to github at:
//	http://yourusername.github.io/images/
//================================

//STEP 1: Declare global variables for your images and upload button

var tft;
var tfb;
var uploadButton;
var uploadedImage;

function preload(){
	//STEP 2:
	// Load your image with loadImage("path/to/image.jpg")
	//and save it to your global variable:

tft = loadImage("TrumpFaceTop.png");
tfb = loadImage("TrumpFaceBottom.png");

}

function setup(){
	uploadButton = createFileInput(imageUploaded);
	createCanvas(windowWidth,windowHeight);


}

	//STEP 3
	//add a file upload button with CreateFileInput(_____);

	//STEP 4:
  //set up your canvas with createCanvas(__,__);



function imageUploaded(file){

  uploadedImage = loadImage(file.data, drawImg);
}

function drawImg(){
  image(uploadedImage,0,0);
}


function draw() {
	background("white")

	if (uploadedImage){
    image(uploadedImage,108,362,267,mouseY-362,0,0,0,0);
		textSize(72);
		text("NOM NOM NOM NOM NOM",500,100,400,500);
	}else{
		textSize(72);
		text("What's for dinner?",500,100,400,500);
	}
	image(tft,0,0);
	if (mouseY < 362){
		image(tfb,0,362);
	}
		else{
			image(tfb,0,mouseY);
		}


	}



	//STEP 5:
	//draw your images with image(imagevariable);

	//STEP 7:
	//You're also going to need an if statement here to check
	//if the image the user uploaded exists to then draw it
	//(see image upload example version 2)




//STEP 6:
//create a callback function (you can name it anything you'd like)
//which will be called when the user uploads an image:

	//and inside it you will need to save the loaded image to a global variable
