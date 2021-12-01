function MudarImagem(){
    switch (aux){
        case 0:
        // Troca de Texto e imagem da porta
        imagem.src = './images/2.PNG';
        statusPorta.textContent = 'Porta Aberta!!!!';
        aux++;
        // Incrementa o contador e coloca na tela
        cont++
        contador.textContent = 'Quantas vezes a porta foi fechada ou aberta: ' + cont + 'x';
        // Mostrar a a data e o horário da última interação
        var today = new Date();
        var date = today.getFullYear()+'-'+today.getDate()+'-'+(today.getMonth()+1);
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        data.textContent = 'Quando foi a ultima vez que a porta foi aberta: ' + dateTime;
        break;

        case 1:
        // Troca  de texto e imagem da porta
        statusPorta.textContent = 'Porta Fechada!';
        imagem.src = './images/1.PNG';
        aux--;
        //Incrementa o contador e coloca na tela
        cont++;
        contador.textContent = 'Quantas vezes a porta foi fechada ou aberta: ' + cont + 'x';
        //Mostrar a a data e o horário da última interação
        var today = new Date();
        var date = today.getFullYear()+'-'+today.getDate()+'-'+(today.getMonth()+1);
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        data.textContent = 'Quando foi a ultima vez que a porta foi aberta: ' + dateTime;
        break;
    }
}
let cont = 0;
let aux = 0;
//Pega o objeto 'img' e 'button' da página HTML e coloca num const
const statusPorta = document.querySelector('h1')
const imagem = document.querySelector('img')
const contador = document.getElementById('p1')
const data = document.getElementById('p2')
//Adiciona um Event Listener para reconhecer o 'click' e executar a função MudarImagem
imagem.addEventListener('click', MudarImagem);
