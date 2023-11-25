var score2 = localStorage.getItem('score2');
document.getElementById('score2').innerHTML = score2;

document.getElementById('restart-wave').addEventListener('click', function() {
    window.location.href = './wave3.html';
});

document.getElementById('exit-wave').addEventListener('click', function() {
    window.location.href = './newgame.html';
}); 