function dropdown() {
    // container.style.display = (container.style.display === 'none') ? 'block' : 'none';
    const container = document.getElementById('container');
    const newPara = document.createElement('p');
    newPara.textContent = 'item';
    container.appendChild(newPara);
    newPara.addEventListener('click', itemClick);
}

function itemClick(event) {
    document.getElementById('username').value = event.currentTarget.innerHTML;
  }
  