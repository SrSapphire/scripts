var list = []
var text = document.getElementById("output1")
var select = document.getElementById("output")
var output2 = document.getElementById("output2")

function addlist() {
    output2.innerHTML = ""
    select.innerHTML = ""
    var n = (Number(document.getElementById("number").value))
    list.push(n)
    for(i=0; i < list.length; i++) {
        var option = document.createElement("option")
        option.text = `Number select: ${list[i]}`
        select.appendChild(option)
    }
    document.getElementById("number").value = ""
}
function checklist() {
    output2.innerHTML = ""
    output2.innerHTML = ""
    var avarage = 0
    for(i=0; i < list.length; i++){
        avarage += list[i]
    }
    avarage = (avarage / 2).toFixed(2)
    var text2 = document.getElementById("output2")
    text2.innerText += `Maior número é ${Math.max(...list)}
    Menor número é ${Math.min(...list)}
    Média é ${avarage}
    Lista é: ${list}
    Lista tem ${list.length} números`
}
