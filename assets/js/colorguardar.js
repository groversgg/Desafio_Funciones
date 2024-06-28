let globalColor;

document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');

    switch(event.key) {
        case 'a':
            globalColor = 'pink';
            keyDiv.style.backgroundColor = globalColor;
            break;
        case 's':
            globalColor = 'orange';
            keyDiv.style.backgroundColor = globalColor;
            break;
        case 'd':
            globalColor = 'lightblue';
            keyDiv.style.backgroundColor = globalColor;
            break;
        case 'q':
            newDiv('purple');
            break;
        case 'w':
            newDiv('grey');
            break;
        case 'e':
            newDiv('brown');
            break;
    }
});

function newDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    newDiv.style.margin = '10px';
    document.body.appendChild(newDiv);
}