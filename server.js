//CLASS HABITAT//
class Habitat{
    #nomeHabitat;
    #idHabitat;
    constructor ( nomeHabitat, idHabitat ){
        this.#nomeHabitat = nomeHabitat;
        this.#idHabitat = idHabitat;
        }
    set nomeHabitat (novoNomeHab) {
        if (!novoNomeHab ||  novoNomeHab < 3){
            console.log('[ERRO] O NOME DEVE POSSUIR MAIS DE 3 CARACTERES');
            return;
    } this.nomeHabitat = novoNomeHab;
}
    set idHabitat (novoIdHab){
        if(!novoIdHab || novoIdHab < 3){
            console.log('[ERRO] O NOME DO HABITAT DEVE POSSUIR MAIS DE 3 CARACTERES');
            return;
        }
        this.#idHabitat = novoIdHab;
    } 
    get nomeHabitat () {return this.#nomeHabitat}
    get idHabitat () { return this.#idHabitat}
    //EXIBIÇÃO//
    exibir(){
        console.log (`IDHABITAT: ${this.#idHabitat} | NOMEHABITAT: ${this.#nomeHabitat}`);
    }
}
//CRIATURA CLASSE PAI//
class Criatura {
    #id;
    #nome;
    #idHabitat;
    constructor(id, nome, idHabitat){
        this.#id = id;
        this.#nome = nome.toUpperCase();
        this.#idHabitat = idHabitat;
    }
    set nome (novoNome){
        if(!novoNome || novoNome.lenght < 3){
            console.log('[ERRO] O NOME DEVE POSSUIR MAIS DE 3 CARACTERES')
            return;
        }
        this.#nome = novoNome;
    }
    get nome(){return this.#nome;};
    get id(){return this.#id;};
    get idHabitat(){return this.#idHabitat;};
    //EXIBIÇÃO//
    exibir(){
        console.log(`ID: ${this.id} | NOME: ${this.nome} | IDHABITAT: ${this.idHabitat}`)
    }
}
//CYBERPET CLASSE FILHO//
class CyberPet extends Criatura{
    #nivelBateria;
    constructor(id,nome,idHabitat,nivelBateria){
        super(id,nome,idHabitat)
        this.#nivelBateria = nivelBateria;
    }
    set nivelBateria(porcentagem){
        if(porcentagem < 0 || porcentagem > 100){
            console.log('[ERRO] O NÍVEL DA BATERIA DEVE ESTAR ENTRE 0 E 100');
            return
        }
        this.#nivelBateria = porcentagem;
    }
    get nivelBateria(){return this.#nivelBateria;};
    //EXIBIÇÃO//
    exibir(){
        super.exibir();
        console.log(`NÍVEL BATERIA: ${this.nivelBateria}%`);
    }
}
//ENUM DIETAS//
const dietas = {
    CARNÍVORO: "CARNÍVORO",
    HERBÍVORO: "HERBÍRVERO",
    OMNÍVERO: "OMNÍVERO"
};
//ORGANICPET CLASSE FILHO//
class OrganicPet extends Criatura{
    #dieta;
    constructor(id,nome,idHabitat,dieta){
        super(id,nome,idHabitat)
        this.#dieta = dieta;
    }
    set dieta(dietas){
        if(!Object.values(dietas).includes(dieta)){
            throw new Error('[RISCO] DIETA INCOMPATÍVEL');
        }
        this.#dieta = dietas;
    }
    get dieta(){return this.#dieta;};
    //EXIBIÇÃO//
    exibir(){
        super.exibir();
        console.log(`DIETA: ${this.dieta}`);
    }
}
