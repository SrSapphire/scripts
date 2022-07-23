function generator(){
    if(document.getElementById("number").value != "") {
        var n = Number(document.getElementById("number").value)
        var select = document.getElementById("result")
        select.innerHTML = ""
        for(a=1; a <= 10; a++){
            var option = document.createElement("option")
            option.setAttribute("id", "options")
            option.text = `${n} x ${a} = ${n*a}`
            select.appendChild(option)
        }
    } else {
        alert("error")
    }
}