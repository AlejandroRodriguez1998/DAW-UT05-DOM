var div = document.getElementsByTagName("html");
recorrer(document);

function recorrer(nodo){ 
    var nodos = nodo.childNodes; 
    for (var i = 0; i < nodos.length; i++){
        if(!nodos[i]){ 
            continue; 
        } 
        if(nodos[i].childNodes.length > 0){ 
            console.log(nodos[i].nodeName);
            recorrer(nodos[i]); 
        } 
    }
}   