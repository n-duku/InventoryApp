document.body.onload = ()=>{

    let inventoryData = JSON.parse(localStorage.getItem('myInventory'));
    let totalItems = document.querySelector('.number');
    let dispData = document.querySelector('#dispData');
    let allData = '';

    totalItems.innerHTML = inventoryData.length;

    inventoryData.forEach(data => {
        const dispItem = `<tr>
        <td>
          <span class="text-offset">${data['name']}</span>
        </td>
        <td class="item-stock">${data['description']}</td>
        <td class="item-qty">${data['category']}</td>
        <td class="item-price">${data['quantity']}</td>
        <td><button class="deleteBtn">DELETE</button></td>
      </tr>`
        allData += dispItem;
    });

    dispData.innerHTML = allData;


let delBtns = Array.from(document.querySelectorAll('.deleteBtn'));

delBtns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        let ref = e.target.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML;
        let products = JSON.parse(localStorage.getItem('myInventory'));
        let productIndex = products.findIndex(y => y.name === ref);
        products.splice(productIndex, 1);
        localStorage.setItem('myInventory', JSON.stringify(products));
        location.reload();
        alert("Item successfully deleted");
    }, false)
    
})
}