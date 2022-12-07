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
    
    }else if(pesquisas == "One Piece") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "A série foca em Monkey D. Luffy, um jovem feito de borracha, que, inspirado em seu ídolo de infância, o poderoso pirata Shanks, o Ruivo, parte em uma jornada do mar do East Blue para encontrar o tesouro mítico, o One Piece, e proclamar-se o Rei dos Piratas.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "OnePiece.jpg"
    
    }else if(pesquisas == "JOJO") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "JoJo's conta a história da família Joestar, uma família cujos vários membros descobrem que estão destinados a derrubar inimigos sobrenaturais, tais como Dio Brando um vampiro semi-imortal, Yoshikage Kira um serial killer e Diavolo um líder de gangue usando poderes únicos que possuem.⭐⭐⭐⭐"
        ApareceAnimes.src = "JOJO.jpg"
    
    }else if(pesquisas == "Death Note") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "Death Note é uma série de anime cheia de esquemas, planos mirabolantes e batalhas mentais. Ryuk desce ao mundo humano para comer maçãs e assistir ao caos instaurado, avisando que quem usasse o caderno cairia em desgraça. Light começa a viver em função do caderno da morte que encontrou.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "Death Note.jpg"
    
    }else if(pesquisas == "One Punch Man") {
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

    }  else if(pesquisas == "BJ Alex") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "Todas as noites às 22h,Dong-Gyun se tranca em seu quarto,pega uma caixa de lenços e assiste um show ao vivo apresentado por BJ Alex (Broadcast Jockey).O tímido Dong-Gyun admira não apenas o corpo sarado e gostoso de Alex,mas sua sinceridade em compartilhar suas experiências sexuais com os espectadores.⭐⭐⭐⭐⭐"
       ApareceAnimes.src = "https://img.skoob.com.br/1CZDIytN3iOHXfyNheJURkLyYKQ=/600x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/969870/BJ_ALEX_1617471012969870SK-V11617471013B.jpg"
    
    }  else if(pesquisas == "Love is an illusion") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "Por ter crescido acreditando ser um alfa, Hyesung tem todo o orgulho de um e, mesmo tendo as fortes características de um ômega, se recusa a acreditar que seu primeiro teste pode ter sido um erro. Até que ele conhece Dojin, um alfa que despreza os ômegas e jura que jamais se relacionaria com um.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "http://pm1.narvii.com/7068/0eb03c149d1ecb066a854d9ffb4efd78dc5938fbr1-542-719v2_00.jpg"
    
    }  else if(pesquisas == "Chainsaw Man") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "A história origina uma das adaptações mais esperadas de 2022. Em Chainsaw Man, o protagonista Denji é um adolescente que mora com o seu demônio de estimação, Ponchita, o Demônio da Motosserra. Apesar disso, seu dever é trabalhar como um Caçador de Dêmonios para pagar uma dívida que possui.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "https://m.media-amazon.com/images/I/51vR1lV-BtL._SX331_BO1,204,203,200_.jpg"
    
    }  else if(pesquisas == "Tokyo") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "A produção conta a história de Takemichi Hanagaki, que, aos 26 anos de idade, descobre ser um viajante no tempo. Depois de descobrir a verdade por trás da morte de sua ex-namorada, o rapaz consegue retornar ao passado em cerca de 12 anos, conseguindo avisar a garota sobre o que aconteceria a ela.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "https://upload.wikimedia.org/wikipedia/pt/b/b1/Tokyo_Revengers_volume_1_cover.jpg"
    
    }  else if(pesquisas == "19 Days") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "Uma série de atividades diárias divertidas e calorosas acontece no campus.19 days não é apenas uma vida relaxante e feliz no campus para os quatro, mas também uma história de juventude onde os meninos se entendem e os ajudam a crescer. A personalidade aparentemente fria de Zhan Zheng Xi é na verdade a mais gentil.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "https://chuvadenanquim.files.wordpress.com/2015/05/19-days-2.jpg"
    
    }  else if(pesquisas == "Here u Are") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "Yang Yu é um estudante de segundo ano na universidade militar, ele é encarregado de receber os novos alunos, lá ele encontrará Li Huan, um menino hostil. O ódio que ele sente por ele no começo, começará a florescer em um amor confuso.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "https://img.skoob.com.br/95FEYw2z-VBauzSdlkQEjuPcmy4=/300x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/11653879/HERE_U_ARE_A5_160685771011653879SK1606857716B.jpg"
    
    }  else if(pesquisas == "Little Academia") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "Atsuko Kagari (Akko) é uma garota comum que desenvolveu seu gosto por magia desde o dia em que viu seu primeiro show de magia. Ela ficou tão encantada com a performance da apresentadora Shiny Chariot que passou a sonhar em ser uma bruxa tão legal quanto ela.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "https://www.jbchost.com.br/editorajbc/wp-content/uploads/2019/05/Little-Witch-Academia-03-Capa_p.jpg"
    
    }  else if(pesquisas == "Jujutsu") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "O jovem Yuta Okkotsu ganha o controle de um espírito extremamente poderoso, então um grupo de feiticeiros o matriculam na Tokyo Prefectural Jujutsu High School, para ajudá-lo a controlar esse poder e também para ficar de olho nele.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpe"
    
    }  else if(pesquisas == "Demon Slayer") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "A trama mostra um jovem rapaz chamado Tanjiro que trabalha para ajudar sua família composta por uma mãe e vários irmãos. Um dia ele sai para realizar uma venda longe de casa e quando retorna encontra quase todos seus familiares mortos pelas mãos de onis (demônios japoneses).⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "https://m.media-amazon.com/images/I/51W6wPKu6JL._SY344_BO1,204,203,200_QL70_ML2_.jpg"
    
    }  else if(pesquisas == "Hunter") {
        ApareceAnimes.style.display = "block"
        AparecerPesquisa.style.display = "block"
        sinopse.innerHTML = "Gon, Killua, Kurapika e Leorio se reencontram para enfrentar um adversário perigoso que roubou os olhos de Kurapika e sua família e já foi integrante da Trupe Fantasma.⭐⭐⭐⭐⭐"
        ApareceAnimes.src = "https://m.media-amazon.com/images/I/51K4waiYZeL._AC_SY1000_.jpg"
    
    }else
         alert("Não foi possível achar o anime digitado, porfavor confira se digitou corretamente")
        
            
favoritos.addEventListener("click", () => {
    alert("Você não possuí nenhum anime favorito ainda")
})

perfil.addEventListener("click", () => {
    alert("Você não possuí nenhuma conta no momento")
})

notificação.addEventListener("click", () => {
    var resposta = window.confirm("Deseja ativar as notificações?")
})})
