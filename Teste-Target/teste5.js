function inverteString(palavra) {
    var stringInvertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        stringInvertida =stringInvertida + palavra[i];
        
    }
    console.log(stringInvertida);
}

inverteString('Batata');