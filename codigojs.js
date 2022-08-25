var opera;
var operb;
var operacion;


function init()
{



var barra = document.getElementById("barra");
var cero = document.getElementById("cero");
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var multiplicacion = document.getElementById("multiplicacion");
var resta = document.getElementById("resta");
var suma = document.getElementById("suma");
var igual = document.getElementById("igual");
var division = document.getElementById("division");
var resetear = document.getElementById("resetear");
var punto = document.getElementById("punto");

//Eventos

        uno.onclick = function(e){
            barra.textContent = barra.textContent + "1";
        }

        dos.onclick = function(e){
            barra.textContent = barra.textContent + "2";
        }

        tres.onclick = function(e){
            barra.textContent = barra.textContent + "3";
        }

        cuatro.onclick = function(e){
            barra.textContent = barra.textContent + "4";
        }

        cinco.onclick = function(e){
            barra.textContent = barra.textContent + "5";
        }

        seis.onclick = function(e){
            barra.textContent = barra.textContent + "6";
        }
        siete.onclick = function(e){
            barra.textContent = barra.textContent + "7";
        }

        ocho.onclick = function(e){
            barra.textContent = barra.textContent + "8";
        }
        nueve.onclick = function(e){
            barra.textContent = barra.textContent + "9";
        }

        cero.onclick = function(e){
            barra.textContent = barra.textContent + "0";
        }

        punto.onclick = function(e){
            barra.textContent = barra.textContent + ".";
        }



        resetear.onclick = function(e){
            rese();
        }

        suma.onclick = function(e){
            opera= barra.textContent;
            operacion = "+";
            limpiarp();
        }

        resta.onclick = function(e){
            opera= barra.textContent;
            operacion = "-";
            limpiarp();
        }

        multiplicacion.onclick = function(e){
            opera= barra.textContent;
            operacion = "*";
            limpiarp();
        }

        division.onclick = function(e){
            opera= barra.textContent;
            operacion = "/";
            limpiarp();
        }

        igual.onclick = function(e){
            operb= barra.textContent;
            resolver();
        }
}

function limpiarp(){
    barra.textContent = "";
}

function rese(){
    barra.textContent = "";
    opera = 0;
    operb = 0;
    operacion = "";
}

function resolver(){
    var res = 0;

    switch(operacion)
    {
        case "+":
            res = parseFloat(opera) + parseFloat(operb);
            break;

        case "-":
            res = parseFloat(opera) - parseFloat(operb);
            break;

        case "*":
            res = parseFloat(opera) * parseFloat(operb);
            break;

        case "/":
            res = parseFloat(opera) / parseFloat(operb);
            break;
    }
    rese();
    barra.textContent = res;
}


