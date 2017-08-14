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

//!< ScrollTo function
      $('.scrollto').click(function() {
        var elementClicked = $(this).attr("href");
        var destination = $(elementClicked).offset().top;
        $("#main:not(:animated)").animate({ scrollTop: destination} );
        return false;
      });

      //!< Jumbotron Scroll
      var jumboHeight = $('.jumbotron').outerHeight();
      function parallax(){
        var scrolled = $(window).scrollTop();
        $('.jumbotron').css('height', (jumboHeight-scrolled) + 'px');
        $('.parallax1').css('height', (jumboHeight-scrolled) + 'px');
      }

      $(window).scroll(function(e){
        parallax();
      });

      //Target Blank replacement
      $(function() { 
        $('a[href^=http]').click( function() {  
          window.open(this.href);
          return false;
        });
      });

      //!< Facebook SDK
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '482723745132387',
          xfbml      : true,
          version    : 'v2.7'
        });
      };
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));