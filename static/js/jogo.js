let palavraAtual;
let dicaAtual;
let letrasAdivinhadas = [];
const tentativasMaximas = 6;
let tentativasRestantes;
let jogoFinalizado = false; // Variável para rastrear se o jogo foi finalizado

function iniciarJogo() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    palavraAtual = palavras[indiceAleatorio];
    dicaAtual = dicas[indiceAleatorio];
    letrasAdivinhadas = [];
    tentativasRestantes = tentativasMaximas;
    jogoFinalizado = false; // Reinicie a flag do jogo ao iniciar um novo jogo
    atualizarDisplayDoJogo();

    const entradaAdivinhacao = document.getElementById("guess");
    entradaAdivinhacao.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            adivinharLetra();
        }
    });
}

function atualizarDisplayDoJogo() {
    let palavraExibida = "";
    for (let i = 0; i < palavraAtual.length; i++) {
        const letra = palavraAtual[i];
        if (letrasAdivinhadas.indexOf(letra) !== -1 || letra === " ") {
            palavraExibida += letra;
        } else {
            palavraExibida += "_";
        }
    }
    document.getElementById("palavra").textContent = palavraExibida;
    document.getElementById("dica").textContent = `Dica: ${dicaAtual}`;
    document.getElementById("status").textContent = `Tentativas restantes: ${tentativasRestantes}`;
    document.getElementById("attempts").textContent = `Letras já tentativas: ${letrasAdivinhadas.join(", ")}`;
}

function adivinharLetra() {
    if (jogoFinalizado) return; // Não faz nada se o jogo estiver finalizado

    const entradaAdivinhacao = document.getElementById("guess");
    const letraAdivinhada = entradaAdivinhacao.value.toLowerCase();

    if (
        letraAdivinhada.length === 1 &&
        /^[a-záéíóúãõç\s]+$/.test(letraAdivinhada)
    ) {
        if (letrasAdivinhadas.indexOf(letraAdivinhada) === -1) {
            letrasAdivinhadas.push(letraAdivinhada);

            let letraNaoEncontrada = true;
            for (let i = 0; i < palavraAtual.length; i++) {
                if (palavraAtual[i] === letraAdivinhada) {
                    letraNaoEncontrada = false;
                    break;
                }
            }
            if (letraNaoEncontrada) {
                tentativasRestantes--;
            }
            atualizarDisplayDoJogo();
            desenharBoneco(tentativasRestantes);

            let palavraCompleta = true;
            for (let i = 0; i < palavraAtual.length; i++) {
                if (
                    letrasAdivinhadas.indexOf(palavraAtual[i]) === -1 &&
                    palavraAtual[i] !== " "
                ) {
                    palavraCompleta = false;
                    break;
                }
            }

            if (palavraCompleta) {
                document.getElementById("status").textContent = "Você venceu!!";
                finalizarJogo(); // Finalize o jogo ao vencer
            } else if (tentativasRestantes <= 0) {
                document.getElementById(
                    "status"
                ).textContent = `Você perdeu!! A palavra era: ${palavraAtual}`;
                finalizarJogo(); // Finalize o jogo ao perder
            }
        }
    }

    entradaAdivinhacao.value = "";
}

function finalizarJogo() {
    jogoFinalizado = true; 
    const entradaAdivinhacao = document.getElementById("guess");
    entradaAdivinhacao.removeEventListener("keypress", adivinharLetra); 
    entradaAdivinhacao.disabled = true; 
    if (inicarJogo = true){
        entradaAdivinhacao.disabled = false;
    }
}

document.addEventListener("DOMContentLoaded", iniciarJogo);