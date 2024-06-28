function pintar(ele, color) {
    ele.style.backgroundColor = color;
}

document.getElementById("caja1").addEventListener("click", function() {
    pintar(this, 'black');
});
document.getElementById("caja2").addEventListener("click", function() {
    pintar(this, 'black');
});
document.getElementById("caja3").addEventListener("click", function() {
    pintar(this, 'black');
});
document.getElementById("caja4").addEventListener("click", function() {
    pintar(this, 'black');
});