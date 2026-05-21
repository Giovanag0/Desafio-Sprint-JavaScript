// class contato
class contato {
    constructor(nome, sobrenome, email, cpf, telefone, tipo_contato, mensagem) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telephone;
        this.tipo_contato = tipo_contato;
        this.mensagem = mensagem;
    }
}

function Post(form) {
    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value, 
        form.elements.namedItem("email").value, 
        form.elements.namedItem("cpf").value, 
        form.elements.namedItem("telefone").value, 
        form.elements.namedItem("tipo_contato").value,
        form.elements.namedItem("mensagem").value     
    );

    alert('Obrigado sr(a) ' + data.nome + ' ' + data.sobrenome + ', os seus dados e sua ' + data.tipo_contato + ' foram encaminhados com sucesso!');
    
    form.reset();
}