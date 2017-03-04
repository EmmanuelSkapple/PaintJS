var ban = false;
var canvas;

function Lapiz () {
  if(ban==false){
  canvas = window._canvas = new fabric.Canvas('canvas');
  ban=true;
    }
    canvas.backgroundColor = '#efefef';
    canvas.isDrawingMode= 1;
    canvas.freeDrawingBrush.color = "purple";
    canvas.freeDrawingBrush.width = 10;
    canvas.renderAll();

document.getElementById('Colores').addEventListener('click', function (e) {
        console.log(e.target.value);
        canvas.freeDrawingBrush.color = e.target.value;
    });
}


function figura(fig){

  if(ban==false){
  canvas = window._canvas = new fabric.Canvas('canvas');
  ban=true;
    }
  switch (fig) {


    case 1:
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "green",
      width: 200,
      height: 200

    });
      canvas.add(rect);
      break;
    case 2:
    var triangle = new fabric.Triangle({
     width: 20, height: 30, fill: "blue", left: 50, top: 50
      });
      canvas.add(triangle);

      break;
    case  3:
    var circle = new fabric.Circle({
      radius: 20, fill: "red", left: 100, top: 100
      });
      canvas.add(circle);

      break;
  }
}


function CambiarColor(color){
  context.strokeStyle = color;
}
function limpiar(){
}
