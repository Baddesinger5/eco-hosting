// scroll to top
var top_show = 550; // В каком положении полосы прокрутки начинать показ кнопки "Наверх" 
var delay = 1000; // Задержка прокрутки 
$(document).ready(function() {
 $(window).scroll(function () { // При прокрутке попадаем в эту функцию /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
 if ($(this).scrollTop() > top_show) $('#top').fadeIn();
 else $('#top').fadeOut(); });
 $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию /* Плавная прокрутка наверх */ 
$('body, html').animate({ 
scrollTop: 0 
}, delay); 
}); 
});



// scroll do divs

$(function() {   /*для загрузки файлов эта запись*/
    $("[data-scroll]").on("click", function(event){   /*указание условия действия по клику, при клике функция*/
        event.preventDefault();  /*отменение стандартного поведения ссылок*/
        blockId = $(this).data('scroll'); /*переменная с обращением через this, затем получаем дата атрибут и в () его название*/
               
        blockOffset = $(blockId).offset().top; /* смещение блока, переменная выше, метод, и откуда мерить (топ)*/
        
        $("html, body").animate({  /* анимация для html and body*/
            scrollTop: blockOffset - 30   /*откуда скрол и отступ сверху 50 пискелей*/
        }, 700);    /*время прокрутки*/
    });
});


//hamburger 
$(function(){
    $('.burger').on('click', function(){
      $('.navigation').fadeToggle(200, function(){
        if($(this).css('display') === 'none'){
       
    }
  });
  });
  });

  //modal 
  var modal = $('.modal');
  $('.show-modal').click(function(event) {
      event.preventDefault();
      modal.fadeIn();
  });

  $('.close-modal').click(function() {
  modal.fadeOut();
  });

  //button I agree
  $('.agree').click(function() {
    modal.fadeOut();
    });