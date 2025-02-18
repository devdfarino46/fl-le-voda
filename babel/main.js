const Ui = {
  headerInit: function () {
    document.querySelectorAll('.header').forEach(function (header) {
      const menuBtn = header.querySelector('.header__menu-btn');
      const menu = document.querySelector('.menu');
      const subHeaderPadding = document.querySelector('.sub-header-padding');

      const setSubHeaderPadding = function () {
        if (subHeaderPadding && header) {
          const headerHeight = header.offsetHeight;
          subHeaderPadding.style.paddingTop = `${headerHeight}px`;
        }
      }

      window.addEventListener('scroll', function(ev) {
        if (window.scrollY > 0) {
          header.classList.add('--scrolled');
        } else {
          header.classList.remove('--scrolled');
        }
      });

      setSubHeaderPadding();
      window.addEventListener('resize', setSubHeaderPadding);

      if (menuBtn) {
        menuBtn.addEventListener('click', function () {
          document.body.classList.toggle('--menu-opened');
        });
      }

      if (menu) {
        let listener = SwipeListener(menu);

        document.addEventListener('click', function (e) {
          if (
            !e.target.closest('.menu') &&
            document.body.classList.contains('--menu-opened') &&
            !e.target.closest('.header__menu-btn')
          ) {
            document.body.classList.remove('--menu-opened');
          }
        });

        menu.addEventListener('swipe', function (e) {
          if (
            document.body.classList.contains('--menu-opened') &&
            e.detail.directions.left
          ) {
            document.body.classList.remove('--menu-opened');
          }
        });
      }
    });
  },

  sliderCertifsInit: function () {
    document.querySelectorAll('.slider-certifs').forEach(function (sliderCertifs) {
      const slider = sliderCertifs.querySelector('.swiper');
      const btnPrev = sliderCertifs.querySelector('.slider-certifs__btn-prev');
      const btnNext = sliderCertifs.querySelector('.slider-certifs__btn-next');
      const num = sliderCertifs.querySelector('.slider-certifs__num');
      
      const swiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
          nextEl: btnNext,
          prevEl: btnPrev,
        },
        on: {
          init: function () {
            num.innerHTML = `<b>${this.activeIndex + 1}</b> / ${this.slides.length}`;
          },
          slideChange: function () {
            num.innerHTML = `<b>${this.activeIndex + 1}</b> / ${this.slides.length}`;
          }
        }
      });
    });
  },

  typesInit: function () {
    document.querySelectorAll('.types').forEach(function (types) {
      const list = types.querySelector('.types__list');
      const litems = list.querySelectorAll('.types__litem');

      litems.forEach(function (litem, index) {
        const label = litem.querySelector('.types__litem-label');
        const dropdown = litem.querySelector('.types__litem-dropdown');
        const dropdownWrapper = litem.querySelector('.types__litem-dropdown-wrapper');

        label.addEventListener('click', function () {

          if (!litem.classList.contains('--opened')) {
            dropdown.style.maxHeight = dropdownWrapper.scrollHeight + 'px';
          } else {
            dropdown.style.maxHeight = '0px';
          }
          litem.classList.toggle('--opened');
        });
      });
    });
  },

  init: function () {
    this.headerInit();
    this.sliderCertifsInit();
    this.typesInit();
  }
}

Ui.init();