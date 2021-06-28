document.addEventListener("DOMContentLoaded", function () {

  $('ul.tabs').on('click', 'li>button:not(.tabs__link--active)', function() {
      $('ul.tabs .tabs__link--active').removeClass('tabs__link--active');
      
      $('.tabs__content .tabs__content-pane.active').removeClass('active');
      let tabsPane = $(this).attr('data-tabs');
      $(tabsPane).addClass('active');

      $(this).addClass('tabs__link--active');
  });

  function textArea() {
    const textArea = document.querySelectorAll('[data-autoresize]');
  
    textArea.forEach(item => {
      let textAreaH = item.offsetHeight;
  
      item.addEventListener('input', event => {
        let $this = event.target;
  
        $this.style.height = textAreaH + 'px';
        $this.style.height = $this.scrollHeight + 'px';
      });
    });
  }

  textArea();

  const selectArea = document.querySelectorAll('.js-form-select-icon');
  selectArea.forEach(item => {
    item.style.backgroundImage = `url( ${item.querySelector('select').options[item.querySelector('select').options.selectedIndex].dataset.img} )`;
    item.style.backgroundRepeat = "no-repeat";
    item.style.backgroundPosition = "15px center";
    item.querySelector('select').style.textIndent = '28px';
    item.querySelector('select').addEventListener('change', function(e) {
      item.style.backgroundImage =`url( ${e.target.options[e.target.selectedIndex].dataset.img} )`;
    })
  })


  const togglePassword = document.querySelectorAll('.js-password-visibility');
  togglePassword.forEach(item =>{
    item.addEventListener('click', function(){
      let passwordInput = item.parentNode.parentNode.querySelector('.js-password-input');

      if(passwordInput.getAttribute('type') == 'password'){
        item.querySelector('img').setAttribute('src', 'img/password-eye-crossed.svg')
        passwordInput.setAttribute('type', 'text');
      } else if(passwordInput.getAttribute('type') == 'text') {
        item.querySelector('img').setAttribute('src', 'img/password-eye.svg')
        passwordInput.setAttribute('type', 'password');
      }
    });
    
  });

    $.ajax({
      url: 'https://qr.wtrg.introvert.bz/generate.php',
      data: {
          text: "https://wa.me/74996478531&text=Регистрация",
          size: 176,
          margin: 0,
          fg_color: '#000000',
          bg_color: '#ffffff',
          bg_opacity: 127,
          corner_squares_color: '#000000',
          corner_frames_color: '#000000',
          logo_url: 'https://qr.wtrg.introvert.bz/example/logos/wa1.svg',
          logo_width: 58,
          logo_height: 58,
          logo_color: '#000000',
          export: 'svg'
      },
      success: function (svg) {
          const qrCode = $('.js-qcode');
          qrCode.append($('svg', svg));
      },
      dataType: "xml",
  });

  const openWhatsappWebButton = $('.js-qcode-open-wa-button');
  openWhatsappWebButton.click(function (event) {
      window.open('https://web.whatsapp.com/send?phone=74996478531&text=%D0%A0%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F');
  });






});