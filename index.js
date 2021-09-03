const botao = document.getElementById("butao")

botao.addEventListener("click", function(e){
    e.preventDefault()
   let codificar = document.getElementById("inText").value.toLocaleUpperCase().split("")
   let deslocamento = document.getElementById("numDesl").value
   let retorno = []
   let numerofinal

   for (let i = 0; i < codificar.length; i++){
       let letras = codificar[i]
       let transform = parseInt(letras.charCodeAt(0))

       if (transform===32){
        numerofinal = transform
       }
       else {
           numerofinal = transform + deslocamento
       }

       if (numerofinal > 90){
           numerofinal -=26
       }
   }
   
   
})