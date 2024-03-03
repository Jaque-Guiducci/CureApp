pharmaItens = {
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
