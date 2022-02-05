class Egreso extends Dato{
    static contadorEgreso = 0;

    constructor(descripcion,valor){
        super(descripcion,valor);
        this.id = ++Egreso.contadorEgreso;
    }

    get getId(){
        return this.id;
    }
}