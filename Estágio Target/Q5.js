
function inverteTexto(texto){
    let otxet = ''; // inicializando a variável

    for(let i = texto.length -1 ; i >=0 ;i--){ 
        otxet = otxet + texto[i];  // pega o otxet vazio e adiciona de trás pra frente cada caractere
    }

    return otxet;
}

console.log(inverteTexto("macaco prego"));

