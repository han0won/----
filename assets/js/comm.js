AOS.init();

// header
const bar = document.querySelector('#header .gnb-bar')
const span1 = document.querySelector('#header .span1')
const span2 = document.querySelector('#header .span2')
const span3 = document.querySelector('#header .span3')
const nav = document.querySelector('#header .depth1')
const hd = document.querySelector('#header')
const sectionIn = document.querySelector('.hotel-list')

bar.addEventListener('click', function() {
    span1.classList.toggle('click');
    span2.classList.toggle('click');
    span3.classList.toggle('click');
    nav.classList.toggle('click');
    hd.classList.toggle('click');
})

window.addEventListener('scroll', function() {
    if (window.pageYOffset > sectionIn.offsetTop) {
        hd.classList.add('bg-on');
    } else {
        hd.classList.remove('bg-on');
    }
});


// hotel-list
document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX - 45; 
    let mouseY = e.pageY - 40; 
  
    let listCursor = document.querySelector('.list-cursor');
    listCursor.style.left = mouseX + 'px';
    listCursor.style.top = mouseY + 'px';
})

const hotelList = [
    {
        img: document.querySelector('.jeonju-img'),
        text: document.querySelector('.jeonju-text'),
    },
    {
        img: document.querySelector('.pohang-img'),
        text: document.querySelector('.pohang-text'),
    },
    {
        img: document.querySelector('.gyeongju-img'),
        text: document.querySelector('.gyeongju-text'),
    },
    {
        img: document.querySelector('.mokpo-img'),
        text: document.querySelector('.mokpo-text'),
    },
    {
        img: document.querySelector('.ulsan-img'),
        text: document.querySelector('.ulsan-text'),
    },
];

hotelList.forEach(props => {
    props.text.addEventListener('mouseover', () => {
        props.img.classList.add('active');
    })
    props.text.addEventListener('mouseleave', () => {
        props.img.classList.remove('active');
    })
})


// hotels
var swiper = new Swiper(".hotelSwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});


// instagram
var swiper = new Swiper(".instaSwiper", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    breakpoints: {
        476: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        801: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1201: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    }
});

// footer
const siteBox = document.querySelector('footer .title-box')
const siteList = document.querySelector('footer ul')

siteBox.addEventListener('click', function() {
    siteList.classList.toggle('on');
})
