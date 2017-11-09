window.onload = function() {
    var board = document.querySelector('.board-js');

board.addEventListener('click', addX);
};
var centinel = true;
function addX(event){
    if(event.target.matches('td') && event.target.textContent === ''){
        if(centinel) {
            event.target.textContent= 'X';
        centinel = false;
        } else {
            event.target.textContent='0';
        centinel = !centinel;
        }
    }
}

// var contestanX = '';
// var contestanX = '';

//
// contestX += event.target.matches('td').value;
// contestX += event.target.matches('td').value;

//agregando reset

function reset() {
  window.location.reload(); // recargar la pagina -location se refiere a la url
}
document.getElementById('restart').addEventListener('click', reset); //addEventListener(evento,funcion a ejecutar)
