let campaignInfo = {
    medicamento: false,
    farm: false,
    justificativa: false,
    closureDate: false,
    prescription: false,
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

function validarInfo(){

    // Validar medicamento
    let medicamentoInput = document.getElementById("medicamento");
    let medicamentoHelper = document.getElementById("medicamento-helper");

    if (medicamentoInput.value === ""){
        medicamentoHelper.innerText = "O campo não pode estar vazio";
        estilizarInputIncorreto(medicamentoInput, medicamentoHelper);

        setTimeout(() =>{
            estilizarInputCorreto(medicamentoInput, medicamentoHelper);
        }, 5000);
    } else if (medicamentoInput.value !== "") {
        campaignInfo.medicamento = true;
    }


    // Validar campo Farm
    let pharmInput = document.getElementById("pharm-option");
    let pharmHelper = document.getElementById("pharm-helper");

    if (pharmInput.value === ""){
        pharmHelper.innerText = "Escolha pelo menos uma opção de farmácia";
        estilizarInputIncorreto(pharmInput, pharmHelper);

        setTimeout(() =>{
            estilizarInputCorreto(pharmInput, pharmHelper);
        }, 5000);
    } else if (pharmInput.value !== "") {
        campaignInfo.farm = true;
    }


    // Validar justificativa
    let justificativaInput = document.getElementById("justificativa");
    let justificativaHelper = document.getElementById("justificativa-helper");

    if (justificativaInput.value === ""){
        justificativaHelper.innerText = "Conte sua história";
        estilizarInputIncorreto(justificativaInput, justificativaHelper);

        setTimeout(() =>{
            estilizarInputCorreto(justificativaInput, justificativaHelper);
        }, 5000);
    } else if (justificativaInput.value !== "") {
        campaignInfo.justificativa = true;
    }


    // Validar Data Encerramento
    let closureInput = document.getElementById("closure-date");
    let closureHelper = document.getElementById("closure-helper");

    if (closureInput.value === ""){
        closureHelper.innerText = "O campo não pode estar vazio";
        estilizarInputIncorreto(closureInput, closureHelper);

        setTimeout(() =>{
            estilizarInputCorreto(closureInput, closureHelper);
        }, 5000);
    } else if (closureInput.value !== "") {
        campaignInfo.closureDate = true;
    }

    // Validar Receita
    let prescriptionInput = document.getElementById("input_303");
    let prescriptionHelper = document.getElementById("prescription-helper");
    let files = prescriptionInput.files

    if (files.length === 0){
        prescriptionHelper.innerText = "O campo não pode estar vazio";
        estilizarInputIncorreto(prescriptionInput, prescriptionHelper);

        setTimeout(() =>{
            estilizarInputCorreto(prescriptionInput, prescriptionHelper);
        }, 5000);
    } else if (files.length !== 0) {
        campaignInfo.prescription = true;
    } 

    // Validar Accept
    let acceptInput = document.getElementById("accept");
    let acceptHelper = document.getElementById("accept-helper");
    let checked = acceptInput.checked;

    if (checked === false){
        acceptHelper.innerText = "Aceite os termos de uso";
        estilizarInputIncorreto(acceptInput, acceptHelper);

        setTimeout(() =>{
            estilizarInputCorreto(acceptInput, acceptHelper);
        }, 5000);
    } else if (checked !== false) {
        campaignInfo.accept = true;
    }

    // Validar Declare
    let declareInput = document.getElementById("declare");
    let declareHelper = document.getElementById("declare-helper");
    let checked_declare = declareInput.checked_declare;

    if (checked_declare === false){
        declareHelper.innerText = "Declare que as informações são verdadeiras";
        estilizarInputIncorreto(declareInput, declareHelper);

        setTimeout(() =>{
            estilizarInputCorreto(declareInput, declareHelper);
        }, 5000);
    } else if (checked_declare !== false) {
        campaignInfo.declare = true;
    }    
    

    console.log(campaignInfo)
    
    for (let infos in campaignInfo) {
        if (campaignInfo[infos] === false) {
            return
        }
    }

    alert("Solicitação feita com sucesso!");

    window.location = "perfil.html"
}

function resetar(){
    window.location = "perfil.html"
}