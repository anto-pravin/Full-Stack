const zero = document.querySelector('#btn0')
const one = document.querySelector('#btn1')
const clearText = document.querySelector('#btnClr')
const equal = document.querySelector('#btnEql')
const sum = document.querySelector('#btnSum')
const sub = document.querySelector('#btnSub')
const multiply = document.querySelector('#btnMul')
const divide = document.querySelector('#btnDiv')
const text = document.querySelector('#res')

zero.addEventListener('click',function(){
    text.innerHTML += '0'  
})

one.addEventListener('click',function(){
    text.innerHTML += '1'
})

sum.addEventListener('click',function(){
    text.innerHTML += '+'
})

sub.addEventListener('click',function(){
    text.innerHTML += '-'
})

multiply.addEventListener('click',function(){
    text.innerHTML += '*'
})

divide.addEventListener('click',function(){
    text.innerHTML += '/'
})

clearText.addEventListener('click',function(){
    text.innerHTML = ''
})

equal.addEventListener('click',function(){
    var numbers = text.innerHTML.split(/[+-/*/]/)
    var addition = 0
    for(var i = 0;i < numbers.length; i++){
        addition += parseInt(numbers[i],2)
    }
    text.innerHTML = (addition).toString(2)
})