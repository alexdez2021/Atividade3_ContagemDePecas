let listaDePecas = ['Filtro de ar','Roda','Pneu'];

listaDePecas.push('Retrovisor','Motor','Amortecedor')

if (listaDePecas.length < 10  ) {
    console.log(`É possivel cadastrar novas peças. Pois há ${listaDePecas.length} peças já cadastradas`)
}
else{
    console.log('Não há mais espaço na caixa');
}

let peso =  150;
if (peso < 100) {
    console.log('A peça deve pesar no minimo 100g');
}

else{
    console.log('A peça possui o peso adequado');
}

let nomePeca = 'freio';
switch (nomePeca.length) {
    case 0:
        console.log('O nome da peça não pode ser vazio');
        break;
    case 1:
    case 2:
    case 3:  
        console.log('O nome da peça deve possuir mais de 3 caracteres');        
        break; 

    default:
        console.log('O nome da peça está adequado');
        break;
}


