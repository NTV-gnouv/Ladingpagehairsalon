/* abre e fecha o menu ao clicar no ícone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*ao clicar nos links esconde o menu */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* FUNÇÃO MUDAR O HEADER DA PÁGINA QUANDO DER SCROLL */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* CAROUSEL SLIDER SWIPER DOS DEPOIMENTOS */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    /* device tablet or desktop */
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* SCROLLREVEAL MOSTRAR ELEMENTOS SUAVEMENTE QUANDO DER SCROLL NA PÁGINA */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials #contact .text, #contact .links, footer .brand, footer .social`,
  { interval: 100 }
)

/* FUNÇÃO BOTÃO VOLTAR PARA O TOPO */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
/* MENU ATIVO CONFORME SECTION VISIVEL NA PÁGINA */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
/* FUNÇÕES SCROLL */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})



const listimg = document.querySelector(".list_img");
const imgs = document.querySelectorAll(".list_img img");
const btnLeft = document.getElementById("button-left");
const btnRight = document.getElementById("button-right");
const length = imgs.length;
let current = 0;

const handleChangeSlide = () => {
  if (current == length - 1) {
    current = 0;
    let width = imgs[0].offsetWidth;
    listimg.style.transform = `translateX(0px)`;
  } else {
    current++;
    let width = imgs[0].offsetWidth;
    listimg.style.transform = `translateX(${width * -1 * current}px)`;
  }
};
let eventintervalChangSlide = setInterval(() => {
  handleChangeSlide();
}, 5000);

btnRight.addEventListener("click", () => {
  clearInterval(eventintervalChangSlide);
  handleChangeSlide();
  eventintervalChangSlide = setInterval(() => {
    handleChangeSlide();
  }, 5000);
});
btnLeft.addEventListener("click", () => {
  clearInterval(eventintervalChangSlide);
  if (current == 0) {
    current = length - 1;
    let width = imgs[0].offsetWidth;
    listimg.style.transform = `translateX(${width * -1 * current})`;
  } else {
    current--;
    let width = imgs[0].offsetWidth;
    listimg.style.transform = `translateX(${width * -1 * current}px)`;
  }
  eventintervalChangSlide = setInterval(() => {
    handleChangeSlide();
  }, 5000);
});
function showLargeImage(src) {
  var largeImage = document.getElementById("large-image");
  largeImage.src = src;
}

