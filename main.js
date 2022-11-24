const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Enter your name");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "ayaw mo edi 'wag";
    }

    if (n.length > 0) {
        alert("happy birthday " + n + "!");
        alert('sana maging masaya ka today');
        alert('salamat sa lahat ' + n + '!');
        main.style.display = 'block';
        break;
    }
}
