function splitNumero(n){
    return [...n + ''].map(Number)
}

function somarElevado(vet){
    var somatorio = 0;
    vet.forEach(element => {
        somatorio = somatorio + Math.pow(element,2);
    });
    return somatorio;
}

async function feliz(n){
    var jaFoi = [];
    while(true){
        jaFoi.push(n);
        var vet = splitNumero(n);
        n = somarElevado(vet);
        if (jaFoi.includes(n)){
            return -1;
        }
        if (n == 1){
            return 1;
        }
    }
}

async function sortudo(n){
    var vet = [];
    var vetRemove = [];
    for (var i = 1; i <= n; i++){
        if(i%2!=0){
            await vet.push(i);
        }else vetRemove.push(i);
    }

    for (var i = 0; i < vet.length; i++){
        if((i+1)%3==0){
            await vetRemove.push(vet[i]);
        }
    }
    
    for (var i = 0; i < vet.length; i++){
        if((i+1)%7==0){
            await vetRemove.push(vet[i]);
        }
    }
    if(!vetRemove.includes(n)){
        return 1;
    }else return -1;
}


var nVet = [7,21,28,142,37,100];
nVet.forEach(async n => {
    var s = await sortudo(n);
    var f = await feliz(n);
    if (s == 1 && f == 1)
        console.log(n+" – Número Sortudo e Feliz.");
    else if(s == 1 && f == -1)
        console.log(n+" – Número Sortudo e Não-Feliz.");
    else if(s == -1 && f == 1)
        console.log(n+" – Número Não-Sortudo e Feliz.");
    else if(s == -1 && f == -1)
        console.log(n+" – Número Não-Sortudo e Não-Feliz.");
});