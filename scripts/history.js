
function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

function setCookie(name, value, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function displaySessionHistory() {
    const sessionHistory = JSON.parse(localStorage.getItem('sessionHistory')) || {};
    const tbody = document.querySelector('#sessionHistory tbody');

    tbody.innerHTML = '';

    if (Object.keys(sessionHistory).length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 2;
        cell.textContent = 'Нет данных о текущем сеансе';
        cell.style.textAlign = 'center';
        row.appendChild(cell);
        tbody.appendChild(row);
        return;
    }

    Object.entries(sessionHistory).forEach(([pageName, data]) => {
        const row = document.createElement('tr');

        const pageCell = document.createElement('td');
        pageCell.textContent = data.title;

        const countCell = document.createElement('td');
        countCell.textContent = data.count;

        row.appendChild(pageCell);
        row.appendChild(countCell);
        tbody.appendChild(row);
    });
}

function displayTotalHistory() {
    const totalHistoryCookie = getCookie('totalHistory');
    const totalHistory = totalHistoryCookie ? JSON.parse(totalHistoryCookie) : {};
    const tbody = document.querySelector('#totalHistory tbody');

    tbody.innerHTML = '';

    if (Object.keys(totalHistory).length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 2;
        cell.textContent = 'Нет данных за все время';
        cell.style.textAlign = 'center';
        row.appendChild(cell);
        tbody.appendChild(row);
        return;
    }

    Object.entries(totalHistory).forEach(([pageName, data]) => {
        const row = document.createElement('tr');

        const pageCell = document.createElement('td');
        pageCell.textContent = data.title;

        const countCell = document.createElement('td');
        countCell.textContent = data.count;

        row.appendChild(pageCell);
        row.appendChild(countCell);
        tbody.appendChild(row);
    });
}

function clearHistory() {
    localStorage.removeItem('sessionHistory');

    document.cookie = "totalHistory=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    displaySessionHistory();
    displayTotalHistory();

    alert('История очищена!');
}

document.addEventListener('DOMContentLoaded', function () {
    displaySessionHistory();
    displayTotalHistory();

    const clearButton = document.getElementById('clearHistory');
    if (clearButton) {
        clearButton.addEventListener('click', clearHistory);
    }
});