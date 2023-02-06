var resultado = document.getElementById('resultado')

function capturarCliques(id){
  document.getElementById(id).addEventListener('click', ()=>{
    if (id > 0 && id <= 9){
      resultado.value += id

    }else if (id == 'c'){
      resultado.value = ''

    }else if(id == '+' || id == '-' || id == '*' || id == '/' || id == '.'){
      resultado.value += id

    }else if(id == '='){
      var valorcampo = (eval(resultado.value))
      resultado.value = valorcampo
    }
  })
}

/* Encerrei verificando se o valor de id é c para fazer o clear
minuto 6:24 da aula*/


var v = document.querySelectorAll('.valor')

for (c = 0; c < v.length; c++){
  var ev = v[c].id
  capturarCliques(ev)
}

var a = document.querySelectorAll('.acao')

for (i = 0; i < a.length; i++){
  var ea = a[i].id
  capturarCliques(ea)
}