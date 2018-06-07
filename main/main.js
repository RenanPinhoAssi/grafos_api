angular.module('homework', [])
.controller('appController', function ($scope) {
    var vm = this;
    vm.G = new grafo();

    var checkLabel = function(label){
        let groupLabel = label.split(",");
        if(groupLabel.length > 1){
            return groupLabel;
        }
        return [label];
    }

    vm.addNewVertex = function(label){
        let groupLabel = checkLabel(label);
        for(let i in groupLabel){
            let compiledLabel = groupLabel[i].trim();
            vm.G.adiciona_vertice(compiledLabel);
        }
    }
    
    vm.addNeighbour = function(label1,label2){
        let groupLabel = checkLabel(label2);
        for(let i in groupLabel){
            let compiledLabel = groupLabel[i].trim();
            if(vm.G.procura_vertice(compiledLabel)){
                vm.G.conecta_vertice(label1,compiledLabel);
            }else{
                vm.addNewVertex(compiledLabel);
                vm.addNeighbour(label1,compiledLabel);
            }
        }
    }

    vm.removeNeighbour = function(label1,label2){
        let groupLabel = checkLabel(label2);
        for(let i in groupLabel){
            let compiledLabel = groupLabel[i].trim();
            vm.G.desconecta_vertice(label1,compiledLabel);
        }
    }

    vm.deleteVertex = function(label){
        vm.G.remove_vertice(label);
    }
    
    vm.topologicalSort = function(){
        // Array.unshift()
        let topologicalSet = {};
        let _G             = Object.assign({}, vm.G);
        
        //let startSet       = vm.G.mapa_raizes;
    }

});
