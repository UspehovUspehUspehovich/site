(function() {
const controlls = document.querySelectorAll('.nav-link-menu');
const activeClass = 'nav-link-menu--active';

controlls.forEach(function (control) {

    control.addEventListener('click', function (e) {
        e.preventDefault();

        const filterName = control.getAttribute("data-filter");

        controlls.forEach(function(link) {
            link.closest('.nav-link-menu').classList.remove(activeClass);
        })

        control.closest('.nav-link-menu').classList.add(activeClass);

        iso.arrange({
            filter: `.${filterName}`
        })
    });
});

}())