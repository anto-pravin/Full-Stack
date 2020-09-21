var button = document.querySelector('.btn-primary')
var squares = document.querySelectorAll('td')
var i;

function clearboard(){
    for(i = 0; i < squares.length;i++){
        squares[i].textContent = '';
    }
}
function xoplacement(){
    if(this.textContent === ''){
        this.textContent = 'X';
        this.style.color = 'black';
    }else if(this.textContent === 'X'){
        this.textContent = 'O';
        this.style.color = 'red';
    }else{
        this.textContent = '';
    }
}

for(i=0; i < squares.length;i++){
    squares[i].addEventListener('click',xoplacement)  
}

button.addEventListener('click',clearboard)