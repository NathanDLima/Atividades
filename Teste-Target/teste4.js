let sp = 67836.43, rj = 36678.66,
mg = 29229.88, es = 27165.48, outros = 19849.53;

const total = sp + rj + mg + es + outros;


function representacaoEstado() {
    let representsp, representrj, representmg, representes, representoutros;
    representsp = (sp / total) * 100.00;
    representrj = (rj / total) * 100.00;
    representmg = (mg / total) * 100.00;
    representes = (es / total) * 100.00;
    representoutros = (outros / total) * 100.00;

    console.log(`A porcentagem de representação de São Paulo referente ao total é de: ${representsp.toFixed(2)} %`);
    console.log(`A porcentagem de representação do Rio de Janeiro referente ao total é de: ${representrj.toFixed(2)} %`);
    console.log(`A porcentagem de representação de Minas Gerais referente ao total é de: ${representmg.toFixed(2)} %`);
    console.log(`A porcentagem de representação do Espiríto Santo referente ao total é de: ${representes.toFixed(2)} %`);
    console.log(`A porcentagem de representação de outros estados referente ao total é de: ${representoutros.toFixed(2)} %`);
}

representacaoEstado();