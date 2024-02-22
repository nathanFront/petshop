function login() {
    var cpfInput = document.getElementById('cpf').value; // Obtém o valor do campo CPF
    var senhaInput = document.getElementById('senha').value; // Obtém o valor do campo senha

    var cpfCorreto = "admin";
    var senhaCorreta = "admin";

    if (cpfInput === cpfCorreto && senhaInput === senhaCorreta) {
        window.location.href = 'reserva.html'; // Redireciona para a página de reserva
    } else {
        alert('Usuário ou senha inválidos');
    }
}
