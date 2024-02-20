// ------------ FUNÇÕES GERAIS ------------- //
function mostrarPopup(input, label){
    //Mostrar popup de campo obrigatório
    input.addEventListener("focus", function(){
        label.classList.add("required-popup")
    })

    // ocultar popup de campo obrigatório
    input.addEventListener("blur", function(){
        label.classList.remove("required-popup")
    })
}

function estilizarInputCorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper){
    helper.classList.add("visible");
    input.classList.remove("correct");
    input.classList.add("error");   
}

// ---- Validando Nome Completo ---- //

let nomeCompletoInput = document.getElementById("nomecompleto");
let nomeCompletoLabel = document.querySelector('label[for="nomecompleto"]');
let nomeCompletoHelper = document.getElementById("nomecompleto-helper");

mostrarPopup (nomeCompletoInput, nomeCompletoLabel)

// Validar valor do input
nomeCompletoInput.addEventListener("change", (e)=> {
    let valor = e.target.value
    console.log(valor);

    if (valor.length < 15){
        // Estilos dinamicos caso o valor não seja válido
        nomeCompletoHelper.innerText = "Seu nome completo deve ter 15 ou mais caracteres";
        estilizarInputIncorreto(nomeCompletoInput, nomeCompletoHelper);
        inputsCorretos.username = false;
    } else {
        //Estilos dinamicos caso o valor seja válido
        estilizarInputCorreto(nomeCompletoInput, nomeCompletoHelper);
        inputsCorretos.username = true;
    }
})

// ---- Validando CPF ---- //

let cpfInput = document.getElementById("cpf");
let cpfLabel = document.querySelector('label[for="cpf"]');
let cpfHelper = document.getElementById("cpf-helper");

