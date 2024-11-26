
let fruits = ['Apple', 'Banana', 'Cherry', 'Guava', 'Elderberry'];
let numberList = document.getElementById('numberList');

for (var i = 0; i < 5; i++) {
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(fruits[i]));
    
    //listItem.textContent = 'Item ' + i;
    numberList.appendChild(listItem);
}
