var result = document.getElementById("result")
function calculate() {
    const n1 = document.getElementById("number1").value
    const n2 = document.getElementById("number2").value
    document.getElementById("number1").value = ""
    document.getElementById("number2").value = ""
    result.innerText = `x² = ${n1}² + ${n2}²
    x² = ${n1**2} + ${n2**2}
    x² = ${(n1**2)+(n2**2)}
    √x² = √${(n1**2)+(n2**2)}
    x = ${(((n1**2)+(n2**2)) ** 0.5).toFixed(2)}`
}