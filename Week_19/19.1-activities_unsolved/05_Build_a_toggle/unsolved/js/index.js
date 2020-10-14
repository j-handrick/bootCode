// Add Event Listener Below
$('#toggle').on('click', function(){
  $("ul").slideToggle();
});

$('img').on('click', function(){
  $('img').css('transform', 'rotate(180deg)')
})
