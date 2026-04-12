document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.getElementById('navbarBasicExample');
    const dropdownLinks = document.querySelectorAll('.has-dropdown > .navbar-link');
    const heroImage = document.querySelector('.hero-rotating-image');

    if (burger && menu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
            document.body.classList.toggle('menu-open', menu.classList.contains('is-active'));
        });
    }

    dropdownLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            if (window.innerWidth > 1023) {
                return;
            }

            event.preventDefault();
            const parent = link.parentElement;

            document.querySelectorAll('.has-dropdown.is-open').forEach((item) => {
                if (item !== parent) {
                    item.classList.remove('is-open');
                }
            });

            parent.classList.toggle('is-open');
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.site-navbar')) {
            document.querySelectorAll('.has-dropdown.is-open').forEach((item) => {
                item.classList.remove('is-open');
            });
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1023) {
            document.querySelectorAll('.has-dropdown.is-open').forEach((item) => {
                item.classList.remove('is-open');
            });
            document.body.classList.remove('menu-open');
            if (menu) {
                menu.classList.remove('is-active');
            }
            if (burger) {
                burger.classList.remove('is-active');
            }
        }
    });

    if (heroImage) {
        const heroImages = [
            './Академия ФСО России_files/hero3.png',
            './Академия ФСО России_files/main-6.jpg'
        ];
        let currentImageIndex = 0;

        window.setInterval(() => {
            heroImage.classList.add('is-fading');

            window.setTimeout(() => {
                currentImageIndex = (currentImageIndex + 1) % heroImages.length;
                heroImage.src = heroImages[currentImageIndex];
                heroImage.classList.remove('is-fading');
            }, 350);
        }, 6500);
    }
});
