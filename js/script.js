async function salvarLogin(link){
    if(document.getElementById('nome_registro').value == "" || 
    document.getElementById('email_registro').value == "" || 
    document.getElementById('senha_registro').value == ""){
        alert("Preecha todos os campos corretamente!")

    }
    else{
        let user = {
            nome: document.getElementById('nome_registro').value,
            email: document.getElementById('email_registro').value,
            senha: document.getElementById('senha_registro').value,
        };
        await jogaBancoDados(user);
        console.log(user);
        window.location.href = link;
    }
}       

async function jogaBancoDados(user){
    let sitezinho = "https://6641230ca7500fcf1a9faa98.mockapi.io/CodigoSolidario";
    
    await fetch(sitezinho, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user), 
    }).then((resposta) => {
        if(resposta.status == 201){
            window.alert("Dados Cadastrados!");  
        }
    });
}