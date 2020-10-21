(function() {

    const controlls = document.querySelectorAll('.bot-mob-click');
    const activeClass = 'bot-mob-click--active';

    controlls.forEach(function (control) {

        control.addEventListener('click', function (e) {
            e.preventDefault();

            const filterName = control.getAttribute("data-filter");

            controlls.forEach(function(link) {
                link.closest('.bot-mob-click').classList.remove(activeClass);
            })

            control.closest('.bot-mob-click').classList.add(activeClass);

            iso.arrange({
                filter: `.${filterName}`
            })
        });
    });

}())