// find id function with loop
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
export function calcLineItem(quantity, Price) {
    const amount = (quantity * Price);
    //do I need round currency?
    return amount;
}
// if I do not need round currency this is all b.s. 
// function roundCurrency(amount) {
//     return Math.round(amount * 100) / 100;
// }