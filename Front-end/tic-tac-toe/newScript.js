var Xturn = true
var squares = $('td')
$('.btn').click(function(){
    $('td').text('');
    Onrestart()
})

function Onrestart(){
    Xturn = true
}

function toggleState(){
    if(Xturn){
        Xturn = false
    }else{
        Xturn = true
    }
}

function visited(checks){
    console.log(checks.text)
}

function xno(cell){
    if (Xturn) {
        cell.text('X');
        toggleState()
    } else {
        cell.text('O');
        toggleState()
    }
}

function clickFunction(){
    $('td').click(function () {
        xno($(this))
        console.log($(this))
    })
}

clickFunction()