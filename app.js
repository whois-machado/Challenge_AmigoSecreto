let amigos = [];

function adicionarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nomeAmigo = inputAmigo.value;

    if(nomeAmigo.trim() === ''){
        alert('Por favor, digite um nome válido.');
        return;
    }
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        inputAmigo.value = ''; 
        return;
    }

    function atualizarLista(){
        const listaAmigos = document.getElementById('listaAmigos');

        listaAmigos.innerHTML = '';

        for(let amigo of amigos){
            const itemLista = document.createElement('li');
            itemLista.textContent = amigo;
            listaAmigos.appendChild(itemLista);
        }
    }

    amigos.push(nomeAmigo);

    atualizarLista();

    inputAmigo.value = '';
    inputAmigo.focus();
}

function sortearAmigo(){
    const resultado = document.getElementById('resultado');

    if(amigos.length < 2) {
        alert('Adicione ao menos 2 amigos para realizar o sorteio.')
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}



