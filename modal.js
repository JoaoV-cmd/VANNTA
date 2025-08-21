const btnCadastro = document.querySelector('.btn-primary');
const btnLogin = document.querySelector('.btn-secondary');

const modalCadastro = document.getElementById('modal-cadastro');
const modalLogin = document.getElementById('modal-login');

const closeBtns = document.querySelectorAll('.close-btn');

function abrirModal(modal) {
    modal.style.display = 'block';
}

function fecharModal(modal) {
    modal.style.display = 'none';
}

if (btnCadastro) {
    btnCadastro.addEventListener('click', (event) => {
        event.preventDefault(); 
        abrirModal(modalCadastro);
    });
}

if (btnLogin) {
    btnLogin.addEventListener('click', (event) => {
        event.preventDefault();
        abrirModal(modalLogin);
    });
}

closeBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const modal = event.target.closest('.modal');
        if (modal) {
            fecharModal(modal);
        }
    });
});

window.addEventListener('click', (event) => {
    if (event.target === modalCadastro) {
        fecharModal(modalCadastro);
    }
    if (event.target === modalLogin) {
        fecharModal(modalLogin);
    }
});