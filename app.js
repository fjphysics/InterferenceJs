window.onload=function(){    
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var imageData = context.createImageData(500, 500);
    var pixels = imageData.data;

    var numPixels = imageData.width * imageData.height;

    for (var i = 0; i < numPixels; i++) {
        pixels[i * 4] = 255; // Red 
        pixels[i * 4 + 1] = 120; // Green 
        pixels[i * 4 + 2] = 111; // Blue 
        pixels[i * 4 + 3] = 255; // Alpha 
    };
    context.putImageData(imageData, 0, 0);  

};

document.getElementById("ranColor").addEventListener("change",changeColor);

function changeColor(){

  alert(document.getElementById("ranColor").value);  
}
