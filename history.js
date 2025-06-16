// history.js
document.addEventListener('DOMContentLoaded', async () => {
  const historyList = document.getElementById('historyList');
  const { history } = await chrome.storage.local.get('history');

  if (history && history.length > 0) {
    history.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = item;
      historyList.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'No history yet.';
    historyList.appendChild(li);
  }

  document.getElementById('clearHistory').addEventListener('click', async () => {
    await chrome.storage.local.set({ history: [] });
    historyList.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = 'History cleared.';
    historyList.appendChild(li);
  });
});
