"use strict";

var Ui = {
  headerInit: function headerInit() {
    document.querySelectorAll('.header').forEach(function (header) {
      var menuBtn = header.querySelector('.header__menu-btn');
      var menu = document.querySelector('.menu');
      var subHeaderPadding = document.querySelector('.sub-header-padding');
      var setSubHeaderPadding = function setSubHeaderPadding() {
        if (subHeaderPadding && header) {
          var headerHeight = header.offsetHeight;
          subHeaderPadding.style.paddingTop = "".concat(headerHeight, "px");
        }
      };
      window.addEventListener('scroll', function (ev) {
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
        var listener = SwipeListener(menu);
        document.addEventListener('click', function (e) {
          if (!e.target.closest('.menu') && document.body.classList.contains('--menu-opened') && !e.target.closest('.header__menu-btn')) {
            document.body.classList.remove('--menu-opened');
          }
        });
        menu.addEventListener('swipe', function (e) {
          if (document.body.classList.contains('--menu-opened') && e.detail.directions.left) {
            document.body.classList.remove('--menu-opened');
          }
        });
      }
    });
  },
  sliderCertifsInit: function sliderCertifsInit() {
    document.querySelectorAll('.slider-certifs').forEach(function (sliderCertifs) {
      var slider = sliderCertifs.querySelector('.swiper');
      var btnPrev = sliderCertifs.querySelector('.slider-certifs__btn-prev');
      var btnNext = sliderCertifs.querySelector('.slider-certifs__btn-next');
      var num = sliderCertifs.querySelector('.slider-certifs__num');
      var swiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
          nextEl: btnNext,
          prevEl: btnPrev
        },
        on: {
          init: function init() {
            num.innerHTML = "<b>".concat(this.activeIndex + 1, "</b> / ").concat(this.slides.length);
          },
          slideChange: function slideChange() {
            num.innerHTML = "<b>".concat(this.activeIndex + 1, "</b> / ").concat(this.slides.length);
          }
        }
      });
    });
  },
  typesInit: function typesInit() {
    document.querySelectorAll('.types').forEach(function (types) {
      var list = types.querySelector('.types__list');
      var litems = list.querySelectorAll('.types__litem');
      litems.forEach(function (litem, index) {
        var label = litem.querySelector('.types__litem-label');
        var dropdown = litem.querySelector('.types__litem-dropdown');
        var dropdownWrapper = litem.querySelector('.types__litem-dropdown-wrapper');
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
  init: function init() {
    this.headerInit();
    this.sliderCertifsInit();
    this.typesInit();
  }
};
Ui.init();
//# sourceMappingURL=main.js.map
