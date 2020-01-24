import cart from '../data/cart.js';
import tea from '../tea.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import renderLineItem from './render-line-item.js/index.js';

const tbody = document.querySeclector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i ++) { 
    const lineItem = cart[i];
    const tea = findById(tea, lineItem.id);
    const dom = renderLineItem(lineItem, tea);

    tbody.appendChild(dom);
}
const orderTotal = calcOrderTotal(cart, tea);
orderTotalCell.textContent = (orderTotal);