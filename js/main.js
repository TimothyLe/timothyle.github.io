/*
function main(){
  $('.skillset').hide();
  $('.projects').hide();
  $('.projects-button').on('click', function(){
   // $(this).next().toggle();
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
    $(this).next().slideToggle(400);
  });
  
  $('.skillset').fadeIn(400);
}
$(document).ready(main);
*/

$('.btn').on('click', function(){
  $(this).toggleClass('active');
});
