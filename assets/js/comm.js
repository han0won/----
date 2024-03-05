   
    // hotels
    var swiper = new Swiper(".hotelSwiper", {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
          },
    });

    // // instagram
    var swiper = new Swiper(".instaSwiper", {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        slidesPerView: 4,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
