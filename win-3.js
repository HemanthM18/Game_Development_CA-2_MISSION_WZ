var score2 = localStorage.getItem('score2');
document.getElementById('score2').innerHTML = score2;

document.getElementById('exit-wave').addEventListener('click', function() {
    location.href = './newgame.html';
});