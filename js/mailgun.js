var mailgunURL;

mailgunURL = window.location.protocol + "//" + window.location.hostname + ':82/lp/ajax/mailgun.php';

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

// $('#form').on('submit',function(e) {
//   e.preventDefault();

//   $('#mailgun *').fadeOut(200);
//   $('#mailgun').prepend('Your submission is being processed...');
//   $('#form *').fadeOut(200);
//   $('#form').prepend('Your submission is being processed...');


//   $.ajax({
//     type     : 'POST',
//     cache    : false,
//     url      : mailgunURL,
//     data     : $(this).serialize(),
//     success  : function(data) {
//       responseSuccess(data);
//       console.log(data);
//     },
//     error  : function(data) {
//       console.log('Silent failure.');
//     }
//   });

//   return false;

// });