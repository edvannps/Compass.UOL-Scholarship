
let colorList = [];

for (let i = 1; i <= 3; i++) {
    let userColor = prompt(`Digite a ${i}ª cor de sua preferência: `);
    colorList.push(userColor);
}

document.getElementById("listacores").innerHTML = colorList

//alert("Sua lista de cores ficou assim: " + colorList);
