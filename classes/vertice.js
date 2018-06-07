class vertice{
    constructor(label){
        this.label = label;
        this.mapa_adjacentes = {};
        this.mapa_parentes = {};
        this.grau = 0;
        this.grauEntrada = 0;
    }

    link(label,vertice){
        this.mapa_adjacentes[label] = vertice;
        this.grau++;
    }

    linkParent(label,vertice){
        this.mapa_parentes[label] = vertice;
        this.grauEntrada++;
    }

    unlink(label){
       delete this.mapa_adjacentes[label];
       this.grau--;
    }

    unlinkParent(label,vertice){
        delete this.mapa_parentes[label];
        this.grauEntrada--;
    }
}