
var myWindow;
function crearVentana() {
    myWindow = window.open("", "", "width=200,height=100");

}
function crecer() {
    myWindow.resizeBy(50, 50);
    myWindow.focus();
}
setInterval(crecer, 150)
