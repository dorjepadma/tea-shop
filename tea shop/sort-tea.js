import { findById, toUSD } from '../';

function sortTea(tea) {
    const li = document.createElement('li');
    li.className = tea.category;
    li.title = tea.description;

    const h3 = document.createElement('h3');
    h3.textContent = tea.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '/../../assets/' + tea.image;
    img.alt = tea.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = toUSD(tea.price);

    // const usd = '$' + tea.price.toFixed(2);
    // p.textContent = usd;

    const button = document.createElement ('button');
    button.textContent = 'Add Tea';
    button.value = tea.id;
    button.addEventListener('click', () => {
        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        }
        else {
            cart = [];
        }
        let lineItem = findById(cart, tea.id);
        if (!lineItem) {
            lineItem = {
                id: tea.id,
                quantity: 1
            };
            cart.push(lineItem);
        }
        else { 
            lineItem.quantity++;
        }
        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

        alert('1 ' + tea.name + 'added to cart');

    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}
export default sortTea;


