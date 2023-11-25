
var score1 = localStorage.getItem('score1');
document.getElementById('score1').innerHTML = score1;

document.getElementById('next-wave').addEventListener('click', function() {
    window.location.href = './wave3.html';
});

document.getElementById('exit-wave').addEventListener('click', function() {
    location.href = './newgame.html';
});