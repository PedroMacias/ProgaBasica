class Billete {
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero()
{

  var a = 0;
  for (var pi of caja) {
    a += pi.valor * pi.cantidad;
  }
  saldo.innerHTML = "Saldo actual: " + a;

  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  if (dinero > a ) {
    return resultado.innerHTML = "No tengo dinero suficiente";
  }

  if ((dinero % 10) != 0) {
    return resultado.innerHTML = "No puedo entregarte la cantidad requerida";
  }

  for (var bi of caja)
  {
    if (dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
          papeles = div;
      }

      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);

    }

  }

  if (dinero > 0 )
  {
    resultado.innerHTML = "No tengo dinero suficiente";
  }
  else
  {
      resultado.innerHTML = "";      
      for (var e of entregado)
      {
        if (e.cantidad > 0 )
        {
            resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
        }
      }

  }


}

function mostrarSaldo()
{
    var a = 0;
    for (var pi of caja) {
      a += pi.valor * pi.cantidad;
    }
    saldo.innerHTML = "Saldo actual: " + a;
}

var caja = [];
var entregado = [];

caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));
var dinero = 0;
var div = 0;
var papeles = 0;

var saldo = document.getElementById("saldo");
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
