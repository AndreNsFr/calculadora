


function limpar(){
    document.getElementById("res").innerHTML = ""
    calculoFun= []
    fun = 0
}
//PEGA O VALOR DIGITADO
function pegarNumero(numT){

    var numero = document.getElementById(numT).getAttribute("id")
    var visor = document.getElementById("res").innerHTML += numero
    
    if (visor.length > 20){
        document.getElementById("res").style.fontSize = "10pt"
        if (visor.length > 40){
            document.getElementById("res").style.fontSize = "5pt"
            
        } else {
            document.getElementById("res").style.fontSize = "10pt"
        }
    } else {
        document.getElementById("res").style.fontSize = "20pt"
    } 


    return this.visor = visor
    
}

var calculoFun = []
var fun = Number(0)

var historico = []


function teste(operadores){


    switch (operadores){

        case "dividir": 
            var operador = "/"
            calculoFun[fun] = visor
            fun++
            document.getElementById("res").innerHTML = ""
            return this.operador = operador
        break
    
        case "multiplicar":
            var operador = "*"
            calculoFun[fun] = visor
            fun++
            document.getElementById("res").innerHTML = ""
            return this.operador = operador
        break
    
        case "positivo":
            var operador = "+"
            calculoFun[fun] = visor
            fun++
            document.getElementById("res").innerHTML = ""
            return this.operador = operador
        break
    
        case "negativo":
            var operador = "-"
            calculoFun[fun] = visor
            fun++
            document.getElementById("res").innerHTML = ""
            return this.operador = operador
        break

        default : 
        alert("erro inesperado, contate o desenvolvedor")
    
    }
    
}

function calcular(operador) {
    
    
    var soraia = document.getElementById("res").innerHTML 
    calculoFun[1] = soraia
    
    
    
    switch (operador) {

            case "/":

                var resultado = Number(calculoFun[0]) / Number(calculoFun[1])
                document.getElementById("res").innerHTML = resultado
                calculoFun[0] = resultado
                resultado =  resultado + "<br>"
                historico.push(resultado)
                return historico
                

            break;

            case "*":

                    var resultado = Number(calculoFun[0]) * Number(calculoFun[1])
                    document.getElementById("res").innerHTML = resultado
                    calculoFun[0] = resultado
                    resultado =  resultado + "<br>"
                    historico.push(resultado)
                    return historico

                break;

                case "+":
                    var resultado = Number(calculoFun[0]) + Number(calculoFun[1])
                    document.getElementById("res").innerHTML = resultado
                    calculoFun[0] = resultado
                    resultado = resultado + "<br>"
                    historico.push(resultado)
                    return historico
                break;

                case "-":
                    var resultado = Number(calculoFun[0]) - Number(calculoFun[1])
                    document.getElementById("res").innerHTML = resultado
                    calculoFun[0] = resultado
                    resultado =  resultado + "<br>"
                    historico.push(resultado)
                    return historico
                break;

                case "raiz":
                    calculoFun[fun] = visor
                    var resultado = Number(calculoFun[0])  ** (1/2)
                    document.getElementById("res").innerHTML = resultado
                    calculoFun[0] = resultado
                    resultado =   resultado + "<br>"
                    historico.push(resultado)
                    return historico
                break

                case "potencia":
                    calculoFun[fun] = visor
                    var resultado = Number(calculoFun[0])  ** 2
                    document.getElementById("res").innerHTML = resultado
                    calculoFun[0] = resultado
                    resultado =   resultado + "<br>"
                    historico.push(resultado)
                    return historico
                break
                
            
                default:
                    alert("erro inesperado, contate o desenvolvedor")
                    break;
                }
            

                
        }
        
function Mais_ou_Menos(mais_ou_menos){
    document.getElementById("res").innerHTML = ""
    document.getElementById("res").innerHTML = "-" + visor
    visor = "-" + visor
}

function his(){
    document.getElementById("res").style.justifyContent = "start"
    historico.join("")
    document.getElementById("res").innerHTML = historico.join(" ")
}