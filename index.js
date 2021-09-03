const botao = document.getElementById("butao")

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