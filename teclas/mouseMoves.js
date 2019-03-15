var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

//definiendo los eventos del mouse a considerar
cuadrito.addEventListener("mousemove", dibujarMouse);
cuadrito.addEventListener("mousedown", comenzarTrazo);
cuadrito.addEventListener("mouseup", terminarTrazo);
var banderaDibujo = false ; //variable que indica cuando se puede dibujar
var xi, yi;
var xf =0;
var yf = 0;


function dibujarMouse(evento)
{
    var colorcito = "red";

    if (banderaDibujo) {

      xi = evento.layerX;
      yi = evento.layerY;

        dibujarLinea(colorcito, xi, yi, xf, yf,papel);

    }

    xf = evento.layerX;
    yf = evento.layerY;

}

//comenzarTrazo vuelve verdadera la bandera para comenzar a dibujar
function comenzarTrazo() {
  banderaDibujo = true;
}

//terminarTrazo vuelve falsa la bandera, lo que hace que el dibujo termine
function terminarTrazo()
{
  banderaDibujo = false;
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal)
  lienzo.stroke();
  lienzo.closePath();

}


//Marco del area de dibujo
dibujarLinea("black", 1,1,1,299,papel);
dibujarLinea("black", 299,299,1,299,papel);
dibujarLinea("black", 299,299,299,1,papel);
dibujarLinea("black", 1,1,299,1,papel);
