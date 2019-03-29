class Billete {
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero()
{

  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  if (dinero > saldoTotal ) {
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
    resultado.innerHTML = "";
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

updateSaldo();

}

function updateSaldo()
{

 for (var x = 0; x < caja.length; x++) {
   caja[x].cantidad = caja[x].cantidad - entregado[x].cantidad;
   resultado.innerHTML += "otros " + caja[x].cantidad + " billetes de $" + caja[x].valor + " en Caja" + "<br />";
   mostrarSaldo();
 }

}

function mostrarSaldo()
{
  var a = 0;
  for (var pi of caja) {
    a += pi.valor * pi.cantidad;
  }
  saldo.innerHTML = "Saldo actual: " + a;
  saldoTotal = a;
}

var caja = [];
var entregado = [];

caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));
var dinero = 0;
var div = 0;
var papeles = 0;

var saldoTotal = 0;
var cajero = document.getElementById("cajero");
var saldo = document.getElementById("saldo");
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
cajero.addEventListener("load", mostrarSaldo);
b.addEventListener("click", entregarDinero);
