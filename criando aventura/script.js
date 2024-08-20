const avance = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('clic', function (){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo'); 

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
        

    })
    
});