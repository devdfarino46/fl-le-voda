const Ui = {
  headerInit: function () {
    document.querySelectorAll('.header').forEach(function (header) {
      const menuBtn = header.querySelector('.header__menu-btn');
      const menu = document.querySelector('.menu');

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

  init: function () {
    this.headerInit();
  }
}

Ui.init();