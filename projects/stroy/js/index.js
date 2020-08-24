//swiper 
var swiperPage = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
  preloadImages: false,
  lazy: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiperPortfolio = new Swiper('.portfolio_swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop:true,
  keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
  navigation: {
      nextEl: '._next',
      prevEl: '._prev',
  },
});


// screens counter
var id = document.getElementById('counter_id')
var counter = document.getElementById('counter')
var social_links = document.getElementById('social_links')

function getCount(i) {
  var slides = document.querySelectorAll('div[id^="slide"');
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('swiper-slide-active')) id.innerHTML = i + 1

    if (slides[5].classList.contains('swiper-slide-active')) {
      counter.classList.add('_00332D')
      social_links.classList.add('_00332D')
    } else {
      counter.classList.remove('_00332D')
      social_links.classList.remove('_00332D')
    }

    if (slides[6].classList.contains('swiper-slide-active')) {
      counter.style.visibility = 'hidden'
      social_links.style.visibility = 'hidden'
    } else {
      counter.style.visibility = 'visible'
      social_links.style.visibility = 'visible'
    }
  }
}
window.addEventListener('wheel', getCount)
window.addEventListener('keydown', getCount)

//scroll
var anchors = document.querySelectorAll('a[href^="#slide"')
var anchorsMobile = document.querySelectorAll('a[href^="#section"')
var link = '.swiper-pagination-bullet:nth-child'
var menu = document.querySelector('.burger-menu')
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
window.onresize = scroll

// burger menu
var menu = document.querySelector('.burger-menu');
var button = document.querySelector('.burger-menu_button');
var links = document.querySelectorAll('.burger-menu_link');

button.onclick = () => menu.classList.toggle('burger-menu_active');

function burger() {
  for (let link of links) {
    link.addEventListener('click', (e) => menu.classList.remove('burger-menu_active')) 
  }
}
burger()

// spoilers 
let faqsAll = document.querySelectorAll('div.faq_items > div')

function faq() {
  for (let i = 0; i < faqsAll.length; i++) {
    for (let faq of faqsAll) faq.addEventListener('click', function toggleFaq() {
      for (faqA of faqsAll) faqA.classList.remove('faq_item-active')
      this.classList.toggle('faq_item-active')
    })
  }
}
faq()

// popup
var popupLinks = document.querySelectorAll('a[href^="#popup"')

for (let popupLink of popupLinks) {
  popupLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#popup').classList.add('popup_open');
    document.querySelector('.popup_body').style.visibility = 'visible'
    document.querySelector('.popup_body').style.opacity = 1
    return false
  })
}
let hidden = () => {
  document.querySelector('#popup').classList.remove('popup_open');
  document.querySelector('.popup_body').style.visibility = 'hidden'
  document.querySelector('.popup_body').style.opacity = 0 
}

document.querySelector('#popup_close').onclick = () => {
  hidden()
}
document.querySelector('#popup').onclick = () => {
  hidden()
}