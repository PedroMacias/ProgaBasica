var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", dibujarCerdos);

cerdoX = 420;
cerdoY = 420;
var vacaX = aleatorio(0, 7);
var vacaY = aleatorio(0, 7);
vacaX = vacaX * 60;
vacaY = vacaY * 60;
var polloX = aleatorio(0, 7);
var polloY = aleatorio(0, 7);
polloX = polloX * 60;
polloY = polloY * 60;
var pasos = 0;

var teclas = {
  LEFT:  37,
  UP:    38,
  RIGHT: 39,
  DOWN:  40
};

var fondo = {
  url: "tile.png",
  cargaOk: false
};

var vaca = {
  url: "vaca.png",
  cargaOk: false
};

var pollo = {
  url: "pollo.png",
  cargaOk: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOk = true;
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

  if(vaca.cargaOk)
  {
        papel.drawImage(vaca.imagen, vacaX, vacaY);
  }

  if(pollo.cargaOk)
  {
      papel.drawImage(pollo.imagen, polloX, polloY);
  }

  if(cerdo.cargaOk)
  {
      papel.drawImage(cerdo.imagen, cerdoX, cerdoY);
  }

}

function comparaPosiciones() {
  if (cerdoX == vacaX && cerdoY == vacaY) {
    alert("Atrapaste a la vaca en " + pasos + " pasos");
  }
  if (cerdoX == polloX && cerdoY == polloY) {
    alert("Atrapaste al pollo en " + pasos + " pasos");
  }
}

function dibujarCerdos(evento)
{
    var colorcito = "blue";
    var movimiento = 10;

    switch (evento.keyCode)
    {
      case teclas.LEFT:
      //este if sirve para que la trompa del cerdo no salga por la izquierda
          if (cerdoX <= -10)
          {
            cerdoX == -10;
          }else {
            cerdoX = cerdoX -movimiento;
          }
          pasos++;          
          cargarCerdos();
          comparaPosiciones();
        break;
      case teclas.UP:
      //este if sirve para que el lomo del cerdo no salga por arriba
          if (cerdoY <= -20) {
            cerdoY == -20;
          }else
          {
              cerdoY = cerdoY -movimiento;
          }
          pasos++;
          cargarCerdos();
          comparaPosiciones();
        break;
      case teclas.RIGHT:
      //este if sirve para que la cola del cerdo no salga por la derecha
          if (cerdoX >= 430)
          {
              cerdoX == 430;
          }else {
            cerdoX = cerdoX +movimiento;
          }
          pasos++;
          cargarCerdos();
          comparaPosiciones();
        break;
      case teclas.DOWN:
      //este if sirve para que las patas del cerdo no salgan por abajo
          if (cerdoY >= 440)
          {
            cerdoY == 440;
          }else
          {
              cerdoY = cerdoY +movimiento;
          }
          pasos++;
          cargarCerdos();
          comparaPosiciones();
        break;
      default:
      console.log(".");

    }


}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
