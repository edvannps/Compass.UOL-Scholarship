
function changeBackgroundColor() {
    let colors = ['red', 'green', 'blue', 'brown'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}