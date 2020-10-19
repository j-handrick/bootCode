// PRELOADER
function fade() {
  $('.preloader').fadeOut('slow')
};

setTimeout(fade, 3000);

//menu


  $('.navButton').on('click', function(){
    if($('.navButton').text() == '✖'){
      $('.navButton').text('☰');
    } else {
      $('.navButton').text('✖')
    }
    $('.navList').toggle('slow');
  });
