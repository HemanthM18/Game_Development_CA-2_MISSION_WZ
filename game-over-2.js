var score1 = localStorage.getItem('score1');
document.getElementById('score1').innerHTML = score1;

document.getElementById('restart-wave').addEventListener('click', function() {
    window.location.href = './wave2.html';
});

document.getElementById('exit-wave').addEventListener('click', function() {
    window.location.href = './newgame.html';
}); 