// // ------------ FUNÇÕES GERAIS ------------- //
// // function mostrarPopup(input, label){
// //     //Mostrar popup de campo obrigatório
// //     input.addEventListener("focus", function(){
// //         label.classList.add("required-popup")
// //     })

// //     // ocultar popup de campo obrigatório
// //     input.addEventListener("blur", function(){
// //         label.classList.remove("required-popup")
// //     })
// // }

// function estilizarInputCorreto(input, helper){
//     helper.classList.remove("visible");
//     input.classList.remove("error");
// }

// function estilizarInputIncorreto(input, helper){
//     helper.classList.add("visible");
//     input.classList.add("error");   
// }

// // ---- Validando Nome Completo ---- //

// let nomeCompletoInput = document.getElementById("nomecompleto");
// let nomeCompletoHelper = document.getElementById("nomecompleto-helper");

// // Validar valor do input
// nomeCompletoInput.addEventListener("change", (e)=> {
//     let valor = e.target.value

//     if (valor.length < 15){
//         // Estilos dinamicos caso o valor não seja válido
//         nomeCompletoHelper.innerText = "Seu nome completo deve ter 15 ou mais caracteres";
//         estilizarInputIncorreto(nomeCompletoInput, nomeCompletoHelper);
//         inputsCorretos.username = false;
//     } else {
//         //Estilos dinamicos caso o valor seja válido
//         estilizarInputCorreto(nomeCompletoInput, nomeCompletoHelper);
//         inputsCorretos.username = true;
//     }
// })

// let dataNascimentoInput = document.getElementById("datanascimento");
// let dataNascimentoHelper = document.getElementById("datanascimento-helper")

// dataNascimentoInput.addEventListener("click", (e)=> {
//     console.log(e.target.value)
//     let valor = e.target.value

//     if (valor.length === ''){
//         console.log('entrou no if')
//         dataNascimentoHelper.innerText = "O campo não pode estar vazio";
//         estilizarInputIncorreto(dataNascimentoInput, dataNascimentoHelper);
//         inputsCorretos.datanascimento = false;
//     } else {
//         inputsCorretos = true;
//     }
// })


// // ---- Validando CPF ---- //

// let cpfInput = document.getElementById("cpf");
// let cpfHelper = document.getElementById("cpf-helper");

// cpfInput.addEventListener("change", (e)=> {
//     let valor = e.target.value
//     console.log(valor);

//     if (valor.length < 11){
//         // Estilos dinâmicos caso o valor não seja válido
//         cpfHelper.innerText = "Seu CPF deve conter 11 dígitos";
//         estilizarInputIncorreto(cpfInput, cpfHelper);
//     } else {
//          //Estilos dinamicos caso o valor seja válido
//          estilizarInputCorreto(cpfInput, cpfHelper);
//     }
// })

// // ---- Validando RG ---- //

// let rgInput = document.getElementById("rg");
// let rgHelper = document.getElementById("rg-helper");


// rgInput.addEventListener("change", (e)=> {
//     let valor = e.target.value

//     if (valor.length < 9){
//         // Estilos dinâmicos caso o valor não seja válido
//         rgHelper.innerText = "Seu RG deve conter no mínimo 9 dígitos";
//         estilizarInputIncorreto(rgInput, rgHelper);
//     } else {
//          //Estilos dinamicos caso o valor seja válido
//          estilizarInputCorreto(rgInput, rgHelper);
//     }
// })

// // ---- Validando Email ---- //

// let emailInput = document.getElementById("email");
// let emailHelper = document.getElementById("email-helper");


// emailInput.addEventListener("change", (e)=> {
//     let valor = e.target.value

//     if(valor.includes("@") && valor.includes(".com")){
//         //Estilos dinamicos caso o valor seja válido
//         estilizarInputCorreto(emailInput, emailHelper);
//         inputsCorretos.email = true;
//     } else {
//         //Estilos dinamicos caso o valor não seja válido
//         estilizarInputIncorreto(emailInput, emailHelper);
//         emailHelper.innerText = "E-mail inválido";
//         inputsCorretos.email = false;
//     }
// })

// // ---- Validando Senha ---- //
// let senhaInput = document.getElementById("senha");
// let senhaHelper = document.getElementById("senha-helper");

// senhaInput.addEventListener("blur", (e)=> {
//    let valor = e.target.value
//    if(valor == ""){
//        //Estilos dinâmicos caso os valores sejam inválidos
//        senhaHelper.innerText = "O campo senha não pode estar vazio"
//        estilizarInputIncorreto(senhaInput, senhaHelper);
//        inputsCorretos.senha = false;
//    } else{
//        estilizarInputCorreto(senhaInput, senhaHelper);
//        inputsCorretos.senha = true;
//    }
// })


// let confirmSenhaInput = document.getElementById("confirm-senha");
// let confirmSenhaHelper = document.getElementById("confirm-senha-helper");

// confirmSenhaInput.addEventListener("change", (e)=> {
//    let valorConfirmaSenha = e.target.value
//    if(valorConfirmaSenha == senhaInput.value){
//        estilizarInputCorreto(confirmSenhaInput, confirmSenhaHelper);
//        inputsCorretos.confirmaSenha = true;
//    } else {
//        confirmSenhaHelper.innerText = "As senhas precisam ser iguais"
//        estilizarInputIncorreto(confirmSenhaInput, confirmSenhaHelper);
//        inputsCorretos.confirmaSenha = false;
//    }
// })


// let btnSubmit = document.querySelector('button[type="submit"]');
// let inputsCorretos = {
//     nomecompleto: false,
//     datanascimento: false,
//     naturalidade: false,
//     cpf: false,
//     rg: false,
//     endereco: false,
//     cep: false,
//     num: false,
//     bairro: false,
//     cidade: false,
//     estado: false,
//     telefone: false,
//     email: false,
//     senha: false,
//     confirmaSenha: false
// }

// btnSubmit.addEventListener("click", (e)=> {
//     if(inputsCorretos.nomecompleto == false ||
//         inputsCorretos.datanascimento == false ||
//         inputsCorretos.naturalidade == false ||
//         inputsCorretos.cpf == false ||
//         inputsCorretos.rg == false ||
//         inputsCorretos.endereco == false ||
//         inputsCorretos.cep == false ||
//         inputsCorretos.num == false ||
//         inputsCorretos.bairro == false ||
//         inputsCorretos.cidade == false ||
//         inputsCorretos.estado == false ||
//         inputsCorretos.telefone == false ||
//         inputsCorretos.email == false || 
//         inputsCorretos.senha == false ||
//         inputsCorretos.confirmaSenha == false){
//         e.preventDefault()
//         alert("Os campos obrigatórios precisam ser preenchidos corretamente")
//     }else{
//         alert("Formulário enviado com sucesso")
//     }
// })


function estilizarInputCorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
}

function estilizarInputIncorreto(input, helper){
    helper.classList.add("visible");
    input.classList.add("error");   
}

function validarCampos() {
    
    //Validar nome completo
let nomeCompletoInput = document.getElementById("nomecompleto");
let nomeCompletoHelper = document.getElementById("nomecompleto-helper")

if (nomeCompletoInput.value.length < 15  && nomeCompletoInput.value.length > 0){
    nomeCompletoHelper.innerText = "Seu nome completo deve ter 15 ou mais caracteres";
    estilizarInputIncorreto(nomeCompletoInput, nomeCompletoHelper);

    setTimeout(() =>{
        estilizarInputCorreto(nomeCompletoInput, nomeCompletoHelper);
    }, 5000);
}

    //Validar CPF
    let cpfInput = document.getElementById("cpf");
    let cpfHelper = document.getElementById("cpf-helper");
    if(cpfInput.value.length < 11 && cpfInput.value.length > 0){
        cpfHelper.innerText = "CPF inválido. Verifique a quantidade de caracteres";
        estilizarInputIncorreto(cpfInput, cpfHelper);

        setTimeout(() => {
            estilizarInputCorreto(cpfInput, cpfHelper);
        }, 5000);
    } 

    // Validar RG
    let rgInput = document.getElementById("rg");
    let rgHelper = document.getElementById("rg-helper");
    if(rgInput.value.length < 11 && rgInput.value.length > 0){
        rgHelper.innerText = "RG inválido. Verifique a quantidade de caracteres";
        estilizarInputIncorreto(rgInput, rgHelper);

        setTimeout(() => {
            estilizarInputCorreto(rgInput, rgHelper);
        }, 5000);
    }

    // Validar Email
    let emailInput = document.getElementById("email");
    let emailHelper = document.getElementById("email-helper");

    if(emailInput.value.includes("@") && emailInput.value.includes(".com")){
        estilizarInputCorreto(emailInput, emailHelper);
    } else {
        emailHelper.innerText = "Email inválido";
        estilizarInputIncorreto(emailInput, emailHelper);

        setTimeout(() => {
            estilizarInputCorreto(emailInput, emailHelper);
        }, 5000);
    }
    
    // Validar Senha
    let senhaInput = document.getElementById("senha");
    let senhaHelper = document.getElementById("senha-helper");

    if(senhaInput.value == "" && senhaInput.value > 0){
        senhaHelper.innerText = "O campo senha não pode estar vazio"
        estilizarInputIncorreto(senhaInput, senhaHelper);

        setTimeout(() => {
            estilizarInputCorreto(senhaInput, senhaHelper);
        }, 5000);
    }

    // Validar confirmação de senha

    let confirmSenhaInput = document.getElementById("senha");
    let confirmSenhaHelper = document.getElementById("confirm-senha-helper");

    if(confirmSenhaInput.value == senhaInput.value){
        estilizarInputCorreto(confirmSenhaInput, confirmSenhaHelper);
    } else {
        confirmSenhaHelper.innerText = "Senhas não semelhantes"
        estilizarInputIncorreto(confirmSenhaInput, confirmSenhaHelper);
    }
}
