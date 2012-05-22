/* Author:

*/
$(function() {
	$('#aboutactivator').click(function(){
		$('#aboutoverlay').fadeIn('fast',function(){
			$('#mobilemain').hide(0);
			$('#aboutbox').animate({'top':'20%'},0);
		});
	});
	$('#boxclose').click(function(){
		$('#aboutbox').animate({'top':'-200%'},0,function(){
			$('#aboutoverlay').fadeOut('fast');
			$('#footer').show(0);
			$('#mobilemain').show(0);
		});
	});

});

var userAgent = navigator.userAgent.toLowerCase(); 
$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()); 

// Is this a version of Chrome?
if($.browser.chrome){
  userAgent = userAgent.substring(userAgent.indexOf('chrome/') +7);
  userAgent = userAgent.substring(0,userAgent.indexOf('.'));
  $.browser.version = userAgent;
  // If it is chrome then jQuery thinks it's safari so we have to tell it it isn't
  $.browser.safari = false;
}

// Is this a version of Safari?
if($.browser.safari){
  userAgent = userAgent.substring(userAgent.indexOf('safari/') +7);
  userAgent = userAgent.substring(0,userAgent.indexOf('.'));
  $.browser.version = userAgent;
}

if ($.browser.safari) {
	$('#bg_video').hide(0);
	$('#bg_video_safari').show(0);
}


$(function() {
	$('#aaboutactivator').click(function(){
		$('#aboutoverlay').fadeIn('fast',function(){
			$('#mobilemain').hide(0);
			$('#footer').hide(0);
			$('#aboutbox').animate({'top':'10%'},0);
		});
	});
	$('#boxclose').click(function(){
		$('#aboutbox').animate({'top':'-200%'},0,function(){
			$('#aboutoverlay').fadeOut('fast');
			$('#footer').show(0);
			$('#mobilemain').show(0);
		});
	});

});

$(function() {
	$('#newsletteractivator,#nnewsletteractivator').click(function(){
		$('#newsletteroverlay').fadeIn('fast',function(){
			$('#newsletterbox').animate({'top':'0px'},0);
			$('#id_firstname').focus();
			$('#newsletterboxclose').show(0);
		});
	});
	$('#newsletterboxclose').click(function(){
		$('#newsletterbox').animate({'top':'-200%'},0,function(){
			$('#newsletteroverlay').fadeOut(0);
			$('#newsletterboxclose').fadeOut(0);
		});
	});

});


$(function() {
    $('input[type=text]').click(function() {
      $(this).val('');
      });
 });

$(function() {
	var val = $(this).val()
	if (val == '') {
		$('#id_firstname').focusout(function() {
	      $('#id_firstname').val('YOUR NAME');
	      });
		$('#id_email').focusout(function() {
      	  $('#id_email').val('YOUR EMAIL');
    		  });
	}
	else {
		$('#id_firstname').focusout(function() {
	      $('#id_firstname').val() = val;
	      });
		$('#id_email').focusout(function() {
      	  $('#id_email').val() = val;
    		  });
	}
 });


function validateEmail()
{
var x=document.forms["myForm"]["email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
	$('#id_email').css("border","1px solid red");
	return false;
  }
else
	{
	var name = $("#id_firstname").val();
	var email = $("#id_email").val();
	var data = { name:name, email:email, csrfmiddlewaretoken: '{{ csrf_token }}' };
	var args = { type:"POST", url:"hydra", data:data };
	var request = $.ajax(args);
	request.done(function(){
		$('#newsletterbox').animate({'top':'-200%'},0,function(){
			$('#newsletteroverlay').hide(0);
			$('#newsletterboxclose').hide(0);
		});			
		$('#thanksoverlay').fadeIn(0,function(){
			$('#thanksbox').animate({'top':'0px'},0);
			$('#thanksclose').animate({'top':'50px'},0);
		});
		$('#thanksclose').click(function(){
			$('#thanksbox').animate({'top':'-200%'},0,function(){
				$('#thanksoverlay').hide(0);
				$('#thanksclose').hide(0);
			});
		});
	});
	return false;
	}
}

