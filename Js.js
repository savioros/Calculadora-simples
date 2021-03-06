function limpar(){
    document.getElementById('resultado').innerHTML = ''
}

function excluir(){
    var apagar = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = apagar.substring(0, apagar.length -1)
}

function inserir(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function calc(){
    var calc = document.getElementById('resultado').innerHTML
    if(calc){
        document.getElementById('resultado').innerHTML = eval(calc)
    }else{
        document.getElementById('resultado').innerHTML = ''
    }
}