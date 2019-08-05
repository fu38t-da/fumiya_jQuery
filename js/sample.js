$(function(){
  //ボタンサイズの変更
  $('#js-click-btn').on('click',function(){
    $(this).addClass('large-btn');
  })

  //ボタンの色変更
  $('#js-hover-btn').mouseover(function(){
    $(this).addClass('opacity');
  }).mouseleave(function(){
    $(this).removeClass('opacity');
  });
  // console.log($('#js-hover-btn'));

  $('#js-show-btn').on('click',function(){
    // ミリ秒
    // slideDownも可能
    $('#js-target-element').fadeIn(2000);
  });

  $('#js-hide-btn').on('click',function(){
    $('#js-target-element').fadeOut(2000);
  });

  $('#js-add-btn').on('click',function(){
    // $(this).before('<li class="btn">ボタンの前に追加</li>');
    $(this).after('<li class="btn">ボタンの後ろに追加</li>');
  });

  //要素の前後(中)に追加
  $('#js-add-btn2').on('click', function() {
    // $(this).prepend('<li>前</li>');
    $(this).append('<li>後</li>');
  });

  $('.js-toggle').on('click', function(){
    $(this).toggleClass('on');
    $(this).siblings().slideToggle();
  })

  $('.js-hamburger').on('click', function() {
    $(this).toggleClass('on');
  });

  $('.js-scroll').on('click' ,function(){
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });

  $('.btn').on('click', function(){
    $('.modal-content').fadeIn('slow');
    $('#modal-bg').fadeIn('slow');
  })

  $('.js-modal-close').on('click', function(){
    $('.modal-content').fadeOut('slow');
    $('#modal-bg').fadeOut('slow');
  })

  

});



// jQueryは配列として情報を取得している
// （console.logで調べるとわかる）
//　親子関係を考えるとわかりやすい