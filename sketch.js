//Create variables here
var dog, happyDog, dogImg, happyDogImg, database, foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,25,25);
  dog.addImage(dogImg);
  dog.scale=0.1

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(rgb(46,139,87));
  drawSprites();
  fill("black")
  text('Food Left is '+foodS,210,200)
  //add styles here
if(keyWentDown(UP_ARROW)){
  foodS = foodS - 1;
  writeStock(foodS);
  dog.addImage(happyDogImg);
}
}


function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}