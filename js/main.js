const menuBtn = document.querySelector('.menu__btn')
const menuMobile = document.querySelector('.header__menu-list')

menuBtn.addEventListener('click', (e) => {
   menuMobile.classList.toggle('menu--open')
})


const swiper = new Swiper('.feedback__slider', {
   loop: true,

   pagination: {
      el: '.swiper-pagination',
   },

})


const swiperTwo = new Swiper('.certificates__slider', {
   loop: true,

   slidesPerView: 'auto',
   spaceBetween: 20,

   pagination: {
      el: '.swiper-pagination',
   },

   breakpoints: {
      360: {
         slidesPerView: 1,
         spaceBetween: 0
      },
      480: {
         slidesPerView: 2,
         spaceBetween: 10
      },
      768: {
         slidesPerView: 2.5,
         spaceBetween: 10
      }
   }
})


const accardeon = document.querySelector('.accardeon')
const accardeonTitles = document.querySelectorAll('.accardeon__title')

accardeonTitles.forEach.call(accardeonTitles, function(accardeonTitle) {
   accardeonTitle.addEventListener('click', () => {
      const currentText = accardeonTitle.parentElement.querySelector('.accardeon__text');
      
      accardeonTitle.classList.toggle('accardeon__title-active')
      currentText.classList.toggle('accardeon__text-visible')

      if (currentText.classList.contains('accardeon__text-visible')) {
         currentText.style.maxHeight = currentText.scrollHeight + 'px'
      } else {
         currentText.style.maxHeight = null
      }
   })
})