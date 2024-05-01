var url = "produtos.html"; 


var xhr = new XMLHttpRequest();


xhr.open("GET", url, true);


xhr.onreadystatechange = function() {
    
    if (xhr.readyState == 4 && xhr.status == 200) {
        
        var conteudo = xhr.responseText;
        
       
        var temp = document.createElement("div");
        temp.innerHTML = conteudo;
        
       
        var divDesejada = temp.querySelector("#teste");
        
        
        if (divDesejada) {
          
            document.getElementById("divDesejada").appendChild(divDesejada);
        } else {
            console.error("A div com o ID 'teste' não foi encontrada no arquivo produtos.html.");
        }
    }
};


xhr.send();
