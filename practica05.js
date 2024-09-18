const app =document.getElementById("app")
const url="https://picsum.photos/id/"
const size= "/200/200"
const Picture =parametros => {
    const src= url+parametros+size
    return `
    <figure>
        <img src="https://picsum.photos/id/${parametros}/200/200" alt="" id="${parametros}">
    <figcaption >${parametros}</figcaption>
 </figure>
 `
}
console.log(Picture())
app.innerHTML=Picture(1)+Picture(2)+Picture(3)+Picture(4)

const elemento1 = document.getElementById("a1")
const elemento2 = document.getElementById("a2")
const elemento3 = document.getElementById("a3")

elemento1.addEventListener("click", mifuncion)
elemento2.addEventListener("click", mifuncion)
elemento3.addEventListener("click", mifuncion)


function mifuncion(parametros){
    console.log("ahyyy: ")
    console.log(parametros)
}