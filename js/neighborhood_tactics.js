$(document).ready(function() {

/*
  $.ajax({
    url: url,
    dataType: 'json',
    data: data,
    success: callback
  });
*/



$.getJSON('../json/neighborhood_tactics.json', function(data) {
  var items = [];

  $.each(data, function(key, val) {
    items.push('<li id="' + key + '">' + val + '</li>');
  });


  console.log(data.environment);
/*
  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('body');
*/
});


 });