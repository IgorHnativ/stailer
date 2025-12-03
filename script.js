function addToCart(name) {
    alert(name + " додано до кошика!");
}
const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if(i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    current++;
    if(current >= slides.length) current = 0;
    showSlide(current);
}

// Змінюємо слайд кожні 3 секунди
setInterval(nextSlide, 3000);
@media(max-width:768px){
    .product-grid, .review-grid {flex-direction:column; align-items:center;}
    .product-card {
        width:90%;   /* картка займає майже всю ширину */
        padding:15px;
    }
    .product-images {
        flex-wrap:wrap;   /* фото переносяться на новий ряд */
        justify-content:center;
        gap:10px;
    }
    .product-images img {
        width:80px;
        height:80px;
    }
// Гамбургер меню
const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('.header .nav');

menuToggle.addEventListener('click', () => { 
    nav.classList.toggle('active'); 
});

// Автоматичне закриття меню при кліку на пункт
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active'); // ховаємо меню
        menuToggle.classList.remove('active'); // фікс для мобільних
    });
});

}
