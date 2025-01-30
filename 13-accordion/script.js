var accordionBtn = document.querySelectorAll('.title');

accordionBtn.forEach(header => {
    header.addEventListener('click', function () {
        const activeItem = document.querySelector('.item.active');
        if (activeItem && activeItem !== header.parentElement) {
            activeItem.classList.remove('active');
        }

        this.parentElement.classList.toggle('active');
    });
});