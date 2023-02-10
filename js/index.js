let resultadoimc = document.querySelector('#resultadoimc') //Calculadora Imc
let altura = document.querySelector('#alturaimc')
let peso = document.querySelector('#pesoimc')

function calculoImc() {
    if (altura.value !== "" && peso.value !== "") {
        let imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let tabela = ''
        if (imc < 18.5) {
            tabela = 'Abaixo do peso'
        } else if (imc < 25) {
            tabela = 'Peso normal'
        } else if (imc < 30) {
            tabela = 'Acima do peso'
        } else if (imc < 35) {
            tabela = 'Obesidade Grau I'
        } else if (imc < 41) {
            tabela = 'Obesidade Grau II'
        } else {
            tabela = 'Obesidade Grau III'
        }
        resultadoimc.innerHTML = `${imc} (${tabela})`
    } else {
        alert('preencha os campos')
    }
}

function limparcalculadora() {
    document.getElementById('resultadoimc').innerHTML = " "
    document.getElementById('alturaimc').value = " "
    document.getElementById('pesoimc').value = " "
}
// Projeto Calculo inss
let resultadoinss = document.querySelector('#resultadoinss')
let salario = document.querySelector('#salarioinss')

function calculoInss() {
    if (salario.value !== "") {
        let desconto7 = (parseFloat(salario.value * 0.075)).toFixed(2)
        let desconto9 = (parseFloat(salario.value * 0.09)).toFixed(2)
        let desconto12 = (parseFloat(salario.value * 0.12)).toFixed(2)
        let desconto14 = (parseFloat(salario.value * 0.14)).toFixed(2)
        let tabela = ""
        if (desconto7 <= 90.9) {
            tabela = '- 7, 5 % Se enquadra no Salario Minimo O valor de desconto é '
            resultadoinss.innerHTML = `${tabela} ${'R$' + desconto7}`
        } else if (desconto9 >= 91 && desconto9 <= 218.46) {
            tabela = '9% para quem ganha entre R$ 1.212,01 e R$ 2.427,35. é  calculado o desconto em valor é, '
            resultadoinss.innerHTML = `${tabela} ${'R$' + desconto9 + ' reais'}`
        } else if (desconto12 >= 218.47 && desconto12 <= 436.92) {
            tabela = '12 % para quem ganha entre R$ 2.427, 36 e R$ 3.641, 03. O valor de desconto é'
            resultadoinss.innerHTML = `${tabela} ${'R$' + desconto12 + ' reais'}`

        } else if (desconto14 >= 436.93 && desconto14 <= 100000092.21) {
            tabela = '14 % para quem ganha entre R$ 3.641, 04 e R$ 7.087, 22. O valor de desconto é'
            resultadoinss.innerHTML = `${tabela} ${'R$' + desconto14 + ' reais'}`
        }
    } else {
        alert('Preencha os campos')
    }
}

function limparinss() {
    document.getElementById('resultadoinss').innerHTML = ""
    document.getElementById('salarioinss').value = ""
}

//Projeo Real vs Dolar//
let resultadomoeda = document.querySelector('#resultadomoeda')
let real = document.querySelector('#real')
let dolar = document.querySelector('#dolar')

function convercaoreal() {
    if (real.value !== '') {
        let dolarverdadeiro = parseFloat(5.25)
        let convercao = (real.value / dolarverdadeiro).toFixed(2)
        resultadomoeda.innerHTML = 'A Converção de moedas ' + '= ' + "R$" + convercao + ' Dolares'
    } else {
        resultadomoeda.innerHTML =
            alert('Preencha os campos')
    }
}

function limpar(limpar) {
    document.getElementById('real').value = ""
    document.getElementById('resultadomoeda').innerHTML = ""
}

//Projeo Positivo e Negativo//
let resultadonumber = document.querySelector('#resultadonumero')
let numero = document.querySelector('#numero')
let btnumero = document.querySelector('#btncalcular')

btncalcularpositivo.onclick = function teste() {
    if (numero.value > 0) {
        resultadonumber.innerHTML = "Numeros positivo"
    } else {
        (numero.value < 0)
        resultadonumber.innerHTML = "Numeros negativos"
    }
    if (numero.value == 0) {
        resultadonumber.innerHTML = "Zero numero Neutro"
    }
}

function limparnumero() {
    document.getElementById('numero').value = ""
    document.getElementById('resultadonumero').innerHTML = ""
}



//Projeto Classificação idade & Eleitor
let resultadonumero = document.querySelector('#resultadoeleitor')
let data = document.querySelector('#idadeeleitor')
let nome = document.querySelector('#nomeeleitor')

function calculoeleitor() {
    if (idadeeleitor.value & nome.value != '') {
        let calculo = document.getElementById('idadeeleitor').value
        if (calculo >= 17 & calculo <= 18) {
            resultadoeleitor.innerHTML = 'Maiores de 16 anos e menores de 18 anos, voto opcional'
        } else if (calculo <= 17) {
            resultadoeleitor.innerHTML = 'Menores de 16 anos, não pode votar'
        } else if (calculo >= 18) {
            resultadoeleitor.innerHTML = 'Maiores de 18 anos, voto obrigatório'
        }
    } else {
        alert('Preencha os campos')
        limpar()
    }
}

function limpareleitor() {
    document.getElementById('idadeeleitor').value = " "
    document.getElementById('nomeeleitor').value = " "
    document.getElementById('resultadoeleitor').innerHTML = " "
}

//Projeto Calcular idade Atleta & Categoria
let resultadoatleta = document.querySelector('#resultadoatleta')
let dataatleta = document.querySelector('#dataatleta')
let nomeatleta = document.querySelector('#nomeatleta')

function calculocategoria() {
    if (dataatleta.value != " ") {
        let idade = document.getElementById('dataatleta').value
        if (idade >= 5 & idade <= 7) {
            resultadoatleta.innerHTML = 'Categoria na qual meu atleta se classifica. Infantil (A) para 5 a 7 anos'
        } else if (idade <= 11) {
            resultadoatleta.innerHTML = 'Categoria na qual meu atleta se classifica. Infantil (b) para 8 a 11 anos'
        } else if (idade <= 13) {
            resultadoatleta.innerHTML = 'ategoria na qual meu atleta se classifica. Juvenil A para 12 a 13 anos'
        } else if (idade <= 17) {
            resultadoatleta.innerHTML = 'Categoria na qual meu atleta se classifica. Juvenil B para 14 a 17 anos'
        } else if (idade <= 60) {
            resultadoatleta.innerHTML = 'Categoria na qual meu atleta se classifica. Adulto para 18 anos a 60 anos'
        } else if (idade <= 100) {
            resultadoatleta.innerHTML = 'Categoria na qual meu atleta se classifica. Idoso Acima de 60 Anos'
        }
    } else {
        alert('Preencha os campos')
        limpar()
    }
}

function limparatleta() {
    document.getElementById('dataatleta').value = ""
    document.getElementById('nomeatleta').value = ""
    document.getElementById('resultadoatleta').innerHTML = ""
}

//Projeto Consumir-Api Spring Boot REST API - AJAX - JAVA//
const bt = document.querySelector('#bt')
bt.addEventListener('click', chamadaApi)
let mensagem_webApi = document.querySelector('#mensagem_webApi')

function chamadaApi() {
    $.ajax({
        
        url: "http://localhost:8081/pessoa",
        type: "GET",
        dataType: "json",
        success: function (resposta) {
            $("#mensagem_webApi").text(JSON.stringify(resposta))
        },
        error: function (request, message, error) {
            alert(message)
        }
    })
}

function limparapi() {
    document.getElementById('mensagem_webApi').innerHTML = ""
}

ScrollReveal().reveal('.social-media', { delay: 1000, });
ScrollReveal().reveal('.cardcontainer', { reset:true, useDelay: 2000 });


fetch('https://api.api-futebol.com.br/v1/times/{time_id}/partidas/ao-vivo').then(resposta=>{
    console.log( resposta.json())
})

                       
                           
                                            
     