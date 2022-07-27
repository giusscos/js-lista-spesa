let num = parseInt(prompt('Quanti prodotti devi comprare?'));
while(isNaN(num)){
    num = parseInt(prompt('Quanti prodotti devi comprare?'));
    console.log('Inserisci un numero valido!');
}
const listArray = [];

for(let i = 0; i < num; i++){
    const itemListArray = prompt('Prodotto ' + (i + 1) + ' del carrello >>');
    listArray.push(itemListArray);
}

console.log(listArray);

const listGroupElement = document.querySelector('.listGroup');
listGroupElement.innerHTML = '';

// Soluzione con FOR 
for(let i = 0; i < listArray.length; i++){
    const currentItem = listArray[i];

    const listItem = `
    <li>${currentItem}</li>
    `;
    listGroupElement.innerHTML += listItem;
}

// Soluzione con WHILE
// listGroupElement.innerHTML += `<br>WHILE`;

// let i = 0;
// while(i < listArray.length - 1){
//     const currentItem = listArray[i];

//     const listItem = `
//     <li>${currentItem}</li>
//     `;
//     listGroupElement.innerHTML += listItem;
//     i++;
// }
console.log(listGroupElement);