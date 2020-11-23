var nome = "Roger";
//var idade = 33;
//alert("Bem vindo " + nome);

console.log("Bem vindo");

var lista = ["maça", "pera", "laranja"];
lista.push("uva");
console.log(lista[1]);

lista.pop();
console.log(lista);

console.log(lista.reverse());

console.log(lista.toString()[0]);

console.log(lista.join(" - "));

//dicionário
var fruta = { nome: "maça", cor: "vermelha" }
console.log(fruta.nome);

//lista de dicionários
var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(fruta.nome);

//Condicionais
//var idade = prompt("Qual sua idade?");
//if (idade >= 18) {
//} else {
//}

//while
var count = 5;
while (count < 5) {
    console.log(count);
    count++;
};

//for

for (count = 0; count <= 5; count++) {
    console.log(count);
}

var d = new Date();
console.log(d);
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(5, 10));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai Japão", "Japão", "Brasil"));

//variavel global
var validar = 0;

function validaIdade(idade) {
    //variavel local
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

idade = 1;
console.log(validaIdade(idade));

function clicou() {
    console.log("Obrigado por clicar");

    document.getElementById("agradecimento").innerHTML = "Roger";
}

function redirecionar() {
    window.open("https://www.google.com.br");
    //abrir na mesma aba
    //window.location.href = "https://www.uol.com.br";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load() {
    console.log("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}