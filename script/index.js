document.body.onload = ()=>{
    let inventoryData = JSON.parse(localStorage.getItem('myInventory'));
    let totalItems = document.querySelector('.number');
    let dispData = document.querySelector('#dispData');
    let allData = '';
    let colorData = '';
    let colorContainer = document.querySelector('#descStock');

    totalItems.innerHTML = inventoryData.length;

    inventoryData.forEach(data => {
        const dispItem = `<tr><td><span class="text-offset">${data['name']}</span></td><td class="item-stock">${data['description']}</td><td class="item-qty">${data['category']}</td><td class="item-price">${data['quantity']}</td></tr>`
        allData += dispItem;
    });

    dispData.innerHTML = allData;

    inventoryData.forEach(descData =>{
        if(descData['quantity'] === 0){
            const dispDesc = `<div class="box" style="background-color: 'red'; "><div class="right-side"><div class="number"></div></div></div>`;
        colorData += dispDesc;
        }else if(( descData['quantity'] > 0 ) && (descData['quantity'] < 21 )){
            const dispDesc = `<div class="box" style="background-color: 'orange';"><div class="right-side"><div class="number"></div></div></div>`;
            colorData += dispDesc;
        }else{
            const dispDesc = `<div class="box" style="background-color: 'green';"><div class="right-side"><div class="number"></div></div></div>`;
        colorData += dispDesc; 
        }
        
    })
    colorContainer.innerHTML = colorData;

}