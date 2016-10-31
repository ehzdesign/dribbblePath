$(document).ready(function() {
  //set token
  $.jribbble.setToken('3df37145202e4cc051753798e79be314d585918ed4d22a1820b5faaa87dfbb67');

  $.jribbble.buckets(422072).shots({'per_page': 100}).then(function(data) {
    // Do cool stuff with response
      console.log(data);
    $.each(data, function(index, el) {
        makeShot(el);
    });
  });

});


function makeShot(data) {
  var shot = $('<div>');
  if(data.animated && data.images.hidpi){
    shot.css('background-image', 'url('+ data.images.hidpi +')');
  }else{
    shot.css('background-image', 'url('+ data.images.normal +')');
  }
  shot.addClass('shotImage');
  var shotLink = $('<a>');
  $(shotLink).attr({
    href: data.html_url,
    target: '_blank'
  });
  shotLink.addClass('shot');
  shot.appendTo(shotLink);
  shotLink.appendTo($('.shots'));
};
