let form = document.querySelector("form");
let span = document.querySelector("span");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let min = parseInt(document.querySelector("#min").value);
    let max = parseInt(document.querySelector("#max").value);

    console.log(`min = ${min}\nmax = ${max}`)

    if (max > min && !isNaN(min)) {
        span.innerHTML = "Valores de MIN e MAX enviados"
        span.style.backgroundColor = "#207cca"
    } else if (isNaN(min) || isNaN(max)) {
        span.innerHTML = "Valores de MIN / MAX não podem ser nulos"
        span.style.backgroundColor = "#9f58a3"
    } else {
        span.innerHTML = "Valor de MAX não pode ser menor ou igual a MIN"
        span.style.backgroundColor = "#9f58a3"
    } 
    
})
