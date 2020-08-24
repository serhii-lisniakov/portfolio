var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    initialSlide: 0,
    slidesPerView: 1,
    mousewheel: false,
    loop:false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-btn-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
})

const anchors = document.querySelectorAll('a[href^="#slide"')
const link = '.swiper-pagination-bullet:nth-child'
const links = [home, person, skills, portfolio]
const bullets = document.querySelectorAll('.swiper-pagination-bullet')

function scroll() {
  for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const id = anchor.getAttribute('href').substr(6)
      document.querySelector(link + '('+id+')' ).click();
      return false
    }) 
  }
}
scroll()

function paginationInit() {
  links.forEach(link => link.addEventListener('click', function() {
    links.forEach(link => link.classList.remove('active'))
    this.classList.add('active');
  }))
}

paginationInit()

function swipeChange() {
  const slides = document.querySelectorAll('.swiper-wrapper > swiper-slide');
  console.log(slides)
  slides.forEach((slide, i) => {
    console.log(i)
    if (slide.classList.contains('.swiper-slide-active')) {
      links[i].click()
    }
  })
}

document.querySelector('.body').addEventListener('mouseup', function() {
  console.log('treu')
})

function portfolioParentScroll() {
  const portfolioParent = document.querySelector('.slide-portfolio').closest('.swiper-slide')
  portfolioParent.classList.add('slide-portfolio-item-scrollable')
}

portfolioParentScroll()


function navbarBtn() {
  document.querySelector('.navbar-btn').addEventListener('click', function() {
    document.querySelector('.navbar_social').classList.toggle('navbar_social-active')
  })
}

navbarBtn()



function circleSVG() {
  const num = document.querySelectorAll('.svg > svg').length; // Число картинок
  // const wrap = document.querySelector('.svg').offsetWidth; // Размер "холста" для расположения картинок
  const wrap = 0; // Размер "холста" для расположения картинок
  const radius = 225; // Радиус нашего круга
  if (window.innerWidth > 575) {
    for (i=0;i<num; i++){
      let f = 2 / num * i * Math.PI;  // Рассчитываем угол каждой картинки в радианах
      let left = wrap + radius * Math.sin(f) + 'px';
      let top = wrap + radius * Math.cos(f) + 'px';
      document.querySelectorAll('.svg > svg')[i].style.top = top
      document.querySelectorAll('.svg > svg')[i].style.left = left
    }
  } 
  else {
    for (i=0;i<num; i++){
      document.querySelectorAll('.svg > svg')[i].style.top = 0
      document.querySelectorAll('.svg > svg')[i].style.left = 0
    }
  }
};
window.onload = circleSVG
window.onresize = circleSVG