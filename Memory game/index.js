// $(document).ready(function () {
//     $('.back').css({
//         transform: "rotateY(360deg)"
//     });
//     $('.face').css({
//         transform: "rotateY(180deg)"
//     });

//     $('.btn').click(function () {
//         $('.back').css({
//             transform: "rotateY(180deg)"
//         });
//         $('.face').css({
//             transform: "rotateY(360deg)"
//         });
//     });

//     let openedCard = null;

//     $('.card').on('click', function() {
//         let $back = $(this).find('.back img');
//         if (openedCard) {
//           var $openedBack = $(openedCard).find('.back img');
//           if ($back.attr('src') === $openedBack.attr('src')) {
//             $(this).find('.back').addClass('matched');
//             $(openedCard).find('.back').addClass('matched');
//             openedCard = null;
//           } else {
//             setTimeout(function() {
//               $(this).find('.back').css({ transform: 'rotateY(180deg)' });
//               $(this).find('.face').css({ transform: 'rotateY(360deg)' });
//               $(openedCard).find('.back').css({ transform: 'rotateY(180deg)' });
//               $(openedCard).find('.face').css({ transform: 'rotateY(360deg)' });
//               openedCard = null;
//             }.bind(this), 500);
//           }
//         } else {
//           $(this).find('.back').css({ transform: 'rotateY(0deg)' });
//           $(this).find('.face').css({ transform: 'rotateY(180deg)' });
//           openedCard = this;
//         }
//       });
      
      
      
      
      
// });

// $(document).ready(function() {

//     // Создаем массив для хранения открытых карточек
//     var openedCards = [];
  
//     // Функция для закрытия всех открытых карточек
//     function closeOpenedCards() {
//       for (var i = 0; i < openedCards.length; i++) {
//         openedCards[i].find('.back').css({
//           transform: "rotateY(180deg)"
//         });
//         openedCards[i].find('.face').css({
//           transform: "rotateY(360deg)"
//         });
//       }
//       openedCards = [];
//     }
  
//     // Функция для проверки содержимого открытых карточек
//     function checkOpenedCards() {
//       if (openedCards.length === 2) {
//         var card1 = openedCards[0];
//         var card2 = openedCards[1];
//         var img1 = card1.find('.back img').attr('src');
//         var img2 = card2.find('.back img').attr('src');
//         if (img1 === img2) {
//           openedCards = [];
//         } else {
//           setTimeout(function() {
//             closeOpenedCards();
//           }, 1000);
//         }
//       }
//     }
  
//     // Обработчик клика по карточке
//     $('.card').click(function() {
//       // Если карточка уже открыта, то ничего не делаем
//       if ($(this).hasClass('opened')) {
//         return;
//       }
//       // Открываем карточку
//       $(this).find('.back').css({
//         transform: "rotateY(360deg)"
//       });
//       $(this).find('.face').css({
//         transform: "rotateY(180deg)"
//       });
//       $(this).addClass('opened');
//       // Добавляем карточку в массив открытых карточек
//       openedCards.push($(this));
//       // Проверяем содержимое открытых карточек
//       checkOpenedCards();
//     });
  
//   });

$(document).ready(function () {
    $('.back').css({
        transform: "rotateY(360deg)"
    });
    $('.face').css({
        transform: "rotateY(180deg)"
    });

    $('.btn').click(function () {
        $('.back').css({
            transform: "rotateY(180deg)"
        });
        $('.face').css({
            transform: "rotateY(360deg)"
        });
    });

    function checkCount () {
      if (count != 5) {
        return
      } else {
        $('.modal').fadeIn();
        $('.close').click(function () {
        $('.modal').fadeOut();
        $('.back').css({
          transform: "rotateY(180deg)"
        });
        $('.face').css({
          transform: "rotateY(360deg)"
        });
      })
        
      
      }
    }

    let openedCards = [];
    let count = 0

    function closeOpenedCards() {
      for (let i = 0; i < openedCards.length; i++) {
        openedCards[i].find('.back').css({
          transform: "rotateY(180deg)"
        });
        openedCards[i].find('.face').css({
          transform: "rotateY(360deg)"
        });
      }
      
      openedCards = [];
    }

    function checkOpenedCards() {
    if (openedCards.length === 2) {
      let card1 = openedCards[0];
      let card2 = openedCards[1];
      let img1 = card1.find('.back img').attr('src');
      let img2 = card2.find('.back img').attr('src');
      if (img1 === img2) {
        $(card1).addClass('matched');
        $(card2).addClass('matched');
        $(card1).removeClass('opened');
        $(card2).removeClass('opened');
        count += 1
        openedCards = [];
        checkCount();
      } else {
        setTimeout(function() {
          $(card1).removeClass('opened');
          $(card2).removeClass('opened');
          closeOpenedCards();
        }, 1000);
      }
    }
  }

    $('.card').click(function () {
      if ($(this).hasClass('opened') || $(this).hasClass('matched')) {
        return
      }
      $(this).find('.back').css({
        transform: "rotateY(360deg)"
    });
      $(this).find('.face').css({
        transform: "rotateY(180deg)"
    });
      $(this).addClass('opened');
      openedCards.push($(this));
      checkOpenedCards()
      console.log($(this))
    })
  });