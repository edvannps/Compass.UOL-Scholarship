let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

// contador de jogadas

let player1 = 0;
let player2 = 0;

// adicionando evento de click aos botões

for (let i = 0; i < boxes.length; i++) {

    // ao clicar no botão
    boxes[i].addEventListener("click", function() {
        
        let el = checkEl(player1, player2);

        // verifica se o botão já não possui um x ou o
        
        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // contador de jogadas
            if (player1 == player2) {
                player1++;
            } else {
                player2++;
            }
        }
        
    });
}

function checkEl(player1, player2) {
    if (player1 == player2) {
        el = x;
    } else {
        el = o;
    }

    return el;
}