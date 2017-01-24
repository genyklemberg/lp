var mailgunURL;

mailgunURL = window.location.protocol + "//" + window.location.hostname + '/ajax/mailgun.php';

$('#mailgun').on('submit',function(e) {
  e.preventDefault();

  $('#mailgun *').fadeOut(200);
  $('#mailgun').prepend('Your submission is being processed...');

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
    countUserFunc();
    $('#mailgun').html("Awesome, you're on the list and we'll be in touch soon!.");
  } else {
    $('#mailgun').html('Submission failed, please contact directly.');
  }

}