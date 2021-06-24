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
        <td class="item-price"><input type="number" name="" value="${data['quantity']}"></td>
        <td><button class="qtyBtn">SAVE</button></td>
      </tr>`
        allData += dispItem;
    });

    dispData.innerHTML = allData;

let qtyBtns = Array.from(document.querySelectorAll('.qtyBtn'));

qtyBtns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        let reference = e.target.parentElement.parentElement.firstElementChild.firstElementChild;
        let ref = reference.innerHTML;
        let qtyInput = e.target.parentElement.parentElement.lastElementChild.previousElementSibling.firstElementChild.value;
        let products = JSON.parse(localStorage.getItem('myInventory'));
        let productIndex = products.findIndex(y => y.name === ref);
        products[productIndex].quantity = qtyInput;
        localStorage.setItem('myInventory', JSON.stringify(products));
        location.reload();
        alert("Quantity has been updated!");
    }, false)
})
}