let addButton = document.querySelectorAll('.add-to-cart');
addButton.forEach((button) => {
    button.addEventListener('click', howMuch)
});

function howMuch(event){
    let promptItem = window.prompt('How much?');
    if (promptItem != '') {
        alert(`You added ${promptItem}`);
        event.target.closest('#menu-sushi').innerHTML = 'Added!'
    } else {
        alert('You must enter quantity!')
    }
}


