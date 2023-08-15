
function login(){
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click',async () => {
        const email = document.getElementById('email').value;
        const senha = document.getElementById('password').value;

        try {
            const response = await axios.post('/usuario/authenticate', {email, senha}); 
            console.log("Teste de autenticação", response.data)
        } catch (error) {
            console.log('Erro ao autenticar', error);
        }

    })
})
}