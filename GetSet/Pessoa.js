class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(nomeCompleto) {
        const [nome, sobrenome] = nomeCompleto.split(' ');
        if (sobrenome === undefined) {
            throw new Error('O nome completo deve conter um nome e um sobrenome.');
        }
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

const p1 = new Pessoa('João', 'Pessoa');
p1.nomeCompleto = 'João', 'souza';  // Atualizando o nome completo

console.log(p1.nomeCompleto);  // Saída: "João de Souza"
