let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slideCount;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)





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