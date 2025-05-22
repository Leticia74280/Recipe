let paisagens = [
    'carlos.jpeg',
    'download.jpeg',
    'selfcare.jpeg',
    'download.jpeg'
]
let contador = 1
function mudaImagem(){
    document.getElementById('carousel').src=paisagens[contador]
    contador++
    if(contador > paisagens.length-1){
        contador = 0
    }
}
// a cada 5 segundos, a imagem muda
setInterval(mudaImagem, 5000)

// a cada segundo, captura o horário do relógio e imprime no html
setInterval(function(){
    let data = new Date();
    document.getElementById('relogio').innerHTML = `
        ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()>9?data.getSeconds():"0"+data.getSeconds()}
    `
}, 1000)

function mode(){
    let cards = document.getElementsByClassName('card')
    let header = document.getElementsByTagName('header')
    let ps = document.getElementsByTagName('p')
    let h2 = document.getElementsByTagName('h2')
    let a = document.getElementsByTagName('a')
    let footer = document.getElementsByTagName('footer')
    for(let i=0; i<cards.length; i++){
        // verifica a lista de classes de um elemento e adicionar, se não houver o escolhido, ou remove, se houver
        cards[i].classList.toggle('light-mode')
    }
    for(let i=0; i<a.length; i++){
        a[i].classList.toggle('light-mode')
    }
    for(let i=0; i<header.length; i++){
        header[i].classList.toggle('light-mode')
    }
    for(let i=0; i<ps.length; i++){
        ps[i].classList.toggle('light-mode')
    }
    for(let i=0; i<footer.length; i++){
        footer[i].classList.toggle('light-mode')
    }
    for(let i=0; i<h2.length; i++){
        h2[i].classList.toggle('light-mode')
    }
}