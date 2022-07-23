function bhaskara() {
    var account = document.getElementById("account").value
    var input = account.split(" ")
    var text = document.getElementById("text")
    if(input[0].slice(0, -2) == "") {
        a = 1
    } else if(input[0].slice(0, -2) == "-") {
        a = -1
    } else {
        a = input[0].slice(0, -2)
    }
    if(input[2].slice(0, -1) == "" && input[1] == "+") {
        b = 1
    } else if(input[2].slice(0, -1) == "" && input[1] == "-"){
        b = -1
    } else if(input[1] == "+"){
        b = parseInt(input[2].slice(0,-1))
    } else {
        b = parseInt(input[2].slice(0,-1))
        b = b-b-b
    }
    if(input[3] == "+") {
        c = parseInt(input[4])
    } else if (input[3] == "-"){
        c = parseInt(input[4])
        c = c - c - c
    }
    if(-4 * a * c > 0){
        s = "+"
        checkc = -4 * a * c
    } else {
        s = "-"
        checkc = (-4 * a * c) - (-4 * a * c) - (-4 * a * c)
    }
    if(4*a > 0) {
        checka = "-"
        a4 = 4*a
    } else{
        checka = "+"
        a4 = 4*a - 4*a - 4*a
    }
    delta = b*b - 4 * a * c
    x1 = ((b-b-b) + delta ** 0.5) / 2*a
    x2 = ((b-b-b) - delta ** 0.5) / 2*a
    if(b > 0) {
        b = b-b-b
        bn = b-b+b
    } else {
        b = b-b-b
        bn = `-(${b})`
    }
    text.innerHTML = `
    <p><div id=account>${account}<br></div></p>
    <div class='column'>Δ = ${b}² - 4 . ${a} . ${c}<br>
    <div class='column'>Δ = ${b}² - 4 . ${a} . ${c}<br>
    Δ = ${b*b} ${checka} ${a4} . ${c}<br>
    Δ = ${b*b} ${s} ${checkc}<br>
    <mark style="background-color: black; color: yellow;">Δ = ${delta}<br>
    <mark style="background-color: black; color: yellow;">X = ${x1}, ${x2}</mark></div>
    <div class='column'>X = <fraction> <numer>${bn} ± √${delta}</numer> 2 . ${a} </fraction><br>
    X = <fraction> <numer>${b} + ${delta**0.5}</numer> ${2*a} </fraction>
    X = <fraction> <numer>${b + delta**0.5}</numer> ${2*a} </fraction>
    X = ${x1}<br>
    X = <fraction> <numer>${b} - ${delta**0.5}</numer> ${2*a} </fraction>
    X = <fraction> <numer>${b - delta**0.5}</numer> ${2*a} </fraction>
    X = ${x2}</div></div>`
}