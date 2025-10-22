class Contato {

    constructor(nome, sobrenome, email, cpf, telefone, contato){
        this.nome = nome,
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(form) {

    let data = new Contato(form.elements.namedItem("nome").value,
                form.elements.namedItem("sobrenome").value, 
                form.elements.namedItem("email").value, 
                form.elements.namedItem("cpf").value, 
                form.elements.namedItem("telefone").value, 
                form.elements.namedItem("contato").value);
    
    console.log(data);

    form.reset();

    alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}, os seus dados foram encaminhados com sucesso`)

    return false;
}