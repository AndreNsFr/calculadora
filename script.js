


function limpar(){
    document.getElementById("res").innerHTML = ""
    calculoFun= []
    fun = 0
}
//PEGA O VALOR DIGITADO
function pegarNumero(numT){
    document.getElementById("res").style.justifyContent = "center"
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
                    var visor = document.getElementById("res").innerHTML
                    var resultado = Number(visor)  ** (1/2)
                    document.getElementById("res").innerHTML = resultado
                    calculoFun[0] = resultado
                    resultado =   resultado + "<br>"
                    visor = resultado
                    historico.push(resultado)
                    return historico  
                break

                case "potencia":
                    var visor = document.getElementById("res").innerHTML
                    var resultado = Number(visor)  ** 2
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
        
        
var contador = 0

function Mais_ou_Menos(mais_ou_menos){

            
        
            
            var hmm = document.getElementById("res").innerHTML
            document.getElementById("res").innerHTML = ""
            var maisOuMenos = document.getElementById("res").innerHTML = "-" + hmm
            hmm = "-" + hmm
            contador += 1
            

            if(contador % 2 == 0){
                document.getElementById("res").innerHTML = visor
            }
            
        }
        


function his(){
    document.getElementById("res").style.justifyContent = "start"
    historico.join("")
    document.getElementById("res").innerHTML = historico.join(" ")
}