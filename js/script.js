let botaoNao = document.getElementById('nao');
let botaoSim = document.getElementById('sim');
let mensagemErro = document.getElementById('erro');

botaoNao.addEventListener('click', function(){
    let posX = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    let posY = Math.random() * (window.innerHeight - botaoNao.offsetHeight);

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = posX + 'px';
    botaoNao.style.top = posY + 'px';

    mensagemErro.style.display = 'block';
});

botaoSim.addEventListener('click', ()=>{
    alert('Ótima escolha minha chave pix é o nº celular!');
})

