$('.themeChange').on('click', function() {

// SHOWS WHAT 'THIS' IS IN REFERENCE TO
console.log("---> Just click THIS elemnet with class themChange: \n", this)

  if ($(this).hasClass('regular')) {
    $('#theme').attr('href', 'css/blank.css')
  }
  else if ($(this).hasClass('blue')) {
    $('#theme').attr('href', 'css/blue.css')
  }
  else if ($(this).hasClass('dark')) {
    $('#theme').attr('href', 'css/dark.css')
  }

});
