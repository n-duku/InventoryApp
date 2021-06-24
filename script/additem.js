document.body.onload = () => {
    if(localStorage.getItem('myInventory') === null){
        localStorage.setItem('myInventory', JSON.stringify([]));
    }

    const data = localStorage.getItem('myInventory');
    console.log(data);
    const itemCount = JSON.parse(data).length;
    let displayTotal = document.querySelector('.number');
    displayTotal.innerHTML = itemCount;

    let formSubmit = document.querySelector('form');

    formSubmit.onsubmit = (e)=>{
        e.preventDefault();
        let myValue = JSON.parse(localStorage.getItem('myInventory'));
        myValue.push({name: document.querySelector('#input1').value, description: document.querySelector('#input2').value, category: document.querySelector('#input3').value, quantity: document.querySelector('#input4').value});
        localStorage.setItem('myInventory', JSON.stringify(myValue));
        location.reload();
        alert("Item successfully added");
    }
}




