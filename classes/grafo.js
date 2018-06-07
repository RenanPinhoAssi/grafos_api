class grafo{
    constructor(){
        this.mapa_vertices = {};
        this.mapa_raizes = {};
        this.quantidade_vertices = 0;
    }

    //G.adicionaVértice(v)	"Adiciona um novo vértice em G"
    adiciona_vertice(label){
        let v = new vertice(label);
        this.mapa_vertices[label] = v;
        this.quantidade_vertices++;
        this.folha_teste(label,v);
    }
    
    //G.removeVértice(v)	"Remove um  vértice de G, juntamente com todas as conexões"
    remove_vertice(label){
        let v = this.mapa_vertices[label];
        for(let key in v.mapa_parentes){
            let v_parente = v.mapa_parentes[key];
            v_parente.unlink(label,v);
        }
        for(let key in v.mapa_adjacentes){
            let v_adjacente = v.mapa_adjacentes[key];
            v_adjacente.unlinkParent(label);
            this.folha_teste(key,v_adjacente);
        }
        delete this.mapa_vertices[label];
        this.quantidade_vertices--;
    }

    //G.conecta(v1,v2)	"Conecta os vértices v1 e v2 em G"
    conecta_vertice(label1,label2){
        let v1 = this.mapa_vertices[label1];
        let v2 = this.mapa_vertices[label2];
        v1.link(label2,v2);
        v2.linkParent(label1,v1);
        this.folha_teste(label2,v2);
    }

    //G.desconecta(v1,v2)
    desconecta_vertice(label1,label2){
        let v1 = this.mapa_vertices[label1];
        let v2 = this.mapa_vertices[label2];
        v1.unlink(label2);
        v2.unlinkParent(label1);
        this.folha_teste(label2,v2);
    }


    // G.ordem  Inteiro	"Retorna o número de vértices de G"
    ordem(){
        return this.quantidade_vertices;
    }

    // G.vértices  Conjunto	"Retorna um conjunto contendo os vértices de G"
    vertices(){
        return this.mapa_vertices;
    }

    // G.umVértice  Vertice	"Retorna um vértice qualquer de G"
    random_vertice(){
        let parsedVertex = Object.values(this.mapa_vertices);
        return parsedVertex[Math.floor(Math.random()*parsedVertex.length)];
    }

    // G.adjacentes(v)Conjunto	"Retorna um conjunto contendo os vértices adjacentes a v em G"
    adjacentes_vertice(label){
        return this.mapa_vertices[label].adjacentes;
    }

    // G.grau(v)Inteiro	"Retorna o número de vértices adjacentes a v em G"
    grau_vertice(label){
        return this.mapa_vertices[label].grau;
    }
    

    ////////////// FUNÇÕES AUXILIARES

    folha_teste(label,vertice){
        if(vertice.grauEntrada == 0){
            this.mapa_raizes[label] = vertice;
        }else{
            delete this.mapa_raizes[label];
        }
    }

    //G.procura_vertice(labbel) "Retorna o vértice usando seu nome"
    procura_vertice(label){
        return this.mapa_vertices[label];
    }
}