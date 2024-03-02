let loginsCorretos = {
    username: false,
    password: false
}

function estilizarInputCorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
}

function estilizarInputIncorreto(input, helper){
    helper.classList.add("visible");
    input.classList.add("error");   
}


function validarLogin() {
    
    //Validar Username
    let usernameInput = document.getElementById('username');
    let usernameHelper = document.getElementById('username-helper');

    if (usernameInput.value === "" || usernameInput.value !== "miranda@gmail.com"){
        usernameHelper.innerText = "Usuário inválido";
        estilizarInputIncorreto(usernameInput, usernameHelper);

        setTimeout(() =>{
            estilizarInputCorreto(usernameInput, usernameHelper);
        }, 5000);
    } else if (usernameInput.value === "miranda@gmail.com") {
        loginsCorretos.username = true;
    }


    // Validar Password
    let passwordInput = document.getElementById('password');
    let passwordHelper = document.getElementById('password-helper');

    if(passwordInput.value === "" || passwordInput.value !== "123456789"){
        passwordHelper.innerText = "Senha inválida";
        estilizarInputIncorreto(passwordInput, passwordHelper);

        setTimeout(() =>{
            estilizarInputCorreto(passwordInput, passwordHelper);
        }, 5000);
    } else if (passwordInput.value === "123456789"){
        loginsCorretos.password = true;
    }

    console.log(loginsCorretos);

    for(let chave in loginsCorretos){
        if(loginsCorretos[chave] === false){
            return
        }
    }

    window.location = "perfil.html"
}

