var score = localStorage.getItem('score');
document.getElementById('score').innerHTML = score;

document.getElementById('next-wave').addEventListener('click', function() {
    window.location.href = './wave2.html';
});

document.getElementById('exit-wave').addEventListener('click', function() {
    location.href = './newgame.html';
});