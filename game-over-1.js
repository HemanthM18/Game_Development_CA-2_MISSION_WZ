var score = localStorage.getItem('score');
document.getElementById('score').innerHTML = score;

document.getElementById('restart-wave').addEventListener('click', function() {
    window.location.href = './wave1.html';
});

document.getElementById('exit-wave').addEventListener('click', function() {
    location.href = './newgame.html';
});