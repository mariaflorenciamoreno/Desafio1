let nombre
let opcionInicio
const tna = 40
const tnm = tna/12/100
let montoPrestamo
let cantCuotas
function error()
    {
        alert("Error, vuelva a iniciar")
    }
function inicio()
    {
        nombre = prompt("bienvenido al simulador de prestamo, indique su nombre")
        opcionInicio = prompt("ingrese 1 para prestamo, ESC para salir")
    }
function monto() 
    {
        montoPrestamo = parseInt(prompt("Monto solicitado (max: $1.000.000"))
            if (montoPrestamo > 0 && montoPrestamo <= 1000000)
                {
                    cantCuotas = parseInt(prompt("ingrese cant cuotas, maximo 48"))
                    if (cantCuotas > 0 && cantCuotas <= 48)
                        {
                            let valorNeto = montoPrestamo/cantCuotas
                            let cuotaActual = 0
                            let interes
                            console.log("Valor Solicitado   $" + montoPrestamo)
                            console.log("Cantidad de cuotas " + cantCuotas)
                            console.log("TNA                " + tna + "%")
                            console.log("")
                            valorCuota = valorNeto + interes
                            let acumulado = 0 
                                for(let cuota = 0 ; cuota < cantCuotas ; cuota++)
                                {
                                    cuotaActual = cuota+1
                                    let montoRestante = montoPrestamo - (valorNeto * cuota)
                                    let interes = montoRestante * tnm
                                    let iva = interes * 0.21
                                    let montoAPagar = valorNeto + interes + iva
                                    acumulado = acumulado + montoAPagar
                                    console.log("CUOTA " + cuotaActual+ "  $"+ montoAPagar)
                                    console.log("Intereses      $" + interes)
                                    console.log("Amortizacion   $" + valorNeto)
                                    console.log("IVA            $" + iva)   
                                    console.log ("") 
                                }
                            console.log("Abonado Total      $" + acumulado)
                        }
                        else 
                            {
                                error();
                            }
                }
            else
                {
                    error();
                }
    }
inicio();
    switch(opcionInicio)
    {
        case "1":
            monto();
            break;
        case "ESC":
            alert("saludos");
            break;
        default:
            error();
            break;
    }