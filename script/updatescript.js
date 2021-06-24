document.body.onload =()=>{
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
        <td class="item-stock"><input type="text" name="" value="${data['description']}"></td>
        <td class="item-qty">${data['category']}</td>
        <td class="item-price">${data['quantity']}</td>
        <td><button class="editBtn">SAVE</button></td>
      </tr>`
        allData += dispItem;
    });

    dispData.innerHTML = allData;

    let editBtns = Array.from(document.querySelectorAll('.editBtn'));

    editBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let reference = e.target.parentElement.parentElement.firstElementChild.firstElementChild;
            let desInput = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.value;
            let ref = reference.innerHTML;

            let products = JSON.parse(localStorage.getItem('myInventory'));
            let productIndex = products.findIndex(y => y.name === ref);
            products[productIndex].description = desInput;
            localStorage.setItem('myInventory', JSON.stringify(products));
            location.reload();
            alert("Details successfully updated");
        }, false)
    })
}


