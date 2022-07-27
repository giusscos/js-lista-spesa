const listArray = [
    'Banana x3',
    'Sedano 3Kg',
    'Fiore di Cavolfiore 4Kg',
    'Mela x5',
    'Cipolla 3Kg'
];
const listGroupElement = document.querySelector('.listGroup');
listGroupElement.innerHTML = '';

for(let i = 0; i < listArray.length - 1; i++){
    const currentItem = listArray[i];

    const listItem = `
    <li>${currentItem}</li>
    `;
    listGroupElement.innerHTML += listItem;
}
console.log(listGroupElement);