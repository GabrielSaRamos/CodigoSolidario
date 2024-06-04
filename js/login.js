async function validarLogin() {
  event.preventDefault(); // Impede o envio padrão do formulário

  const nomeLogin = document.getElementById('nome_login').value;
  const emailLogin = document.getElementById('email_login').value;
  const senhaLogin = document.getElementById('senha_login').value;

  try {
      let users = await buscarUsuarios();

      let user = users.find(user => user.email === emailLogin);

      let nome = users.find(user => user.nome === nomeLogin);

      if (nome && user && user.senha === senhaLogin) {
          alert("Login bem-sucedido!");
          // Redirecionar ou executar outras ações após login bem-sucedido
          window.location.href = "home.html"; // Substitua pelo link desejado
      } else {
          alert("Dados incorretos! Insira corretamente!");
      }
  } catch (error) {
      console.error("Erro ao buscar usuários: ", error);
      alert("Erro ao tentar fazer login. Tente novamente mais tarde.");
  }
}

async function buscarUsuarios() {
  let urlServer = "https://6641230ca7500fcf1a9faa98.mockapi.io/CodigoSolidario";

  let response = await fetch(urlServer, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      }
  });

  if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
  }

  let users = await response.json();
  return users;

}
