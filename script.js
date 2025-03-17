const mensagem = document.getElementById('mensagem')
const botaoEnviar = document.querySelector('input[type="reset"]')


botaoEnviar.addEventListener('click', function(event) {
    mensagem.style.display = 'flex'
    setTimeout(() => {
        mensagem.style.display = 'none'
    }, 3000) //3 segundos
})
