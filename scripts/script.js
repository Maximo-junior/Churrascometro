//CARNE - 400g por pessoa , + de 6 horas 650g.
//CERVEJA - 1200ml por pessoa, + 6 horas 2000ml.
//REFRIGERANTE/ÁGUA - 1000ml por pessoa, + 6 horas 1500ml.

//CRIANÇAS valem por meia pessoa 0,5.


//linkando com o html
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular(){
    console.log("calculando....");

    //fazendo codigo de calculo
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let quantidadeTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);


//Jogando pro html


resultado.innerHTML = `<p>${quantidadeTotalCarne / 1000} Kg de Carne.</p>`
resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalCerveja / 355)} Latas de Cerveja do seu gosto.</p>`
resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalBebidas / 2000)} Pet's 2l de Bebidas não alcoólicas.</p>`


}


//fazendo os if dos calculos.
function carnePorPessoa(duracao){
    if( duracao >= 6){
       
         return 650;
    }

    else{
        return 400;
    }

}


function cervejaPorPessoa(duracao){
    if( duracao >= 6){
       
         return 2000;
    }

    else{
        return 1200;
    }

}



function bebidasPorPessoa(duracao){
    if( duracao >= 6){
       
         return 1500;
    }

    else{
        return 1000;
    }
}

//Limpar o resultado
function resetar() {
    let lista = document.getElementById('resultado');
    lista = location.reload();
}