const Ui = {
  headerInit: function () {
    document.querySelectorAll('.header').forEach(function (header) {
      const menuBtn = header.querySelector('.header__menu-btn');

      if (menuBtn) {
        menuBtn.addEventListener('click', function () {
          document.body.classList.toggle('--menu-opened');
        });
      }
    });
  },

  init: function () {
    this.headerInit();
  }
}

Ui.init();