let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector("input").value;

    // Verifica se o campo está vazio
    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    exibirNomeNaTela();
    limparNomeAdicionado();
}

function limparNomeAdicionado() {
    document.querySelector("input").value = "";
}

function exibirNomeNaTela() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; // Limpa a lista para evitar duplicação

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}