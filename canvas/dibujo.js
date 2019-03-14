var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('botoncito');
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById('dibujito');
var ancho = d.width;
var lienzo = d.getContext("2d");



dibujarLinea(colorcito, 1,1,1,299);
dibujarLinea(colorcito, 1,299,299,299);
dibujarLinea(colorcito, 1,1,299,1);
dibujarLinea(colorcito, 299,1,299,299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal)
  lienzo.stroke();
  lienzo.closePath();

}

function dibujoPorClick()
{

    var lineas = parseInt(texto.value);
    var l = 0;
    var colorcito = "red";
    var espacio = ancho/lineas;

    while(l < lineas)
    {
        yi = espacio * l;
        xf = espacio * (l +1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        l += 1;
    }

    while(lineas > 0)
    {
        xi = espacio * lineas;
        yf = espacio *(lineas + 1);
        dibujarLinea(colorcito, xi, 0, 300, yf);
        lineas--;
    }

}
