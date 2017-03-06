var ban = false;
var canvas;

function Lapiz () {
  if(ban==false){
  canvas = window._canvas = new fabric.Canvas('canvas');
  ban=true;
    }

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
    canvas.isDrawingMode= false;
  switch (fig) {

    case 1:
    var rect = new fabric.Rect({
      left: 60,
      top: 60,
      fill: "green",
      width: 60,
      height: 60

    });
      canvas.add(rect);
      break;
    case 2:
    var triangle = new fabric.Triangle({
     width: 60, height: 70, fill: "blue", left: 50, top: 50
      });
      canvas.add(triangle);

      break;
    case  3:
    var circle = new fabric.Circle({
      radius: 50, fill: "transparent", left: 100, top: 100
      });
      canvas.add(circle);

      break;
  }
}

var imageSaver = document.getElementById('lnkDownload');
imageSaver.addEventListener('click', saveImage, false);

function saveImage(e) {
    this.href = canvas.toDataURL({
        format: 'jpg',
        quality: 0.8
    });
    this.download = 'canvas.png'
}

function select(){
  canvas.isDrawingMode= false;
}



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
