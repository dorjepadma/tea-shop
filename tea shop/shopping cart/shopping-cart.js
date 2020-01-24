import cart from '../data/cart.js';
import teas from '../tea.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i ++) { 
    const lineItem = cart[i];
    const tea = findById(teas, lineItem.id);
    const dom = renderLineItem(lineItem, tea);

    tbody.appendChild(dom);
}
const orderTotal = calcOrderTotal(cart, teas);
orderTotalCell.textContent = toUSD(orderTotal);