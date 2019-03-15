var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

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
      papel.drawImage(vaca.imagen, aleatorio(0, 420), aleatorio(0, 420));
  }

  if(pollo.cargaOk)
  {
      papel.drawImage(pollo.imagen, aleatorio(0, 420), aleatorio(0, 420));
  }

  if(cerdo.cargaOk)
  {
      papel.drawImage(cerdo.imagen, aleatorio(0, 420), aleatorio(0, 420));
  }

}


function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
