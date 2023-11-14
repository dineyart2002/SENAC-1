

let lb_teste = document.getElementById("lb-teste")

let a = 15
let b = 48

let garrafa = { //JSON
    altura: "20cm",
    diametro: "5cm",
    capacidade: "500ml",
    cor: "cinza"
}

function alterarTexto(){
    

    lb_teste.textContent = garrafa.altura
}