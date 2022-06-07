"use strict";

const shoppingList = {
    buy: []
};

const addForm = document.querySelector('.add_form');
const addInput = document.querySelector('.add_input');
const parentList = document.querySelector('.groceryList__list');



addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let NewBuy = addInput.value;
    
    shoppingList.buy.push(NewBuy);
   
    createShoppingList(shoppingList.buy, parentList);
    
    addForm.reset();

});



function createShoppingList(buys, parentList) {

        parentList.innerHTML += `
            <li class="list__item">${buys[buys.length-1]}
            </li>
        `;
        console.log(shoppingList);

    //Вариант с зачеркиванием элемента
    document.querySelectorAll('.list__item').forEach((item) => {
        item.addEventListener('click', () => {
            if(item.style.textDecoration != "line-through") {
                item.style.textDecoration = "line-through";
            } else {
                item.style.textDecoration = "none";
            } 
        });
        
    });
 
}



