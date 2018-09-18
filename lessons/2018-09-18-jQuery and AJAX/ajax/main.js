$(document).ready(function(){
  // $('#result').load('test.html', console.log('success!!'))
  $.get('test.html', function(data){
    $('#result').html(data);
  })
})

  $.getJSON('users.json', function(data) {
    $.each(data, function(index, user){
      $('ul#user-emails').append(`<li> ${user.email} </li>`)
  })

    $.ajax({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
      dataType: 'json'}).done(function(data){
      console.log(data);
      $.map(data, function(blogpost, index){
        $('#blogs').append(`<h2>${blogpost.title}</h2><p>${blogpost.body}</p>.`)
      })
    })
});
