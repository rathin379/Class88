var canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;

player_x = 0
player_y = 0

var player_object = "";
var block_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(140);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;

    if(e.shiftKey == true && keyPressed == '80'){
        console.log("Shift+P")
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && keyPressed == '77'){
        console.log("Shift+M")
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

if(keyPressed == '38'){
   up();
    console.log("up")
}
if(keyPressed == '40'){
    down();
    console.log("down")
}
if(keyPressed == '37'){
    left();
    console.log("left")
}
if(keyPressed == '39'){
    right();
    console.log("right")
}
if(keyPressed == '82'){
    new_image('roof.jpg');
    console.log("r")
}
if(keyPressed == '67'){
    new_image('cloud.jpg');
    console.log("c")
}
if(keyPressed == '68'){
    new_image('dark_green.png');
    console.log("d")
}
if(keyPressed == '71'){
    new_image('ground.png');
    console.log("g")
}
if(keyPressed == '76'){
    new_image('light_green.png');
    console.log("l")
}
if(keyPressed == '84'){
    new_image('trunk.jpg');
    console.log("t")
}
if(keyPressed == '85'){
    new_image('unique.png');
    console.log("u")
}
if(keyPressed == '87'){
    new_image('wall.jpg');
    console.log("w")
}
if(keyPressed == '89'){
    new_image('yellow_wall.png');
    console.log("y")
}

}

function up(){
    if(player_y >=20){
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, Y = " + player_y + ", X = " + player_x)
        canvas.remove(player_object);
        
        player_update();
    }
}

function down(){
    if(player_y <=650){
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, Y = " + player_y + ", X = " + player_x)
        canvas.remove(player_object);
        
        player_update();
    }
}

function left(){
    if(player_x >=-25){
        player_x = player_x - block_image_width;
        console.log("block image height = " + block_image_width);
        console.log("When left arrow key is pressed, Y = " + player_y + ", X = " + player_x)
        canvas.remove(player_object);
        
        player_update();
    }
}

function right(){
    if(player_x <=825){
        player_x = player_x + block_image_width;
        console.log("block image height = " + block_image_width);
        console.log("When right arrow key is pressed, Y = " + player_y + ", X = " + player_x)
        canvas.remove(player_object);
        
        player_update();
    }
}