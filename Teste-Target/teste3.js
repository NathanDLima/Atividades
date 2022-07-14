let arrFaturamento = [
    {
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]


function faturamentoMensal() {
    let soma = 0, qtdeDias = 0, i, mediaMensal, diasComFaturamento = 0;
    for(let i = 0; i < arrFaturamento.length; i++){
        soma = soma + arrFaturamento[i].valor;
        if(arrFaturamento[i].valor != 0){
            diasComFaturamento++;
        }
        
    }
    mediaMensal = soma / diasComFaturamento;

    for(i = 0; i < arrFaturamento.length; i++){
        if(arrFaturamento[i].valor > mediaMensal){
            qtdeDias++;
        }
    }

    console.log(`Durante o mês, ${qtdeDias} dias tiveram um faturamento diário acima da média mensal`);

    
    /*console.log(`A média mensal é de R$${mediaMensal.toFixed(4)}`);*/
    
}

function faturamento() {
    let valorref = 0, menorValor = 1000000, maiorValor = 0, qtdeDias = 0, i = 0;

    
    
    while(i < arrFaturamento.length) {
        if(arrFaturamento[i].valor != 0){
            if(arrFaturamento[i].valor > maiorValor){
                maiorValor = arrFaturamento[i].valor;
            } else if(arrFaturamento[i].valor < menorValor){
                menorValor = arrFaturamento[i].valor;
            }
        }
        
        i++;
    }
    console.log(`O menor valor de faturamento ocorrido foi o de R$${menorValor}`);
    console.log(`O maior valor de faturamento ocorrido foi o de R$${maiorValor}`);

    faturamentoMensal();
}


faturamento();






