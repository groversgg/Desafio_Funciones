function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
}

const color = document.getElementById("changeColor");
color.addEventListener("click", function() {
    pintar(this, 'yellow');
});