let services = [];
let itemExists = false;

const btnCarWash = document.getElementById('car-wash');
const btnMowLawn = document.getElementById('mow-lawn');
const btnPullWheels = document.getElementById('pull-weeds');
const btnSend = document.getElementById('send-inv');

const itemEl = document.getElementById('item-el');
const priceEl = document.getElementById('price-el');
const totalEl = document.getElementById('total-amount');



btnCarWash.addEventListener('click', function() {
    services.push({
        name: "Wash Car",
        price: 10
    })
    renderItem(services);
    itemExists = true;    
})

btnMowLawn.addEventListener('click', function() {
    services.push({
        name: "Mow Lawn",
        price: 20
    })
    renderItem(services);
    itemExists = true; 
})

btnPullWheels.addEventListener('click', function() {
    services.push({
        name: "Pull Wheels",
        price: 30
    })
    renderItem(services);
    itemExists = true; 
})



function renderItem(items) {
    let listItems = "";
    let priceItems = "";
    let totalAmount = 0;
    for (let i=0; i<items.length; i++) {
        listItems += `
        <li>
        ${services[i].name}
        </li>
        `
        priceItems += `
        <li>
        $${services[i].price}
        </li>
        `
        totalAmount += services[i].price;
    }
    itemEl.innerHTML = listItems
    priceEl.innerHTML = priceItems
    totalEl.textContent = "$" + totalAmount
}
