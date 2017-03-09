var ban = false;
var canvas;
var string="";
var stringInput="";
var X;
var Y;
var X2;
var Y2;
//se crear el canvas
function crearCanvas () {
  if(ban==false){
canvas= new fabric.Canvas('canvas');
canvas.on('mouse:down', function(options) {
  X= options.e.layerX;
  Y= options.e.layerY;
  console.log(X,Y);
});
canvas.on('mouse:up', function(options) {
  X2= options.e.layerX;
  Y2= options.e.layerY;
  console.log(X2,Y2);
});
  ban=true;
    }
}

//colocar figuras
function figura(fig){
  switch (fig) {
    case 1:
    if(X>0 ||Y>0 ){
    var rect = new fabric.Rect({
      left: X,
      top: Y,
      fill: "green",
      width: X2-X,
      height: Y2-Y
    });
    string += "C,"+X.toString()+","+Y.toString()+","+(X2-X).toString()+","+(Y2-Y).toString()+" ";
      canvas.add(rect);
      X=undefined;
      Y=undefined;
      X2=undefined;
      Y2=undefined;
    }
    else {
      alert("primero presiona el boton crear Figura");
    }
      break;
    case 2:
    if(X>0 ||Y>0 ){
    var triangle = new fabric.Triangle({
     width: X2-X, height: Y2-Y, fill: "blue", left: X, top: Y
      });
      string += "T,"+X.toString()+","+Y.toString()+","+(X2-X).toString()+","+(Y2-Y).toString()+" ";
      canvas.add(triangle);
      X=undefined;
      Y=undefined;
      X2=undefined;
      Y2=undefined;
      break;
    }
    else {
      alert("primero presiona el boton crear Figura");
    }
    case  3:
    if(X>0 ||Y>0 ){
    var circle = new fabric.Circle({
      radius: (X2-X)/2, fill: "green", left: X, top: Y
      });
      string += "E,"+X.toString()+","+Y.toString()+","+(X2-X).toString()+","+(Y2-Y).toString()+" ";

      canvas.add(circle);
      X=undefined;
      Y=undefined;
      X2=undefined;
      Y2=undefined;
      break
    }
    else {
      alert("primero presiona el boton crear Figura");
    }
    case 4:
    if(X>0 ||Y>0 ){
    var line1 = new fabric.Line([X, Y, X2, Y2], {
         stroke: 'blue',
         strokeWidth: 2,
         hasControls: true,
         hasRotatingPoint: true,
         padding: 10,
         left: X,
         top: Y,
     });
     string += "L,"+X.toString()+","+Y.toString()+","+(X2-X).toString()+","+(Y2-Y).toString()+" ";
     canvas.add(line1);
     X=undefined;
     Y=undefined;
     X2=undefined;
     Y2=undefined;
     break
   }
   else {
     alert("primero presiona el boton crear Figura");
   }
  }
}
//leer el texto que se ingresa -------------------------------------
document.getElementById('file').onchange = function(){

  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    stringInput = this.result;
    console.log(this.result);
  };
  reader.readAsText(file);
};

//guardar el string en un txt--------------------------------------------

function download(filename) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(string));
    pom.setAttribute('download', filename);
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}
//en forma de seleccion
function select(){
  canvas.isDrawingMode= false;
}
//Limpiar obtejos
function limpiar(){
 if(canvas.isDrawingMode == false ){
  var activeObject = canvas.getActiveObject(),
      activeGroup = canvas.getActiveGroup();
      if (activeObject) {
              canvas.remove(activeObject);
      }
      else if (activeGroup) {
              var objectsInGroup = activeGroup.getObjects();
              canvas.discardActiveGroup();
              objectsInGroup.forEach(function(object) {
              canvas.remove(object);
              });
      }
    }
    else{
      alert("Tienes que seleccionar una figura ");
    }
}
