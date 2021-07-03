document.body.onload = ()=>{
    let inventoryData = JSON.parse(localStorage.getItem('myInventory'));
    let totalItems = document.querySelector('.ti');
    let stockItems = document.querySelector('.tc');
    let catNames = document.querySelector('.tq');
    let dispData = document.querySelector('#dispData');
    let allData = '';
    let colorData = '';
    let colorContainer = document.querySelector('#descStock');

    totalItems.innerHTML = inventoryData.length;

    inventoryData.forEach(data => {
        const dispItem = `<tr ><td style = 'border-left-color: ${data['quantity'] == 0 ? 'red' : data['quantity'] > 0 && data['quantity'] < 21 ? 'orange' : 'green'}'><span class="text-offset">${data['name']}</span></td><td class="item-desc">${data['description']}</td><td class="item-cat">${data['category']}</td><td class="item-qty">${data['quantity']}</td></tr>`
        allData += dispItem;
    });

    dispData.innerHTML = allData;

    let totalCate = [];
    inventoryData.forEach(item => {
        if(!totalCate.includes(item['category'])){
            totalCate.push(item['category']);
        }
    })

    stockItems.innerHTML = totalCate.length;

    let totalQTY = 0;
    inventoryData.forEach(item =>{
        totalQTY += Number(item['quantity']);
    })
    catNames.innerHTML = totalQTY;

}