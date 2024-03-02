let inputsCorretos = {
    name: false,
    email: false,
    phone: false,

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
    
    //Validar nome
    let nameInput = document.getElementById("name");
    let nameHelper = document.getElementById("name-helper")

    if (nameInput.value.length < 15  && nameInput.value === ""){
        nameHelper.innerText = "Seu nome completo deve ter 15 ou mais caracteres";
        estilizarInputIncorreto(nameInput, nameHelper);

        setTimeout(() =>{
            estilizarInputCorreto(nameInput, nameHelper);
        }, 5000);
    } else if (nameInput.value.length >= 15) {
        inputsCorretos.name = true;
    }
    // Validar Telefone
    let phoneInput = document.getElementById("phone");
    let phoneHelper = document.getElementById("phone-helper");
 
    if (phoneInput.value === ""){
        phoneHelper.innerText = "O campo não pode estar vazio";
        estilizarInputIncorreto(phoneInput, phoneHelper);
        setTimeout(() =>{
            estilizarInputCorreto(phoneInput, phoneHelper);
        }, 5000);
    } else if (phoneInput.value !== "" && phoneInput.value.length === 11){
        inputsCorretos.phone = true;
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

