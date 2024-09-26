const formulario = document.getElementByI("formulario")
formulario.addEventListener("submit", e =>{
    e.preventDefault()
console.log("Se presiono el boton enviar")
formulario.submit()
}
)

const x= document.getElementById("x")
x.addEventListener("focusout", ()=>{
    if(x.value.length ==0){
//alert("Sali del campo")
    document.getElementById("mensaje1").innerHTML = "el campo esta vacio"
    }else{
        document.getElementById("mensaje1").innerHTML = ""
    }
})
const enviar =getElementByI("xx")
const y =document.getElementById("y")
y.addEventListener("keypress", e => {
console.log(e.key + ""+y.value.length)
if(y.value.length==5){
    enviar.focus()
}
})