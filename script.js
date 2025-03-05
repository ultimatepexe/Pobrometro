const valueSpan = document.querySelectorAll(".valueSpan")
const skolSpan = document.getElementById("skolSpan")
const unoSpan = document.getElementById("unoSpan")
const kwidSpan = document.getElementById("kwidSpan")
const coffeeSpan = document.getElementById("coffeeSpan")
const picanhaSpan = document.getElementById("picanhaSpan")


const result = document.getElementById("result")

function convert() {
    const value = Number(document.getElementById("input").value)

    valueSpan.forEach(span => span.textContent = formatNumber(String(value)))

    valueSpan.textContent = formatNumber(String(value))
    skolSpan.textContent = formatNumber(String(parseInt(value / 4.50)))
    unoSpan.textContent = formatNumber(String(parseInt(value / 17500)))
    kwidSpan.textContent = formatNumber(String(parseInt(value / 55000)))
    coffeeSpan.textContent = formatNumber(String(parseInt(value / 17.5)))
    picanhaSpan.textContent = formatNumber(String(parseInt(value / 72)))

    result.classList.add("show")
}

function formatNumber(str) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}