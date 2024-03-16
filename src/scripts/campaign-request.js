let campaignInfo = {
    medicamento: false,
    farm: false,
    dateEnd: false,
    recurrent: false,
    receita: false,
    accept: false,
    declare: false,
}

function estilizarInputCorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
}

function estilizarInputIncorreto(input, helper){
    helper.classList.add("visible");
    input.classList.add("error");   
}

function validarCampos(){
    console.log(pharmaItens)
    
    for (let infos in campaignInfo) {
        if (campaignInfo[infos] === false) {
            return
        }
    }

    window.location = "campaign.html"
}

function resetar(){
    window.location = "campaign.html"
}