var bersek = window.document.getElementById("bersek")
var descrição1 = window.document.getElementById("descrição1")

var chainsaw = window.document.getElementById("chainsaw")
var descrição2 = window.document.getElementById("descrição2")

var littleAcademia = window.document.getElementById("littleAcademia")
var descrição3 = window.document.getElementById("descrição3")

var AparecerPesquisa = window.document.getElementById("AparecerPesquisa")
var ApareceAnimes = window.document.getElementById("animes")
var sinopse = window.document.getElementById("sinopse")
var x = window.document.getElementById("x")

bersek.addEventListener("mouseover", () => {
    descrição1.style.display = "block"
    
})

bersek.addEventListener("mouseout", () => {
    descrição1.style.display = "none"
    
})
chainsaw.addEventListener("mouseover", () => {
    descrição2.style.display = "block"
    
})

chainsaw.addEventListener("mouseout", () => {
    descrição2.style.display = "none"
    
})

littleAcademia.addEventListener("mouseover", () => {
    descrição3.style.display = "block"
    
})

littleAcademia.addEventListener("mouseout", () => {
    descrição3.style.display = "none"
    
})

var home = window.document.getElementById("m-home")
var pesquisa = window.document.getElementById("m-search")
var notificação = window.document.getElementById("m-notification")
var perfil = window.document.getElementById("m-profile")
var favoritos = window.document.getElementById("m-favorites")

x.addEventListener("click", () => {
    ApareceAnimes.style.display = "none"
    AparecerPesquisa.style.display = "none"
    sinopse.innerHTML = ""
    ApareceAnimes.src = ""
})

home.addEventListener("click", () => {
    
})

pesquisa.addEventListener("click", () => {
    var pesquisas = prompt("Qual anime você deseja ver?")
    if(pesquisas == "Naruto") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "Naruto é um anime baseado no mangá de mesmo nome escrito por Masashi Kishimoto. A série gira em torno das aventuras vividas por Naruto Uzumaki, um jovem órfão habitante da Aldeia da Folha que sonha em se tornar o quinto Hokage, o maior guerreiro e governante da vila. ⭐⭐⭐"
        ApareceAnimes.src = "Naruto.jpg"
    }
    else if(pesquisas == "One Piece") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "A série foca em Monkey D. Luffy, um jovem feito de borracha, que, inspirado em seu ídolo de infância, o poderoso pirata Shanks, o Ruivo, parte em uma jornada do mar do East Blue para encontrar o tesouro mítico, o One Piece, e proclamar-se o Rei dos Piratas.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "OnePiece.jpg"
    }
    else if(pesquisas == "JOJO") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "JoJo's conta a história da família Joestar, uma família cujos vários membros descobrem que estão destinados a derrubar inimigos sobrenaturais, tais como Dio Brando um vampiro semi-imortal, Yoshikage Kira um serial killer e Diavolo um líder de gangue usando poderes únicos que possuem.⭐⭐⭐⭐"
        ApareceAnimes.src = "JOJO.jpg"
    }
    else if(pesquisas == "Death Note") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "Death Note é uma série de anime cheia de esquemas, planos mirabolantes e batalhas mentais. Ryuk desce ao mundo humano para comer maçãs e assistir ao caos instaurado, avisando que quem usasse o caderno cairia em desgraça. Light começa a viver em função do caderno da morte que encontrou.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "Death Note.jpg"
    }
    else if(pesquisas == "One Punch Man") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "One Punch-Man conta a história de Saitama, um super-herói extremamente poderoso, que se entediou com a ausência dos desafios nas suas lutas contra o mal e procura encontrar um oponente digno. Capa do primeiro volume de One Punch-Man, manga adaptado por Yusuke Murata, mostrando o protagonista Saitama.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "One Punch Man.jpg"
    } else if(pesquisas == "Watermelon") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "Órfãos desde pequenos, dois irmãos gatos de rua lutam pela vida para encontrar seu lugar neste mundo. Através de uma série de circunstâncias infelizes, cada irmão deve finalmente encontrar seu próprio caminho.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "Watermelon.jpg"
    } else if(pesquisas == "Attack on Titan") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "É ambientado em um mundo onde a humanidade vive dentro de cidades cercadas por três enormes muralhas que os protegem dos gigantescos humanóides devoradores de humanos chamados de Titãs; a história segue Eren Yeager, que jura exterminar os Titãs após um Titã causar a destruição de sua cidade natal e a morte de sua mãe.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "Attack on titan.jpg"
    } else {
        alert("Não foi possível achar o anime digitado, porfavor confira se digitou corretamente")
    }
})

favoritos.addEventListener("click", () => {
    alert("Você não possuí nenhum anime favorito ainda")
})

perfil.addEventListener("click", () => {
    alert("Você não possuí nenhuma conta no momento")
})

notificação.addEventListener("click", () => {
    var resposta = window.confirm("Deseja ativar as notificações?")
})