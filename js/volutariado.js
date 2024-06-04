async function salvarVoluntariado(link){
    if(document.getElementById('firstname').value == "" || 
    document.getElementById('lastname').value == "" || 
    document.getElementById('email').value == "" ||
    document.getElementById('password').value == "") {
        alert("Preecha todos os campos corretamente!")

    }
    else{
        let user = {
            nome: document.getElementById('firstname').value,
            sobreNome: document.getElementById('lastname').value,
            email: document.getElementById('email').value,
            senha: document.getElementById('password').value,
            numero: document.getElementById('number').value,
        };
        await jogaBancoDados(user);
        console.log(user);
        window.location.href = link;
    }
}       

async function jogaBancoDados(user){
    let urlServer = "https://6641230ca7500fcf1a9faa98.mockapi.io/CodigoSolidario";
    
    await fetch(urlServer, {
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
