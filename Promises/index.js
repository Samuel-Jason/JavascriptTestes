function gerarNumero(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo,){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') return reject('erro bad value');

        setTimeout(() => {
            resolve(msg);
        }, tempo);

    });
}

esperaAi('Frase 1', gerarNumero(1, 3))
    .then(res => {
        console.log(res);
        return esperaAi(1, gerarNumero(2, 5));
    })
    .then(res => {
        console.log(res);;
    })
    .catch(e => {
        console.log('ERRO: ', e)
    });