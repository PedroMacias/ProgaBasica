var cinco= require("johnny-five");
var circuito = new cinco.Board();
var foco, motorcito, celda;
var turno = 0;

circuito.on("ready", prender);

function prender()
{
    var configuracion= {pin: "A0", freq: 50};

    celda = new cinco.Sensor(configuracion);

    foco = new cinco.Led(13);
    foco.on();

    motorcito = new cinco.Servo(9);
    motorcito.to(90);

    ondear();
}

function ondear()
{
    console.log("Luz: " + celda.value);
    var luz = celda.value
    if (luz > 800)
    {
     if (turno)
     {
        turno = 0;
        motorcito.to(110);
     }
     else
     {
       turno = 1;
       motorcito.to(90);
     }
    }
    else
    {
        motorcito.to(30);
    }
    setTimeout(ondear, 1000);
}
