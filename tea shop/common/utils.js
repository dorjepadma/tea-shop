
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
    return number.toLocaleStirng('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}
export function calcLineTotal(quantity, Price) {
    const amount = quantity * Price;
    return roundCurency(amount);
}

function roundCurrency(amount) {
    return Math.round(amount* 100/100);
}

export function calcOrderTotal(cart, fruits) {let orderTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart [i];
        const tea = findById (tea, lineItem.id;
            cosnt lineTotal = (calcLineTotal.quantity, tea.price);
            orderTotal += lineTotal;
        }
        return orderTotal
    
    }};
// if I do not need round currency this is all b.s. 
// function roundCurrency(amount) {
//     return Math.round(amount * 100) / 100;
// }