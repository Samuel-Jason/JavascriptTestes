function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,   //mostra a chave
        configurable: true, //configuravel
        
        get: function(){
            return estoque;
        },

        set: function(valor){
            this.estoque = sdsds;
        }

    });
}

const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1.nome);


const produto = {nome: 'caneca', preco: 1.9};

//Spread operator copia objeto e passa novos parametros
const outraCoisa = {...produto, material: 'porcelana'};
const caneca = Object.assign({}, produto, {material: 'porcelana'}); 

caneca.nome = 'Outro nome';
caneca.preco = 1.9;


 const pessoas = [
    { id: 3, nome: 'João'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'José'}
 ];

 const novasPessoa = new Map();
 for (let pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoa.set(id, {...pessoa});
 } 

 console.log(novasPessoa.get(2));


 