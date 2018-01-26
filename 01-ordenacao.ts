let numeros = [2, 5, 3, 7, 20, 12, 1, 4, 15];

for(let j = 0; j < numeros.length - 1; j++){
    console.log(`Início da ${j}a passada`);

    for(let i = 0; i < numeros.length - 1; i++){
        console.log(`Comparando ${numeros[i]} e ${numeros[i+1]}`);
    
        if(numeros[i] > numeros[i+1]){
            let memoria = numeros[i];
            numeros[i] = numeros[i+1];
            numeros[i+1] = memoria; 
        }
    }
}



console.log(numeros);