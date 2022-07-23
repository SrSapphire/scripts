document.createElement('img')
        var hour = new Date().getHours()
        var minute = new Date().getMinutes()
        var hourtxt = document.getElementById("hourtxt")
        var photo = document.getElementById("photo")
        var img = document.createElement("img")
        img.setAttribute('id', 'photo')
        if(hour <= 12){
            img.setAttribute("src", "hour/morning.webp")
            document.body.style.backgroundColor = "rgb(179, 150, 79)"
        } else if(hour <= 19){
            img.setAttribute("src", "hour/afternoon.webp")
            document.body.style.backgroundColor = "rgb(139, 117, 60)"
        } else if(hour <= 23){
            img.setAttribute("src", "hour/night.webp")
            document.body.style.backgroundColor = "rgb(83, 83, 83)"
        }
        if(minute.toString().length == 1){
            minute = "0" + minute
        }
        hourtxt.innerHTML = `Now it's ${hour}:${minute}.`
        area.appendChild(img)