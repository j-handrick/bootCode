$('.theme--change').on('click', function() {

// SHOWS WHAT 'THIS' IS IN REFERENCE TO
console.log("---> Just click THIS elemnet with class themChange: \n", this)

  if ($(this).hasClass('dark')) {
    $('#theme').attr('href', 'css/master.css')
  }
  else if ($(this).hasClass('light')) {
    $('#theme').attr('href', 'css/master2.css')
  }

});
