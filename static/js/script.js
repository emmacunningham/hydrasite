//Video launching

var userAgent = navigator.userAgent.toLowerCase(); 
$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()); 

// Is this a version of Chrome?
if($.browser.chrome){
  userAgent = userAgent.substring(userAgent.indexOf('chrome/') +7);
  userAgent = userAgent.substring(0,userAgent.indexOf('.'));
  $.browser.version = userAgent;
  $.browser.safari = false;
  $(window).resize(function() {
    $('#bg_video').hide(0);
    $('#bg_video').show(0);
  });
}

var video = $('#bg_vid').get(0);
video.addEventListener('loadstart',loading,false);		
video.addEventListener('canplaythrough',loaded,false);		

function loading(e) {
  if(!e) { e = window.event; }
  $('#spinner').show();
  $('#bg_video').css('background-color', '#9e9e9e');
}

function loaded(e) {
  if(!e) { e = window.event; }
  $('#spinner').hide();
}




var myLoader = html5Preloader();
myLoader.addFiles('bg_vid*:/static/img/bg.webm||/static/img/bg2.mp4||/static/img/bg2.swf||/static/img/bg_fallback.jpg');

var video =  document.getElementById('bg_vid');
var src;

$('#bg_video').bind('contextmenu', function() 
{
  return false;
});

var userAgent = navigator.userAgent.toLowerCase(); 
$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()); 

if($.browser.chrome){
  userAgent = userAgent.substring(userAgent.indexOf('chrome/') +7);
  userAgent = userAgent.substring(0,userAgent.indexOf('.'));
  $.browser.version = userAgent;
  $.browser.safari = false;
  src = 'static/img/bg.webm';
}

if ($.browser.mozilla) {
  src = 'static/img/bg.webm';
}

if ( $.browser.safari ) {
  src = 'static/img/bg2.mp4';      
}

if ( $.browser.msie ) {
  src = 'static/img/bg2.swf';
}


video.src = src;

video.play();

video.addEventListener("ended", function() {
  if (video.ended = 'true') {
    video.currentTime = 10.03;
    video.play();
  }
  }, false);

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

  $(function() {
    $('#aaboutactivator').click(function(){
      $('#aboutoverlay').fadeIn('fast',function(){
        $('#mobilemain').hide(0);
        $('#aboutbox').animate({'top':'0px'},0);
        $('#mobileboxclose').show(0);
      });
    });
    $('#mobileboxclose').click(function(){
      $('#aboutbox').animate({'top':'-200%'},0,function(){
        $('#aboutoverlay').fadeOut('fast');
        $('#mobilemain').show(0);
        $('#mobileboxclose').hide(0);

      });
    });

  });

  $(function() {
    $('#signup,#newsletterboxclose,#boxclose,#thanksclose').mouseover(function(){
      $(this).css("opacity","1.0");
    });
    $('#signup,#newsletterboxclose,#boxclose,#thanksclose').mouseleave(function(){
      $(this).css("opacity",".5");
    });
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { 
      $('#aboutbox').animate({'top':'-200%'},0,function(){
        $('#aboutoverlay').fadeOut('fast');
        $('#footer').show(0);
        $('#mobilemain').show(0);
      });
      $('#newsletterbox').animate({'top':'-200%'},500,function(){
        $('#newsletteroverlay').fadeOut(0);
        $('#newsletterboxclose,#newmobileboxclose,#signup').fadeOut(0);
      });
      $('#thanksbox').animate({'top':'-200%'},0,function(){
        $('#thanksoverlay').hide(0);
        $('#thanksclose').hide(0);
        $('#mobilethanksclose,#signup').hide(0);
      });			
    }   
  });

  $(function() {
    $('#newsletteractivator,#nnewsletteractivator').click(function(){
      $('#newsletteroverlay').animate({'top':'0px'},0,function(){
        $('#newsletterbox').animate({'top':'0px'},200);
        $('#id_firstname').focus();
        $('#newsletterboxclose').show(0);
        $('#newmobileboxclose').show(0);
        $('#signup').show(0);
      });
    });
    $('#newsletterboxclose,#newmobileboxclose').click(function(){
      $('#newsletterbox').animate({'top':'-200%'},500,function(){
        $('#newsletteroverlay').fadeOut(0);
        $('#newsletterboxclose,#newmobileboxclose,#signup').fadeOut(0);
      });
    });
    $('#signup').click(function(){
       $('#newsletterbox').fadeOut(300,function(){
       $('#newsletteroverlay').fadeOut(0);
       $('#newsletterboxclose,#newmobileboxclose').fadeOut(0);
       });			
       $('#thanksoverlay').fadeIn(400,function(){
       $('#thanksbox').animate({'top':'0px'},0);
       $('#thanksclose').animate({'top':'50px'},0);
       $('#mobilethanksclose').show(0);
       });
       $('#thanksclose,#mobilethanksclose').click(function(){
       $('#thanksbox').animate({'top':'-200%'},0,function(){
       $('#thanksoverlay').hide(0);
       $('#thanksclose').hide(0);
       $('#mobilethanksclose,#signup').hide(0);
       });
       });
    });
  });

  $(function() {
    $('#id_firstname').focus(function(){
      $(this).css("border-bottom", "thin solid #ffffff")
    });
    $('#id_firstname').focusout(function(){
      $(this).css("border-bottom", "none")
    });
    $('#id_email').focus(function(){
      $(this).css("border-bottom", "thin solid #ffffff")
    });
    $('#id_email').focusout(function(){
      $(this).css("border-bottom", "none")
    });
  });

  $("#id_firstname").keyup(function () {
    var nameval = $(this).val();
    }).keyup();

    $("#id_firstname").click(function() {
      var nameval = $("#id_firstname").val();
      if (nameval == 'YOUR NAME') {
        $("#id_firstname").val('');
      }
    });

    $("#id_firstname").focusout(function() {
      var nameval = $("#id_firstname").val();
      if (nameval == '') {
        $("#id_firstname").val('YOUR NAME');
      }
    });

    $("#id_email").keyup(function () {
      var emailval = $(this).val();
      }).keyup();

      $("#id_email").click(function() {
        var emailval = $("#id_email").val();
        if (emailval == 'YOUR EMAIL') {
          $("#id_email").val('');
        }
      });

      $("#id_email").focusout(function() {
        var emailval = $("#id_email").val();
        if (emailval == '') {
          $("#id_email").val('YOUR EMAIL');
        }
      });


      function validateEmail()
      {      
        event.preventDefault();
        
        var x=document.forms["myForm"]["email"].value;
        var atpos=x.indexOf("@");
        var dotpos=x.lastIndexOf(".");
        
        var str = $.trim($('#id_firstname').val());	
        
        if ($('#id_firstname').val() == 'YOUR NAME') {
          $('#id_firstname').css("border-bottom","1px solid red");
          $('#nameerror').show();
          return false;
        }
        if (str == '') {
          $('#id_firstname').css("border-bottom","1px solid red");
          $('#nameerror').show();
          return false;
        }
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
        {
          $('#id_email').css("border-bottom","1px solid red");
          $('#emailerror').show();
          return false;
        }

        else
        {
          var name = $("#id_firstname").val();
          var email = $("#id_email").val();

          var data = { name:name, email:email, csrfmiddlewaretoken:csrf };
          var args = { type:"POST", url:"/", data:data };

          var request = $.ajax(args);
          
          request.done(function(){
          });
        }
      }
