var token = '?access_token=cc7973a872b286db5a1508ab807818c8ef7978f0'


$(document).ready(function() {

  $('#user').on('input', function(e) {

    e.preventDefault();

    var token = '?access_token=cc7973a872b286db5a1508ab807818c8ef7978f0'
    var user = $('#user').val()
    var url = 'https://api.github.com/users/' + user + token;
    var template = $('template').html();

    var data = $.get(url, function(data) {
      $('#container').html(Mustache.render(template, data));
    })

  });

  // $('#button').click(function(e) {

  //   e.preventDefault();

  //   var token = '?access_token=cc7973a872b286db5a1508ab807818c8ef7978f0'
  //   var user = $('#user').val()
  //   var url = 'https://api.github.com/users/' + user + token;
  //   var template = $('template').html();

  //   var data = $.get(url, function(data) {
  //     $('#container').prepend(Mustache.render(template, data));
  //   })

  // });



});