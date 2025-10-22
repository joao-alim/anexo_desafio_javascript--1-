class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contatoPref) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contatoPref = contatoPref;
    }
}

function showModal(nomeUsuario) {
    const modal = document.getElementById('agradecimentoModal');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalParagrafo = modal.querySelector('p');
    const modalButton = modal.querySelector('button');

    modalTitulo.style.color = '#00305e'; 
    modalButton.style.backgroundColor = '#00305e';

    modalTitulo.textContent = `Obrigada por nos contatar, ${nomeUsuario}!`;
    modalParagrafo.textContent = "Em breve entraremos em contato, obrigado.";
    modal.style.display = 'flex'; 
}

function showErrorModal(mensagem) {
    const modal = document.getElementById('agradecimentoModal');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalParagrafo = modal.querySelector('p');
    const modalButton = modal.querySelector('button');

    modalTitulo.style.color = '#ff0000';
    modalButton.style.backgroundColor = '#ff0000'; 

    modalTitulo.textContent = `Atenção!`;
    modalParagrafo.textContent = mensagem;
    modal.style.display = 'flex'; 
}

function hideModal() {
    const modal = document.getElementById('agradecimentoModal');
    modal.style.display = 'none';
}

function Post(form) {
    
    event.preventDefault(); 

    const contatoPrefValue = form.elements.namedItem("contato").value;

    if (contatoPrefValue === "") {
        showErrorModal("Selecione uma opção de contato para concluir.");
        return; 
    }

    let dadosContato = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value, 
        form.elements.namedItem("email").value, 
        form.elements.namedItem("cpf").value, 
        form.elements.namedItem("telefone").value, 
        contatoPrefValue
    );

    console.log("Dados do formulário armazenados:", dadosContato);

    showModal(dadosContato.nome);
}

window.Post = Post;
window.showModal = showModal;
window.hideModal = hideModal;
window.showErrorModal = showErrorModal;