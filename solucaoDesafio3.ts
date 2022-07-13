let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;;
let campoSaldo = document.getElementById('campo-saldo');

let novoSaldo = 0

function somarAoSaldo(soma: number) {
    if(campoSaldo){
    novoSaldo+=soma
    campoSaldo.innerHTML =novoSaldo.toString();
    limparSoma();
    }
}


function limparSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        novoSaldo = 0;
        campoSaldo.innerHTML = novoSaldo.toString();
    }
}

if (botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
}


botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});