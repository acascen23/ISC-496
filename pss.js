document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const dataTable = document.getElementById('dataTable');
    const rows = dataTable.getElementsByTagName('tr');

    searchInput.addEventListener('keyup', function() {
        const searchTerm = searchInput.value.toLowerCase();

        for (let row of rows) {
            const cells = row.getElementsByTagName('td');
            let found = false;

            for (let cell of cells) {
                if (cell.textContent.toLowerCase().includes(searchTerm)) {
                    found = true;
                    break;
                }
            }

            if (found) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    });
});
