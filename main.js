var resultado = document.getElementById('resultado')

function capturarCliques(id){
  document.getElementById(id).addEventListener('click', ()=>{
    if (id >= 0 && id <= 9){
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

var branca = document.getElementById('calc-branca')
var preta = document.getElementById('calc-preta')
var corfundo = document.querySelector('#cor-principal')
var calculadora = document.querySelector('#calculadora')

branca.addEventListener('click', ()=>{
    corfundo.className = 'fundo-preto'
    calculadora.className = 'calculadora-branca'
})

preta.addEventListener('click', ()=>{
    corfundo.className = 'fundo-branco'
    calculadora.className = 'calculadora-preta'
})