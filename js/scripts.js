const form = document.querySelector('#form');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const passwordInput = document.querySelector('#password');

const jobSelect = document.querySelector('#job');

const messageTextarea = document.querySelector('#message');

console.log(form, nameInput, emailInput, passwordInput, jobSelect, messageTextarea);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    //verifica se o nome está vazio
    if(nameInput.value === "") {
        alert(`Por favor, preencha o seu nome!`);
        return;
    }

    //Verifica se o e-mail está preenchido e se é válido

    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert(`Por favor, preencha o seu e-mail!`);
        return;
    }

    //Verificar se a senha esta preenchida
    if(!validatePassword(passwordInput.value, 8)) {
        alert(`A senha precisa ser no mínimo de 8 digitos`)
    }

    //Verificar se a situação foi selecionada
    if(jobSelect.value === "") {
        alert(`Por favor, selecione a sua situação!`)
    }

    //Verifica se a mensagem está preenchida
    if(messageTextarea.value === "") {
        alert(`Por favor, escreva uma mensagem!`)
    }
    //Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

//Função que valida e-mail
function isEmailValid (email) {
    //cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}

//Função valida a senha
function validatePassword (password, minDigits) {
    if (password.length >= minDigits) {
        //Senha válida
        return true;
    }
    //Senha invalida
    return false;
}