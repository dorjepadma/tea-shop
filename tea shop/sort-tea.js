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
    p.className = 'Price';

    // const usd = '$' + tea.price.toFixed(2);
    // p.textContent = usd;

    const button = document.createElement ('button');
    button.textContent = 'Add Tea';
    button.value = tea.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}
export default sortTea;


