class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //metodos de instancia
    aumentarVolume(){
        this.volume += 2;
    }

    DiminuirVolume(){
        this.volume += 2;
    }

    //metodo de estatico só é chamado pela classe.
    static trocaPilha(){

    }
}
    const controle1 = new Controle(lg);
    controle1.aumentarVolume();
    
    ControleRemoto.trocaPilha();