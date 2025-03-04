const valueSpan = document.querySelectorAll(".valueSpan")
const skolSpan = document.getElementById("skolSpan")
const unoSpan = document.getElementById("unoSpan")
const kwidSpan = document.getElementById("kwidSpan")
const picanhaSpan = document.getElementById("picanhaSpan")
const result = document.getElementById("result")

function convert() {
    const value = Number(document.getElementById("input").value)

    valueSpan.forEach(span => span.textContent = String(value))

    valueSpan.textContent = String(value)
    skolSpan.textContent = String(parseInt(value / 4.50))
    unoSpan.textContent = String(parseInt(value / 17500))
    kwidSpan.textContent = String(parseInt(value / 55000))
    picanhaSpan.textContent = String(parseInt(value / 72))

    result.style.display = "block"
}