$(document).ready(function () {
  $('form').on('submit', function (e) {
      e.preventDefault();
      const newTask = $('#task').val().trim();
      
      if (newTask !== '') {
          $('<li></li>').text(newTask).appendTo('ul');
          $('#task').val('');
      }
  });

  $('ul').on('click', 'li', function () {
      $(this).css('text-decoration', 'line-through red');
  });
});
