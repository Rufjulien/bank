window.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add');
  const list = document.getElementById('accounts');

  addBtn.addEventListener('click', async () => {
    const id = await window.electronAPI.addAccount();
    const li = document.createElement('li');
    li.textContent = `Account ${id}`;
    li.className = 'account';
    list.appendChild(li);
  });
});
