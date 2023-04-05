const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

function manipulaDados(operation, parent){
    const contador = parent.querySelector("[data-contador]")

    if(operation === "+"){
        contador.value = parseInt(contador.value) + 1;
    } else{
        contador.value = parseInt(contador.value) - 1;
    }
}

function atualizaEstatisticas(peca){
    estatistica.forEach((element) => {
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
    })
}

controle.forEach((element) => {
    element.addEventListener("click", (event) => {
        manipulaDados(event.target.dataset.controle, event.target.parentNode);
        atualizaEstatisticas(event.target.dataset.peca);
    })
})

//1- Buscar Elemento(os) e Adicionar Evento de Click:
//document.querySelector[All{caso seja uma lista}]('element')
//'element'.addEventListener('click[tipo de evento], 'function()'[o que acontecerá no evento])

//2- Executar Funções e Usar Parâmetros:
//Funções podem ser do tipo DECLARAÇÕES/NOMEADAS [function dizOi()] ou ANÔNIMAS [function(){}/() => {}]
// Parâmetros são variáveis com escopo local, na qual recebe um valor específico para a execução:
// Function dizOi('Oi' + nome)
// dizOi('João')
// console: Oi João
// Existem parâmetros padrões do navegador:
// - evento: Retornar os dados do evento

//3- Executar Soma ou Subtração no Contador de Acordo com Click nos Controles em String e parseInt:
//'element'.value [Acessa o elemento e seu valor] +=/-= 1 [Resulta numa Adição do Tipo String] = 00 -> 001 -> 0011...
//'element'.value = parseInt('element'.value) [Retorna a string como valor inteiro] +/- 1 = 00 -> 1 -> 2
// controleMais.addEventListener("click", function() {
//     contador.value = parseInt(contador.value) + 1;
// })
// controleMenos.addEventListener("click", function() {
//     contador.value = parseInt(contador.value) - 1;
// })

//4- Refatorar código e dividir responsabilidades (click apenas alertar o evento para uma função que manipula dados da operação):
//'element'.addEventListener('click', () => {'function()'})
//function 'function('operation')'{
//  if('operation' === 'operation'){
//      'operation 
//  } else{
//      'counter-operation' 
//  }
//}
// controleMais.addEventListener("click", function() {manipulaDados("+")})
// controleMenos.addEventListener("click", function() {manipulaDados("-")})

//5- Adicionar evento de click para todos os controles com foreach:
//'element'.forEach[Aplica uma função para cada elemento de uma lista]( (element) => {
//    element.addEventListener('click', (event[acessa o evento de click]) => {
//          event.target[alvo do evento].textContent[conteúdo do alvo]
//    })
//})

//6- Alterar a função de manipular dados para reconhecer o event.target.textContent:
//function 'function('+/-')'
//'function'(event.target.textContent)

//7- Tornar dinâmico também os dados de contador, identificando o pai do contador com parentNode e adicionando dinamismo:
//'function'(event.target.textContent, event.target.parentNode)[adiciona mais um bloco de parametro no evento click]
//function 'function('operation', 'parentNode')'{
//   const 'element' = parentNode.querySelector('element') 
//  }