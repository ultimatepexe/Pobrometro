document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convert()
    }
})

const inputDiv = document.getElementById("inputDiv")

const valueSpan = document.querySelectorAll(".valueSpan")
const skolSpan = document.getElementById("skolSpan")
const unoSpan = document.getElementById("unoSpan")
const kwidSpan = document.getElementById("kwidSpan")
const coffeeSpan = document.getElementById("coffeeSpan")
const leiteSpan = document.getElementById("leiteSpan")
const ovosSpan = document.getElementById("ovosSpan")
const brahmaSpan = document.getElementById("brahmaSpan")
const iphone8Span = document.getElementById("iphone8Span")
const iphone15Span = document.getElementById("iphone15Span")
const azeiteSpan = document.getElementById("azeiteSpan")
const coroteSpan = document.getElementById("coroteSpan")
const C51Span = document.getElementById("51Span")
const picanhaSpan = document.getElementById("picanhaSpan")

const ew = document.createElement("div")
ew.textContent = "Valor inválido."
ew.style.color = "red"

const result = document.getElementById("result")

function convert() {
    const value = Number(document.getElementById("input").value)

    if (value < 0) {
        inputDiv.appendChild(ew)
        return
    } else {
        ew.remove()
    }

    valueSpan.forEach(span => span.textContent = formatNumber(String(value)))

    valueSpan.textContent = formatNumber(String(value))
    skolSpan.textContent = formatNumber(String(parseInt(value / 4.50)))
    unoSpan.textContent = formatNumber(String(parseInt(value / 17500)))
    kwidSpan.textContent = formatNumber(String(parseInt(value / 55000)))
    coffeeSpan.textContent = formatNumber(String(parseInt(value / 17.5)))
    leiteSpan.textContent = formatNumber(String(parseInt(value / 5)))
    ovosSpan.textContent = formatNumber(String(parseInt(value / 9)))
    brahmaSpan.textContent = formatNumber(String(parseInt(value / 40)))
    iphone8Span.textContent = formatNumber(String(parseInt(value / 1000)))
    iphone15Span.textContent = formatNumber(String(parseInt(value / 6500)))
    azeiteSpan.textContent = formatNumber(String(parseInt(value / 30)))
    coroteSpan.textContent = formatNumber(String(parseInt(value / 10)))
    C51Span.textContent = formatNumber(String(parseInt(value / 22.5)))
    picanhaSpan.textContent = formatNumber(String(parseInt(value / 72)))

    result.classList.add("show")
}

function formatNumber(str) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
/*
const body = document.querySelector("body")
const items = document.querySelectorAll(".item")
const themeButton = document.getElementById("themeButton")
const sections = document.querySelectorAll("seciton")

function darkMode() {
    if (body.style.backgroundColor == "rgb(40, 40, 40)") {
        body.style.backgroundColor = "rgb(230, 230, 230)"
        items.forEach(article => article.classList.remove("dark"))
        sections.forEach(sections => sections.style.backgroundColor = "black")
        body.style.color = "black"
        themeButton.textContent = "Dark Mode"
    } else {
        body.style.backgroundColor = "rgb(40, 40, 40)"
        items.forEach(article => article.classList.add("dark"))
        body.style.color = "white"
        themeButton.textContent = "Light Mode"
    }
}*/

function donate() {
    alert("sourketchup25@walletofsatoshi.com")
}