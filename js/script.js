document.addEventListener("DOMContentLoaded", function () {

  $('ul.tabs').on('click', 'li.tabs__item:not(.tabs__item--active)', function() {
      $('ul.tabs .tabs__item--active').removeClass('tabs__item--active');
      
      $('.tabs__content-pane.active').removeClass('active');
      let tabsPane = $(this).attr('data-tabs');
      $(tabsPane).addClass('active');

      $(this).addClass('tabs__item--active');
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
        size: 197,
        margin: 0,
        logo_url: 'https://qr.wtrg.introvert.bz/example/logos/wa1.svg',
        logo_width: 58,
        logo_height: 58,
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

  // form select

  $.find('.form__select').map((value) => {
    $(value).find('.form__select-placeholder').html(
      $(value).find('.form__select-options .form__select-selected').html()
    );
    $(value).find('input').val(
      $(value).find('.form__select-options .form__select-selected').data('value')
    );

    $(value).find('.form__select-placeholder').click(function(){
      if(!$(value).hasClass('form__select--disabled')){
        $(value).addClass('form__select--active');
      }
    });
    $(value).find('.form__select-options li').click(function(){
      if(!$(value).hasClass('form__select--disabled')){
        $(value).find('.form__select-options li.form__select-selected').removeClass('form__select-selected');
        $(this).addClass('form__select-selected');
        $(value).find('.form__select-placeholder').html($(this).html());
        $(value).find('input').val($(this).data('value'));
        $(value).removeClass('form__select--active');
      }
    });
  });
});