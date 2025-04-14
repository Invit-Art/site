document.addEventListener("DOMContentLoaded", () => {
    // Carrusel de imágenes
    const nextImage = document.querySelector(".next");
    const prevImage = document.querySelector(".prev");
    const slideContainer = document.querySelector(".slide");

    if (nextImage && prevImage && slideContainer) {
        nextImage.addEventListener("click", () => {
            let items = document.querySelectorAll(".item");
            if (items.length > 0) {
                slideContainer.appendChild(items[0]);
            }
        });

        prevImage.addEventListener("click", () => {
            let items = document.querySelectorAll(".item");
            if (items.length > 0) {
                slideContainer.prepend(items[items.length - 1]);
            }
        });
    }

    // Carrusel de preguntas
    let index = 0;
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev-left");
    const nextButton = document.querySelector(".next-right");

    if (carousel && slides.length > 0 && prevButton && nextButton) {
        function updateCarousel() {
            let slideWidth = slides[0].clientWidth;
            carousel.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        function nextSlide() {
            index = (index + 1) % slides.length;
            updateCarousel();
        }

        function prevSlide() {
            index = (index - 1 + slides.length) % slides.length;
            updateCarousel();
        }

        nextButton.addEventListener("click", nextSlide);
        prevButton.addEventListener("click", prevSlide);

        window.addEventListener("resize", updateCarousel);
    }

    // Menú desplegable
    const toggleBtn = document.querySelector(".toggle_btn");
    const toggleBtnIcon = document.querySelector(".toggle_btn i");
    const dropDownMenu = document.querySelector(".dropdown_menu");

    if (toggleBtn && dropDownMenu) {
        toggleBtn.addEventListener("click", () => {
            dropDownMenu.classList.toggle("open");
            const isOpen = dropDownMenu.classList.contains("open");
            toggleBtnIcon.classList.toggle("fa-xmark", isOpen);
            toggleBtnIcon.classList.toggle("fa-bars", !isOpen);
        });

        document.addEventListener("click", (event) => {
            if (!dropDownMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
                dropDownMenu.classList.remove("open");
                toggleBtnIcon.classList.remove("fa-xmark");
                toggleBtnIcon.classList.add("fa-bars");
            }
        });

        dropDownMenu.addEventListener("click", (event) => {
            if (event.target.tagName === "BUTTON" || event.target.tagName === "A") {
                dropDownMenu.classList.remove("open");
                toggleBtnIcon.classList.remove("fa-xmark");
                toggleBtnIcon.classList.add("fa-bars");
            }
        });
    }

    // Sticky Header
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("sticky", window.scrollY > 50);
        });
    }

    // Botón flotante (WhatsApp)
    const floatButton = document.querySelector(".float");
    if (floatButton) {
        window.addEventListener("scroll", () => {
            floatButton.style.display = window.scrollY > 100 ? "flex" : "none";
        });
    }
});
