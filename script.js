const result =  document.getElementById('result');

document.getElementById('add').addEventListener('click', function(){
    const first_number = document.getElementById('fnumber').value;
    const second_number = document.getElementById('snumber').value;
    const answer = Number(first_number) + Number(second_number);
    result.textContent = 'result = '+ answer;

});

document.getElementById('subtract').addEventListener('click', function() {
event.preventDefault();
const first_number = document.getElementById('fnumber').value;
const second_number = document.getElementById('snumber').value;
const answer = Number(first_number) - Number(second_number);
result.textContent = 'result = ' + answer;
});

document.getElementById('multiply').addEventListener('click', function() {
event.preventDefault();
const first_number = document.getElementById('fnumber').value;
const second_number = document.getElementById('snumber').value;
const answer = Number(first_number) * Number(second_number);
result.textContent = 'result = ' + answer;
});

document.getElementById('divide').addEventListener('click', function() {
event.preventDefault();
const first_number = document.getElementById('fnumber').value;
const second_number = document.getElementById('snumber').value;
const answer = Number(first_number) / Number(second_number);
result.textContent = 'result = ' + answer;
});