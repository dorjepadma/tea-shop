import { toUSD } from '../common/utils.js';

function renderLineItem(lineItem, tea) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left;';
    nameCell.textContent = tea.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElememnt('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(tea.price);
    tr.appendChild(priceCell);

    const totalCell = document.createElementNS('td');
    totalCell.className = 'line-item-total';
    const total = lineItem.quantity * tea.price;
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);
    return tr;
}

export default renderLineItem;