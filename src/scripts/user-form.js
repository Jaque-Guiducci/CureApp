let inputsCorretos = {
    nomecompleto: false,
    datanascimento: false,
    naturalidade: false,
    cpf: false,
    rg: false,
    endereco: false,
    cep: false,
    num: false,
    bairro: false,
    cidade: false,
    estado: false,
    telefone: false,
    email: false,
    senha: false,
    confirmaSenha: false
}

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
    let nomeCompletoHelper = document.getElementById("nomecompleto-helper");

    if (nomeCompletoInput.value.length < 15  || nomeCompletoInput.value === ""){
        nomeCompletoHelper.innerText = "Seu nome completo deve ter 15 ou mais caracteres";
        estilizarInputIncorreto(nomeCompletoInput, nomeCompletoHelper);

        setTimeout(() =>{
            estilizarInputCorreto(nomeCompletoInput, nomeCompletoHelper);
        }, 5000);
    } else if (nomeCompletoInput.value.length >= 15) {
        inputsCorretos.nomecompleto = true;
    }

    //Validar Data de Nascimento
     let datanascimentoInput = document.getElementById("datanascimento");
     let datanascimentoHelper = document.getElementById("datanascimento-helper");

    if (datanascimentoInput.value === ""){
        datanascimentoHelper.innerText = "O campo não pode estar vazio";
        estilizarInputIncorreto(datanascimentoInput, datanascimentoHelper);
        setTimeout(() =>{
            estilizarInputCorreto(datanascimentoInput, datanascimentoHelper);
        }, 5000);
    } else if (datanascimentoInput.value !== ""){
        inputsCorretos.datanascimento = true;
    }
    
    // Validar Naturalidade
    let naturalidadeInput = document.getElementById("naturalidade");
    let naturalidadeHelper = document.getElementById("naturalidade-helper");

   if (naturalidadeInput.value === ""){
        naturalidadeHelper.innerText = "O campo não pode estar vazio";
       estilizarInputIncorreto(naturalidadeInput, naturalidadeHelper);
       setTimeout(() =>{
           estilizarInputCorreto(naturalidadeInput, naturalidadeHelper);
       }, 5000);
   } else if (naturalidadeInput.value !== ""){
       inputsCorretos.naturalidade = true;
   }

    
    //Validar CPF
    let cpfInput = document.getElementById("cpf");
    let cpfHelper = document.getElementById("cpf-helper");
    if(cpfInput.value.length !== 11 && cpfInput.value === ""){
        cpfHelper.innerText = "CPF inválido. Verifique a quantidade de caracteres";
        estilizarInputIncorreto(cpfInput, cpfHelper);

        setTimeout(() => {
            estilizarInputCorreto(cpfInput, cpfHelper);
        }, 5000);
    } else if (cpfInput.value.length === 11) {
        inputsCorretos.cpf = true;
    }

    // Validar RG
    let rgInput = document.getElementById("rg");
    let rgHelper = document.getElementById("rg-helper");
    if(rgInput.value.length < 10 && rgInput.value === ""){
        rgHelper.innerText = "RG inválido. Verifique a quantidade de caracteres";
        estilizarInputIncorreto(rgInput, rgHelper);

        setTimeout(() => {
            estilizarInputCorreto(rgInput, rgHelper);
        }, 5000);
    } else if (rgInput.value.length >= 10 && rgInput.value.length <=13) {
        inputsCorretos.rg = true;
    }

    // Validar Endereço
    let enderecoInput = document.getElementById("endereco");
    let enderecoHelper = document.getElementById("endereco-helper");
 
    if (enderecoInput.value === ""){
        enderecoHelper.innerText = "O campo não pode estar vazio";
        estilizarInputIncorreto(enderecoInput, enderecoHelper);
        setTimeout(() =>{
            estilizarInputCorreto(enderecoInput, enderecoHelper);
        }, 5000);
    } else if (enderecoInput.value !== ""){
        inputsCorretos.endereco = true;
    }

    // Validar CEP
    let cepInput = document.getElementById("cep");
    let cepHelper = document.getElementById("cep-helper");
 
    if (cepInput.value === ""){
        cepHelper.innerText = "O campo não pode estar vazio";
        estilizarInputIncorreto(cepInput, cepHelper);
        setTimeout(() =>{
            estilizarInputCorreto(cepInput, cepHelper);
        }, 5000);
    } else if (cepInput.value !== "" && cepInput.value.length === 8){
        inputsCorretos.cep = true;
    }

    // Validar Número
    let numInput = document.getElementById("num");
    let numHelper = document.getElementById("num-helper");
 
    if (numInput.value === ""){
        numHelper.innerText = "O campo não pode estar vazio";
        estilizarInputIncorreto(numInput, numHelper);
        setTimeout(() =>{
            estilizarInputCorreto(numInput, numHelper);
        }, 5000);
    } else if (numInput.value !== ""){
        inputsCorretos.num = true;
    }

    // Validar Bairro
    let bairroInput = document.getElementById("bairro");
    let bairroHelper = document.getElementById("bairro-helper");
 
    if (bairroInput.value === ""){
        bairroHelper.innerText = "O campo não pode estar vazio";
        estilizarInputIncorreto(bairroInput, bairroHelper);
        setTimeout(() =>{
            estilizarInputCorreto(bairroInput, bairroHelper);
        }, 5000);
    } else if (bairroInput.value !== ""){
        inputsCorretos.bairro = true;
    }

    // Validar Cidade
    let cidadeInput = document.getElementById("cidade");
    let cidadeHelper = document.getElementById("cidade-helper");
 
    if (cidadeInput.value === ""){
        cidadeHelper.innerText = "O campo não pode estar vazio";
        estilizarInputIncorreto(cidadeInput, cidadeHelper);
        setTimeout(() =>{
            estilizarInputCorreto(cidadeInput, cidadeHelper);
        }, 5000);
    } else if (cidadeInput.value !== ""){
        inputsCorretos.cidade = true;
    }

    // Validar Estado
    let estadoInput = document.getElementById("estado");
    let estadoHelper = document.getElementById("estado-helper");
 
    if (estadoInput.value === ""){
        estadoHelper.innerText = "O campo não pode estar vazio";
        estilizarInputIncorreto(estadoInput, estadoHelper);
        setTimeout(() =>{
            estilizarInputCorreto(estadoInput, estadoHelper);
        }, 5000);
    } else if (estadoInput.value !== ""){
        inputsCorretos.estado = true;
    }

    // Validar Telefone
    let telefoneInput = document.getElementById("telefone");
    let telefoneHelper = document.getElementById("telefone-helper");
 
    if (telefoneInput.value === ""){
        telefoneHelper.innerText = "O campo não pode estar vazio";
        estilizarInputIncorreto(telefoneInput, telefoneHelper);
        setTimeout(() =>{
            estilizarInputCorreto(telefoneInput, telefoneHelper);
        }, 5000);
    } else if (telefoneInput.value !== "" && telefoneInput.value.length === 11){
        inputsCorretos.telefone = true;
    }


    // Validar Email
    let emailInput = document.getElementById("email");
    let emailHelper = document.getElementById("email-helper");

    let emailvalidado = emailInput.value.includes("@") && emailInput.value.includes(".com")

    if(emailvalidado === false || emailInput.value === "" ){
        emailHelper.innerText = "Email inválido> Preencha corretamente.";
        estilizarInputIncorreto(emailInput, emailHelper);

        setTimeout(() => {
            estilizarInputCorreto(emailInput, emailHelper);
        }, 5000);
    } else if (emailvalidado === true) {
        inputsCorretos.email = true;
    }
    
    // Validar Senha
    let senhaInput = document.getElementById("senha");
    let senhaHelper = document.getElementById("senha-helper");

    if(senhaInput.value === "" && senhaInput.value.length < 8){
        senhaHelper.innerText = "Sua senha precisa ter 8 ou mais caracteres"
        estilizarInputIncorreto(senhaInput, senhaHelper);

        setTimeout(() => {
            estilizarInputCorreto(senhaInput, senhaHelper);
        }, 5000);
    } else if(senhaInput.value.length >=8){
        inputsCorretos.senha = true;
    }

    // Validar confirmação de senha

    let confirmSenhaInput = document.getElementById("confirm-senha");
    let confirmSenhaHelper = document.getElementById("confirm-senha-helper");

    if(confirmSenhaInput.value !== senhaInput.value || (confirmSenhaInput.value.length < 8 && confirmSenhaInput.value === "")){
        confirmSenhaHelper.innerText = "Senhas não semelhantes ou menor que 8 caracteres"
        estilizarInputIncorreto(confirmSenhaInput, confirmSenhaHelper);
        
        setTimeout(() => {
            estilizarInputCorreto(confirmSenhaInput, confirmSenhaHelper);
        }, 5000);
    } else if (confirmSenhaInput.value === senhaInput.value && confirmSenhaInput.value.length >= 8) {
        inputsCorretos.confirmaSenha = true;
    }

    console.log(inputsCorretos)
    
    for (let atributo in inputsCorretos) {
        if (inputsCorretos[atributo] === false) {
            return
        }
    }

    window.location = "perfil.html"
}



function resetar(){
    window.location = "/index.html"
}