function desenharBoneco() {
    const forca = document.getElementById("forca");

    forca.innerHTML = "";

    const palo = document.createElement("div");
    palo.style.position = "absolute";
    palo.style.bottom = "10px";
    palo.style.left = "83%";
    palo.style.transform = "translateX(-50%)";
    palo.style.width = "2px";
    palo.style.height = "220px";
    palo.style.backgroundColor = "#333";
    forca.appendChild(palo);


    const travessa = document.createElement("div");
    travessa.style.position = "absolute";
    travessa.style.top = "20px";
    travessa.style.left = "85px";
    travessa.style.transform = "translateX(-50%)";
    travessa.style.width = "80px";
    travessa.style.height = "2px";
    travessa.style.backgroundColor = "#333";
    forca.appendChild(travessa);

    const travessaSuperior = document.createElement("div");
    travessaSuperior.style.position = "absolute";
    travessaSuperior.style.top = "20px";
    travessaSuperior.style.left = "50%";
    travessaSuperior.style.transform = "translateX(-50%)";
    travessaSuperior.style.width = "2px";
    travessaSuperior.style.height = "60px";
    travessaSuperior.style.backgroundColor = "#333";
    forca.appendChild(travessaSuperior);

    const corda = document.createElement("div");
    corda.style.position = "absolute";
    corda.style.top = "20px";
    corda.style.left = "85px";
    corda.style.transform = "translateX(-50%)";
    corda.style.width = "10px";
    corda.style.height = "2px";
    corda.style.backgroundColor = "#333";
    forca.appendChild(corda);

    if (tentativasRestantes <=5) {
    const cabeca = document.createElement("div");
    cabeca.style.position = "absolute";
    cabeca.style.top = "50px";
    cabeca.style.left = "50%";
    cabeca.style.transform = "translateX(-50%)";
    cabeca.style.width = "50px";
    cabeca.style.height = "50px";
    cabeca.style.backgroundColor = "rgb(4, 90, 61)";
    cabeca.style.borderRadius = "50%";
    forca.appendChild(cabeca);
    }
    if (tentativasRestantes <= 4) {
    const corpo = document.createElement("div");
    corpo.style.position = "absolute";
    corpo.style.top = "95px";
    corpo.style.left = "50%";
    corpo.style.transform = "translateX(-50%)";
    corpo.style.width = "2px";
    corpo.style.height = "60px";
    corpo.style.backgroundColor = "rgb(4, 90, 61)";
    forca.appendChild(corpo);
    }
    if (tentativasRestantes <= 3) {
        const bracoEsquerdo = document.createElement("div");
        bracoEsquerdo.style.position = "absolute";
        bracoEsquerdo.style.top = "130px";
        bracoEsquerdo.style.left = "22%";
        bracoEsquerdo.style.transform = "translateY(-50%) rotate(-45deg)";
        bracoEsquerdo.style.width = "50px";
        bracoEsquerdo.style.height = "2px";
        bracoEsquerdo.style.backgroundColor = "rgb(4, 90, 61)";
        forca.appendChild(bracoEsquerdo);
        }
     if (tentativasRestantes <= 2) {
        const bracoDireito = document.createElement("div");
        bracoDireito.style.position = "absolute";
        bracoDireito.style.top = "130px";
        bracoDireito.style.left = "62%";
        bracoDireito.style.transform = "translateX(-50%) rotate(45deg)";
        bracoDireito.style.width = "50px";
        bracoDireito.style.height = "2px";
        bracoDireito.style.backgroundColor = "rgb(4, 90, 61)";
        forca.appendChild(bracoDireito);
        }
    if (tentativasRestantes <= 1) {
        const pernaEsquerda = document.createElement("div");
        pernaEsquerda.style.position = "absolute";
        pernaEsquerda.style.top = "180px";
        pernaEsquerda.style.left = "23%";
        pernaEsquerda.style.transform = "translateY(0%) rotate(-70deg)";
        pernaEsquerda.style.width = "60px";
        pernaEsquerda.style.height = "2px";
        pernaEsquerda.style.backgroundColor = "rgb(4, 90, 61)";
        forca.appendChild(pernaEsquerda);
    }
        if (tentativasRestantes <= 0) {
            const pernaDireita = document.createElement("div");
            pernaDireita.style.position = "absolute";
            pernaDireita.style.top = "180px";
            pernaDireita.style.left = "37%";
            pernaDireita.style.transform = "translateY(0%) rotate(70deg)";
            pernaDireita.style.width = "60px";
            pernaDireita.style.height = "2px";
            pernaDireita.style.backgroundColor = "rgb(4, 90, 61)";
            forca.appendChild(pernaDireita);
    
        }
}