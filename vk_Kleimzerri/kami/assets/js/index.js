const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    Keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown:true,
    },

    slidesPerView: 3,
    
    spaceBetween: 30,

    freeMode:true,

    autoplay: {
        delay:3000,
        disableoninteraction: false,
    },

    speed: 900,

    breakpoints: {
        320: {
            slidesPerView:1,
        },
        480: {
            slidesPerView:2,
        },
        992: {
            slidesPerView:3,
        },
    }
  });

  const swiperEmployees = new Swiper('.swiper-employees', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    Keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown:true,
    },

    slidesPerView: 4,
    
    spaceBetween: 30,

    freeMode:true,

    autoplay: {
        delay:3000,
        disableoninteraction:false,
    },

    speed: 900,

    breakpoints: {
        320: {
            slidesPerView:1,
        },
        480: {
            slidesPerView:2,
        },
        992: {
            slidesPerView:4,
        },
    }
  });

  const swiperReviews = new Swiper('.swiper-reviews', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    Keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown:true,
    },

    slidesPerView: 3,
    
    spaceBetween: 30,

    freeMode:true,

    autoplay: {
        delay:3000,
        disableoninteraction:false,
    },

    speed: 900,

    breakpoints: {
        320: {
            slidesPerView:1,
        },
        480: {
            slidesPerView:2,
        },
        992: {
            slidesPerView:3,
        },
    }
  });

  