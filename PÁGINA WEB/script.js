function funcao2(){
     
    A = parseFloat(document.forms["form1"].Av.value);
    B = parseFloat(document.forms["form1"].Bv.value);
    C = parseFloat(document.forms["form1"].Cv.value);
    

    X1 = (-B + (Math.sqrt((Math.pow(B,2) - 4*A*C))) / 2*A);
    X2 = (-B - (Math.sqrt((Math.pow(B,2) - 4*A*C))) / 2*A);
    if (isNaN(X1) && isNaN(X2)) {
        document.getElementById("resultado").innerHTML = "Essa equação não tem solução, conjunto de raízes vazio!";
    } else {
        document.getElementById("resultado").innerHTML = "OS RESULTADOS SÃO " + X1 +" E " + X2;
    }

}

nomes = ['raphão','jotave', 'tigas', 'bob', 'carlos', 'Jesus', 'qual a beleza que existe em ti que eu ainda não vi?'];
console.log(nomes);
console.log(nomes[nomes.length - 1]);
console.log("Tamanho do array: ",nomes.length);

console.log(nomes.pop());

document.getElementById('meuBotao').onclick = function() {
    alert('Este é um alerta emitido por uma função anônima!');
  };
  
//(function(x, y){
    //console.log(x+y);
//})(5, 3);