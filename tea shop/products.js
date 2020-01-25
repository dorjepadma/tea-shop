
import teas from './tea.js';
import sortTea from '../tea shop/sort-tea.js';

const list = document.getElementById('tea');

for (let i = 0; i < teas.length; i++) {
    const tea = teas[i];
    const dom = sortTea(tea);
    list.appendChild(dom);
}