const loginScreen = document.getElementById('loginscreen');
const registerScreen = document.getElementById('registerscreen');
const goToRegister = document.getElementById('goToRegister');
const goToLogin = document.getElementById('goToLogin');

goToRegister.addEventListener('click', function(e) {
    e.preventDefault();
    loginScreen.style.display = 'none';
    registerScreen.style.display = 'block';
});

goToLogin.addEventListener('click', function(e) {
    e.preventDefault();
    registerScreen.style.display = 'none';
    loginScreen.style.display = 'block';
});

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const screen = params.get('screen');

    if (screen === 'register') {
        loginScreen.style.display = 'none';
        registerScreen.style.display = 'block';
    } else {
        loginScreen.style.display = 'block';
        registerScreen.style.display = 'none';
    }
});

document.getElementById('loginform').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('emaillogin').value;
    const password = document.getElementById('passwordlogin').value;

    // Validação básica
    if (email && password) {
        const btn = document.querySelector('.btn-login');
        btn.innerText = 'Entrando...';
        btn.disabled = true;
        btn.style.opacity = '0.7';

        // Simulação de requisição ao servidor
        setTimeout(() => {
            alert('Login realizado com sucesso no Curso Livre!');
            btn.innerText = 'Entrar';
            btn.disabled = false;
            btn.style.opacity = '1';
            
            // Limpar os campos
            this.reset();
        }, 1500);
    }
});

document.getElementById('registerform').addEventListener('submit', function(e) {
    e.preventDefault();

    const senha = document.getElementById('passwordregister').value;
    const confirmSenha = document.getElementById('confirmPassword').value;

    if (senha !== confirmSenha) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    alert('Registro realizado com sucesso no Cursos Livres!');

    registerScreen.style.display = 'none';
    loginScreen.style.display = 'block';
    this.reset();
});