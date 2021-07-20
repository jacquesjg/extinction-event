
function linethrough() {
    const olLi = document.querySelectorAll('ol li');

    for (const species of olLi) {

        species.addEventListener('click', function (event) {
            event.target.style.textDecoration = "line-through"
        })
    }
}
linethrough();


function fadeAway() {
    const ulLi = document.querySelectorAll('ul li');

    for (const species of ulLi) {

        species.addEventListener('click', function (event) {
            event.target.style.opacity = "0"
        })
    }
}
fadeAway();