//19.3.01 Fancy Dropdown shit
$('.toggle').on('click', function(){
  $(this).find('.toggleContainer').toggleClass('active');
  $(this).siblings('.toggle').find('.toggleContainer').removeClass('active');
});

//19.3.02 Fill page with menu
$('.searchButton').on('click', function(){
  $('.searchButton').toggleClass('active');
  if ($('.searchButton').hasClass('active')) {
    $('.searchBar').css('height', '100vh');
    $('#searchForm').css('opacity','1');
    $('.searchIcon').removeClass('fa-search').addClass('fa-times');
  } else {
    $('.searchBar').css('height', '0vh');
    $('#searchForm').css('opacity','0');
    $('.searchIcon').removeClass('fa-times').addClass('fa-search');
  }
});

//19.3.03 preloader, it WORKS!!!

function fade() {
  $('.preloader').fadeOut('slow')
};

setTimeout(fade, 3000);
