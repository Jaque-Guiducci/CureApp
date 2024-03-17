let pharmaItens = {
    nomeFantasia: false,
    razaoSocial: false,
    cnpj: false,
    endereco: false,
    cidade: false,
    estado: false,
    telefone: false,
    email: false,
    responsavel: false
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
    
    //Validar nome fantasia
    let nomeFantasiaInput = document.getElementById("nome");
    let nomeFantasiaHelper = document.getElementById("nome-helper");

    if (nomeFantasiaInput.value.length < 15  || nomeFantasiaInput.value === ""){
        nomeFantasiaInput.innerText = "O campo deve ter 15 ou mais caracteres";
        estilizarInputIncorreto(nomeFantasiaInput, nomeFantasiaHelper);

        setTimeout(() =>{
            estilizarInputCorreto(nomeFantasiaInput, nomeFantasiaHelper);
        }, 5000);
    } else if (nomeFantasiaInput.value.length >= 15) {
        pharmaItens.nomeFantasia = true;
    }

    //Validar Razão Social
    let razaoSocialInput = document.getElementById("razao");
    let razaoSocialHelper = document.getElementById("razao-helper");

    if (razaoSocialInput.value.length < 15  || razaoSocialInput.value === ""){
        razaoSocialHelper.innerText = "O campo deve ter 15 ou mais caracteres";
        estilizarInputIncorreto(razaoSocialInput, razaoSocialHelper);

        setTimeout(() =>{
            estilizarInputCorreto(razaoSocialInput, razaoSocialHelper);
        }, 5000);
    } else if (razaoSocialInput.value.length >= 15) {
        pharmaItens.razaoSocial = true;
    }

    //Validar CNPJ
    let cnpjInput = document.getElementById("cnpj");
    let cnpjHelper = document.getElementById("cnpj-helper");
    if(cnpjInput.value.length !== 14 || cnpjInput.value === ""){
        cnpjHelper.innerText = "CNPJ inválido. Verifique a quantidade de caracteres";
        estilizarInputIncorreto(cnpjInput, cnpjHelper);

        setTimeout(() => {
            estilizarInputCorreto(cnpjInput, cnpjHelper);
        }, 5000);
    } else if (cnpjInput.value.length === 14) {
        pharmaItens.cnpj = true;
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
        pharmaItens.endereco = true;
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
        pharmaItens.cidade = true;
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
        pharmaItens.estado = true;
    }

    // Validar Telefone
    let telefoneInput = document.getElementById("telefone");
    let telefoneHelper = document.getElementById("telefone-helper");

    if (telefoneInput.value === "" || telefoneInput.value.length !== 11){
        telefoneHelper.innerText = "Verifique a quantidade de caracteres";
        estilizarInputIncorreto(telefoneInput, telefoneHelper);
        setTimeout(() =>{
            estilizarInputCorreto(telefoneInput, telefoneHelper);
        }, 5000);
    } else if (telefoneInput.value !== "" && telefoneInput.value.length === 11){
        pharmaItens.telefone = true;
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
        pharmaItens.email = true;
    }

    //Validar responsável
    let responsavelInput = document.getElementById("responsavel");
    let responsavelHelper = document.getElementById("responsavel-helper");

    if (responsavelInput.value.length < 15  || responsavelInput.value === ""){
        responsavelHelper.innerText = "O campo deve ter 15 ou mais caracteres";
        estilizarInputIncorreto(responsavelInput, responsavelHelper);

        setTimeout(() =>{
            estilizarInputCorreto(responsavelInput, responsavelHelper);
        }, 5000);
    } else if (responsavelInput.value.length >= 15) {
        pharmaItens.responsavel = true;
    }

    console.log(pharmaItens)
    
    for (let itens in pharmaItens) {
        if (pharmaItens[itens] === false) {
            return
        }
    }

    window.location = "perfil.html"
}

function resetar(){
    window.location = "/index.html"
}