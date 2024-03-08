function isFibonacci(n){
    n1=0; // primeiro termo 
    n2=1; // segundo 
    aux=0; // auxiliar

    sequencia = [];
    
    if(n === 0 || n === 1){
        return console.log(`${n} pertence à sequência de Fibonacci`); 
    }

    while(n1 <= n){
        if (n1 === n) {
            return console.log(`${n} pertence à sequência de Fibonacci`);
        }

        sequencia.push(n1);
        n1= n1 + n2; // o primeiro recebe a soma do primeiro e segundo termo pois fibonacci é a soma dos dois termos anteriores
        n2 = aux; // n2 é utilizado para receber o valor anterior de n1
        aux = n1; // aux recebe o novo valor de n1
    }
    return console.log(`${n} não pertence à sequência de Fibonacci`)
}

isFibonacci(4);
isFibonacci(8);

