document.getElementById('start').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const nickNameInput = document.getElementById('nickNameInput').value;

    if(nameInput && nickNameInput){
        localStorage.setItem('nameInput',nameInput);
        localStorage.setItem('nickNameInput',nickNameInput);
        window.location.href = './newgame.html';
    }
    else{
        alert('Please fill all the details');
    }
});

function passvalue(){
    const nickNameInput = document.getElementById('nickNameInput').value;
    localStorage.setItem("textvalue",nickNameInput);
    return false;
}