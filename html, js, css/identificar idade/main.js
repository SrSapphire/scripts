var info = document.querySelector("p#info")
        var img = document.createElement('img')
        var nowyear = new Date().getFullYear()
        var inputyear = document.getElementById("year")
        var checkbutton = document.getElementById("check")
        inputyear.addEventListener("keypress", (pressed) => {
            if(pressed.key == "Enter"){
                check()
                console.log("enter pressed")
            }
        
        })
        function check() {
            var inputyear = Number(document.getElementById("year").value)
            var age = nowyear - inputyear
            if(age > nowyear || inputyear == 0 || isNaN(inputyear) == true) {
                window.alert("Tente novamente, Ano de nascimento está errado")
            } else {
                if(document.getElementsByName("sex")[0].checked){
                    img.setAttribute('id', 'photo')
                    info.innerHTML = `Detectamos homem com ${age} anos`
                    if(age < 13){
                        img.setAttribute('src', 'people/m-bebe.png')
                    } else if(age < 25){
                        img.setAttribute('src', 'people/m-jovem.png')
                    } else if(age < 40){
                        img.setAttribute('src', 'people/m-adulto.png')
                    } else if(age > 40){
                        img.setAttribute('src', 'people/m-idoso.png')
                    }
                } else if(document.getElementsByName("sex")[1].checked){
                    img.setAttribute('id', 'photo')
                    info.innerHTML = `Detectamos mulher com ${age} anos`
                    if(age < 13){
                        img.setAttribute('src', 'people/f-bebe.png')
                    } else if(age < 25){
                        img.setAttribute('src', 'people/f-jovem.png')
                    } else if(age < 40){
                        img.setAttribute('src', 'people/f-adulto.png')
                    } else if(age > 40){
                        img.setAttribute('src', 'people/f-idoso.png')
                    }
                }
            }
        }
        area.appendChild(img)