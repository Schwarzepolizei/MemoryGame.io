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