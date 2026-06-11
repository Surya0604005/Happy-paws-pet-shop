
// MOBILE MENU


const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// CLOSE MENU AFTER CLICK


const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


// SCROLL REVEAL ANIMATION


const cards = document.querySelectorAll(
    ".service-card, .product-box, .price-card, .testimonial-card"
);

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.classList.add("show");

        }

    });

});


// HERO COUNTER ANIMATION


const counters = document.querySelectorAll(".hero-stats h3");

counters.forEach(counter => {

    const target =
    +counter.getAttribute("data-target");

    let count = 0;

    const updateCounter = () => {

        const increment = target / 100;

        if(count < target){

            count += increment;

            counter.innerText =
                Math.floor(count) +
                (target === 98 ? "%" : "+");

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText =
                target +
                (target === 98 ? "%" : "+");
        }
    };

    updateCounter();

});