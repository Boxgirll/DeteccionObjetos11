

function setup(){ //funcion para configurar nuestro lienzo
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando objetos";
}

status = "";

img = "";

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);

}

function modelLoaded(){
    console.log("Modelo Cargado");
    status = true;
    objectDetector.detect(img, gotResult);
}


function preload(){
    img = loadImage('dog_cat.jpg')
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75); 
    noFill();
    //hola//
    stroke("#FF0000");
    rect(30, 60, 400, 350);

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    rect(300, 90, 270, 320);
    stroke("#FF0000");
}
