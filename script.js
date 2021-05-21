function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} Horas e ${minutos} minutos`
    if (hora >= 0 && hora <12){
        //Bom dia!
        img.src='manha.png'
        document.body.style.background = '#769a5e'
    } else if (hora >= 12 && hora <= 18){
        //Boa Tarde!
        img.src='tarde.png'
        document.body.style.background = '#fe9665'
    } else{
        //Boa Noite!
        img.src='noite.png'
        document.body.style.background = '#103c62'
    }
}

