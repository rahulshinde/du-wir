Site = {};

$(document).ready(function(){
  $('.link').on('click', Site.openSide);
  $('#close').on('click', Site.closeSide);
});

Site.openSide = function(){
  $('.project_list').addClass('hide');
  $('#slide_container').addClass('show');
  setTimeout(function(){
    $('#close').fadeToggle();
  }, 500);
}

Site.closeSide = function(){
  $('.project_list').removeClass('hide');
  $('#slide_container').removeClass('show');
  $('#close').fadeToggle();
}