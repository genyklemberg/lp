/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});


// Mailgun.js
var mailgunURL;

mailgunURL = window.location.protocol + "//" + window.location.hostname + '/ajax/mailgun.php';

$('#mailgun, #form').on('submit',function(e) {
  e.preventDefault();

  $('#mailgun *').fadeOut(200);
  $('#mailgun').prepend('Your submission is being processed...');
  $('#form *').fadeOut(200);
  $('#form').prepend('Your submission is being processed...');


  $.ajax({
    type     : 'POST',
    cache    : false,
    url      : mailgunURL,
    data     : $(this).serialize(),
    success  : function(data) {
      responseSuccess(data);
      console.log(data);
    },
    error  : function(data) {
      console.log('Silent failure.');
    }
  });

  return false;

});

function responseSuccess(data) {

  data = JSON.parse(data);

  if(data.status === 'success') {
    $('#mailgun').html("Awesome, you're on the list and we'll be in touch soon!.");
    $('#form').html("Awesome, you're on the list and we'll be in touch soon!.");
  } else {
    $('#mailgun').html('Submission failed, please contact directly.');
    $('#form').html('Submission failed, please contact directly.');
  }

}