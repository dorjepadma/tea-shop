
export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}
export function toUSD(number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}
export function calcLineTotal(quantity, Price) {
    const amount = quantity * Price;
    return roundCurrency(amount);
}

function roundCurrency(amount) {
    return Math.round(amount * 100 / 100);
}

export function calcOrderTotal(cart, teas) {let orderTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const tea = findById (teas, lineItem.id);
        const lineTotal = (calcLineTotal.quantity, tea.price);
        orderTotal += lineTotal;
    }
    return orderTotal;
    
}
