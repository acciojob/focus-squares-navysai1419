document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square, index) => {
        square.addEventListener('mouseover', function () {
            changeColors(index);
        });
    });
});

function changeColors(activeIndex) {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square, index) => {
        if (index !== activeIndex) {
            square.style.backgroundColor = '#6F4E37';// Change color to Coffee
        } else {
            square.style.backgroundColor = '#E6E6FA'; // Change color to Lavender for the active square
        }
    });
}
