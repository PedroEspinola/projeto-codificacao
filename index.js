const botao = document.getElementById("butao")
const botaoD = document.getElementById("butaoD")

botao.addEventListener("click", function(e){
    e.preventDefault()
   let codificar = document.getElementById("inText").value.toLocaleUpperCase().split("")
   let deslocamento = document.getElementById("numDesl").value 
   let numbDesloc = parseInt(deslocamento)
   let retorno = []
   let numeroFinal

   for (let i = 0; i < codificar.length; i++){
       let letras = codificar[i]
       let transform = parseInt(letras.charCodeAt(0))

       if (transform===32){
        numeroFinal = transform
       }
       else {
           numeroFinal = transform + numbDesloc
       }

       if (numeroFinal > 90){
           numeroFinal -=26
       }

       let resultado = String.fromCharCode(numeroFinal)
       retorno.push(resultado)
   }
   
  let textCodificado = document.getElementById("result")
    textCodificado.innerText = retorno.join("")
    textCodificado.classList.remove("invisivel")
   
})

botaoD.addEventListener("click", function(e){
    e.preventDefault()
   let decodificar = document.getElementById("inTextD").value.toLocaleUpperCase().split("")
   let dDeslocamento = document.getElementById("numDeslD").value 
   let dNumbDesloc = parseInt(dDeslocamento)
   let dRetorno = []
   let dNumeroFinal

   for (let i = 0; i < decodificar.length; i++){
       let letrasD = decodificar[i]
       let transformD = parseInt(letrasD.charCodeAt(0))

       if (transformD===32){
        dNumeroFinal = transformD
       }
       else {
           dNumeroFinal = transformD - dNumbDesloc
       }

       if (dNumeroFinal > 90){
           dNumeroFinal -=26
       }

       let resultadoD = String.fromCharCode(dNumeroFinal)
       dRetorno.push(resultadoD)
   }
   
  let textDCodificado = document.getElementById("resultD")
    textDCodificado.innerText = dRetorno.join("")
    textDCodificado.classList.remove("invisivel")
   
})

const botaoB64 = document.getElementById("butaoB64")
const botaoB64D = document.getElementById("butaoB64D")

botaoB64.addEventListener("click", function(e){
    e.preventDefault()
    let textB64 = document.getElementById("codificarB64").value
    let base64 = btoa(textB64)
    let resultadoB64 = document.getElementById("resultadoB64")
    resultadoB64.innerText=base64
    resultadoB64.classList.remove("invisivel")

})

botaoB64D.addEventListener("click", function(e){
    e.preventDefault()
    let textB64D = document.getElementById("decodificadorB64").value
    let base64D = atob(textB64D)
    let resultadoB64D = document.getElementById("resultadoDecodificado")
    resultadoB64D.innerText=base64D
    resultadoB64D.classList.remove("invisivel")
})
