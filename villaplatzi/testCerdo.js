var teclas = {
  LEFT:  37,
  UP:    38,
  RIGHT: 39,
  DOWN:  40
};

var cuadrito = document.getElementById("villaplatzi");
var papel = cuadrito.getContext("2d");
document.addEventListener("keydown", dibujarCerdos);
var x = 420;
var y = 420;

var fondo = {
  url: "tile.png",
  cargaOk: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOk = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOk)
  {
      papel.drawImage(fondo.imagen, 0, 0);
  }
  if(cerdo.cargaOk)
  {
      papel.drawImage(cerdo.imagen, x, y);
  }

}


function dibujarCerdos(evento)
{
    var colorcito = "blue";
    var movimiento = 10;

    switch (evento.keyCode)
    {
      case teclas.LEFT:

          if (x <= -10)
          {
            x == -10;
          }else {
            x = x -movimiento;
          }
          cargarCerdos();
        break;
      case teclas.UP:
          if (y <= -30) {
            y == -20;
          }else
          {
              y = y -movimiento;
          }

          cargarCerdos();
        break;
      case teclas.RIGHT:
          if (x >= 430)
          {
              x == 430;
          }else {
            x = x +movimiento;
          }
          cargarCerdos();
        break;
      case teclas.DOWN:
          if (y >= 440)
          {
            y == 440;
          }else
          {
              y = y +movimiento;
          }

          cargarCerdos();
        break;
      default:
      console.log(".");

    }


}
