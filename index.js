const typedNumbers = document.getElementById('typed-numbers');
const output = document.getElementById('outout-area');

function getNumbers(inputId) {
	document.getElementById('typed-numbers').innerText +=
		document.getElementById(inputId).innerText;
}


document.getElementById('btn-1').addEventListener('click', function(){
     getNumbers('btn-1');
})
document.getElementById('btn-2').addEventListener('click', function(){
    getNumbers('btn-2');
})
document.getElementById('btn-3').addEventListener('click', function(){
    getNumbers('btn-3');
})
document.getElementById('btn-4').addEventListener('click', function(){
    getNumbers('btn-4');
})
document.getElementById('btn-5').addEventListener('click', function(){
    getNumbers('btn-5');
})
document.getElementById('btn-6').addEventListener('click', function(){
    getNumbers('btn-6');
})
document.getElementById('btn-7').addEventListener('click', function(){
    getNumbers('btn-7');
})
document.getElementById('btn-8').addEventListener('click', function(){
    getNumbers('btn-8');
})
document.getElementById('btn-9').addEventListener('click', function(){
    getNumbers('btn-9');
})
document.getElementById('add-btn').addEventListener('click', function(){
    getNumbers('add-btn');
})
document.getElementById('minus-btn').addEventListener('click', function(){
    getNumbers('minus-btn');
})
document.getElementById('multiply-btn').addEventListener('click', function(){
    getNumbers('multiply-btn');
})
document.getElementById('divide-btn').addEventListener('click', function(){
    getNumbers('divide-btn');
})
document.getElementById('fraction-btn').addEventListener('click', function(){
    getNumbers('fraction-btn');
})
document.getElementById('single-delete-btn').addEventListener('click', function(e){
    singleDelete = typedNumbers.innerText.slice(0, -1);
    typedNumbers.innerText = singleDelete;
    
})
document.getElementById('delete-btn').addEventListener('click', function(e){
    typedNumbers.innerText = '';
    output.innerText = '';
    
})

document.getElementById('equal-btn').addEventListener('click', function(e){
    output.innerText = eval(typedNumbers.innerText);
})

