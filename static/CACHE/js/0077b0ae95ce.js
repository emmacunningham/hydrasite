var csrf="jm4IbKbZwFCcPJbP4uwLzi8xm4FT68MJ";window.log=function f(){log.history=log.history||[];log.history.push(arguments);if(this.console){var args=arguments,newarr;args.callee=args.callee.caller;newarr=[].slice.call(args);if(typeof console.log==='object')log.apply.call(console.log,console,newarr);else console.log.apply(console,newarr);}};(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return(window.console={});}}());var html5Preloader=(function(){var XHR=typeof XMLHttpRequest==='undefined'?function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}catch(err1){}
try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}catch(err2){}
return null;}:XMLHttpRequest,AudioElement=typeof Audio!=='undefined'?function(){return new Audio();}:function(){return document.createElement('audio');},VideoElement=typeof Video!=='undefined'?function(){return new Video();}:function(){return document.createElement('video');},ImageElement=function(){return new Image();},codecs={oga:{codec:'audio/ogg; codecs="vorbis"',media:'audio'},wav:{codec:'audio/wav; codecs="1"',media:'audio'},webma:{codec:'audio/webm; codecs="vorbis"',media:'audio'},mp3:{codec:'audio/mpeg; codecs="mp3"',media:'audio'},m4a:{codec:'audio/mp4; codecs="mp4a.40.2"',media:'audio'},ogv:{codec:'video/ogg; codecs="theora, vorbis"',media:'video'},webmv:{codec:'video/webm; codecs="vorbis, vp8"',media:'video'},m4v:{codec:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',media:'video'}},support={imageTypes:['jpg','png','jpeg','tiff','gif']},ID_PREFIX='FILE@';codecs.ogg=codecs.oga;function isIn(needle,haystack){for(var i=0;i<haystack.length;i++){if(haystack[i]===needle){return true;}}
return false;}
function map(arr,callback){if(arr.map){return arr.map(callback);}
var r=[],i;for(i=0;i<arr.length;i++){r.push(callback(arr[i]));}
return r;}
function bind(func,self){return func.bind?func.bind(self):function(){return func.apply(self,arguments);};}
function delay(callback){var args=[].slice.call(arguments,1);setTimeout(function(){callback.apply(this,args);},0);}
function EventEmitter(){var k;for(k in EventEmitter.prototype){if(EventEmitter.prototype.hasOwnProperty(k)){this[k]=EventEmitter.prototype[k];}}
this._listeners={};};EventEmitter.prototype={_listeners:null,emit:function(name,args){args=args||[];if(this._listeners[name]){for(var i=0;i<this._listeners[name].length;i++){this._listeners[name][i].apply(this,args);}}
return this;},on:function(name,listener){this._listeners[name]=this._listeners[name]||[];this._listeners[name].push(listener);return this;},off:function(name,listener){if(this._listeners[name]){if(!listener){delete this._listeners[name];return this;}
for(var i=0;i<this._listeners[name].length;i++){if(this._listeners[name][i]===listener){this._listeners[name].splice(i--,1);}}
this._listeners[name].length||delete this._listeners[name];}
return this;},once:function(name,listener){function ev(){this.off(ev);return listener.apply(this,arguments);}
return this.on(name,ev);}};function loadFile(file,callback){if(!(this instanceof loadFile)){return new loadFile(file,callback);}
var self=this,alternates=[],a,b,c,t;if(typeof file==='string'){a=file.split('*:');b=a[a[1]?1:0].split('||');self.id=a[1]?a[0]:b[0];self.alternates=alternates;for(a=0;a<b.length;a++){c=b[a].split('.');c=c[c.length-1].toLowerCase();t=codecs[c]?codecs[c].media:isIn(c,support.imageTypes)?'image':'document';if(codecs[c]&&!codecs[c].supported){continue;}
alternates.push({type:t,path:b[a]});}
alternates.length||alternates.push({type:t,path:b[a-1]});}else{delay(callback,TypeError('Invalid path'),self);return;}
function loadNext(){var file=alternates.shift();file?new loadFile[file.type](file.path,function(e,f){self.dom=f&&f.dom;if(e&&self.alternates.length){return loadNext();}
callback(e,self);}):delay(callback,Error('No viable alternatives'),null);}
loadNext();}
function MediaFile(construct){return function(filename,callback){var self=this,file=construct();function onready(){file.onload=file.onerror=null;file.removeEventListener&&file.removeEventListener('canplaythrough',onready,true);callback(null,self);}
file.addEventListener&&file.addEventListener('canplaythrough',onready,true);file.onload=onready;file.onerror=function(e){callback(e,self);};self.dom=file;file.src=filename;file.load&&file.load();};}
loadFile.audio=MediaFile(AudioElement);loadFile.video=MediaFile(VideoElement);loadFile.image=MediaFile(ImageElement);loadFile.document=function(file,callback){var self=this,parsedUrl=/(\[(!)?(.+)?\])?$/.exec(file),mimeType=parsedUrl[3],xhr=self.dom=new XHR();if(!xhr){delay(callback,Error('No XHR!'),self);return;}
file=file.substr(0,file.length-parsedUrl[0].length);file+=parsedUrl[2]?(file.indexOf('?')===-1?'?':'&')+'fobarz='+(+new Date):'';mimeType&&xhr.overrideMimeType(mimeType==='@'?'text/plain; charset=x-user-defined':mimeType);xhr.onreadystatechange=function(){if(xhr.readyState!==4)return;var dom=self.dom=xhr.responseXML&&xhr.responseXML.documentElement?xhr.responseXML:String(xhr.responseText||'');xhr.status===200?callback(null,self):callback({e:Error('Request failed: '+xhr.status)},self);};xhr.onerror=function(e){callback(e,self);};xhr.open('GET',file,true);xhr.send();};(function(){var dummyAudio=AudioElement(),dummyVideo=VideoElement(),i;support.audio=!!dummyAudio.canPlayType;support.video=!!dummyVideo.canPlayType;support.audioTypes=[];support.videoTypes=[];for(i in codecs){if(codecs.hasOwnProperty(i)){if(codecs[i].media==='video'){(codecs[i].supported=support.video&&dummyVideo.canPlayType(codecs[i].codec))&&support.videoTypes.push(i);}else if(codecs[i].media==='audio'){(codecs[i].supported=support.audio&&dummyAudio.canPlayType(codecs[i].codec))&&support.audioTypes.push(i);}}}}());if(!support.audio){loadFile.audio=function(a,callback){delay(callback,Error('<AUDIO> not supported.'),a);};}
if(!support.video){loadFile.video=function(a,callback){delay(callback,Error('<VIDEO> not supported.'),a);};}
function html5Preloader(){var self=this,args=arguments;if(!(self instanceof html5Preloader)){self=new html5Preloader();args.length&&self.loadFiles.apply(self,args);return self;}
self.files=[];html5Preloader.EventEmitter.call(self);self.loadCallback=bind(self.loadCallback,self);args.length&&self.loadFiles.apply(self,args);}
html5Preloader.prototype={active:false,files:null,filesLoading:0,filesLoaded:0,loadCallback:function(e,f){this.filesLoaded++;this.emit(e?'error':'fileloaded',e?[e,f]:[f]);if(this.filesLoading-this.filesLoaded===0){this.active=false;this.emit('finish');this.filesLoading=0;this.filesLoaded=0;}},getFile:function(id){return typeof id==='undefined'?map(this.files,function(f){return f.dom;}):typeof id==='number'?this.files[id].dom:typeof id==='string'?this.files[ID_PREFIX+id].dom:null;},removeFile:function(id){var f,i;switch(typeof id){case'undefined':this.files=[];break;case'number':f=this.files[id];this.files[ID_PREFIX+f.id]&&delete this.files[ID_PREFIX+f.id];this.files.splice(id,1);break;case'string':f=this.files[ID_PREFIX+id];f&&delete this.files[ID_PREFIX+id];for(i=0;i<this.files.length;i++){this.files[i]===f&&this.files.splice(i--,1);}}},loadFiles:function(){var files=[].slice.call(arguments),i,f;for(i=0;i<files.length;i++){f=html5Preloader.loadFile(files[i],this.loadCallback);this.files.push(f);this.files[ID_PREFIX+f.id]=f;this.filesLoading++;}
this.active=this.active||!!this.filesLoading;},addFiles:function(list){return this.loadFiles.apply(this,list instanceof Array?list:arguments);},getProgress:function(){return this.filesLoading?this.filesLoaded/this.filesLoading:1.0;}};html5Preloader.support=support;html5Preloader.loadFile=loadFile;html5Preloader.EventEmitter=EventEmitter;return html5Preloader;}());html5Preloader.prototype.rotaryGraph={angle:0,color:'white',scale:1.0,customText:''};html5Preloader.prototype.drawRotary=function(ctx,w,h)
{ctx.save();ctx.translate(w/2,h/2);var s=Math.min(Math.floor(w/80),Math.floor(h/60))*this.rotaryGraph.scale,drawText='Finished!',xi;if(this.active)
drawText='Loading '+this.nowLoading+'... ('+Math.floor(this.getProgress()*100)+'%)';if(this.rotaryGraph.customText!='')
drawText=this.rotaryGraph.customText;ctx.lineWidth=s;ctx.lineCap='round';ctx.strokeStyle=this.rotaryGraph.color;ctx.fillStyle=this.rotaryGraph.color;if(!this.active)
ctx.globalAlpha=0.5+0.05*Math.abs(this.rotaryGraph.angle-10);for(i=0;i<20;i++)
{xi=(this.active)?(20-this.rotaryGraph.angle+i)%20:10;if(this.active)ctx.globalAlpha=(0.5+xi*0.025);ctx.beginPath();ctx.moveTo(Math.sin(-Math.PI/10*i)*s*5,Math.cos(-Math.PI/10*i)*s*5);ctx.lineTo(Math.sin(-Math.PI/10*i)*s*15,Math.cos(-Math.PI/10*i)*s*15);ctx.stroke();}
ctx.globalAlpha=1.0;ctx.font=s+'pt Arial';ctx.textAlign='center';ctx.fillText(drawText,0,s*20,s*40);ctx.restore();this.rotaryGraph.angle=(this.rotaryGraph.angle+1)%20;};html5Preloader.prototype.version=0.61;(function(window,document,undefined){var prefixes=['webkit','Moz','ms','O'];var animations={};var useCssAnimations;function createEl(tag,prop){var el=document.createElement(tag||'div');var n;for(n in prop){el[n]=prop[n];}
return el;}
function ins(parent){for(var i=1,n=arguments.length;i<n;i++){parent.appendChild(arguments[i]);}
return parent;}
var sheet=function(){var el=createEl('style');ins(document.getElementsByTagName('head')[0],el);return el.sheet||el.styleSheet;}();function addAnimation(alpha,trail,i,lines){var name=['opacity',trail,~~(alpha*100),i,lines].join('-');var start=0.01+i/lines*100;var z=Math.max(1-(1-alpha)/trail*(100-start),alpha);var prefix=useCssAnimations.substring(0,useCssAnimations.indexOf('Animation')).toLowerCase();var pre=prefix&&'-'+prefix+'-'||'';if(!animations[name]){sheet.insertRule('@'+pre+'keyframes '+name+'{'+'0%{opacity:'+z+'}'+
start+'%{opacity:'+alpha+'}'+
(start+0.01)+'%{opacity:1}'+
(start+trail)%100+'%{opacity:'+alpha+'}'+'100%{opacity:'+z+'}'+'}',0);animations[name]=1;}
return name;}
function vendor(el,prop){var s=el.style;var pp;var i;if(s[prop]!==undefined)return prop;prop=prop.charAt(0).toUpperCase()+prop.slice(1);for(i=0;i<prefixes.length;i++){pp=prefixes[i]+prop;if(s[pp]!==undefined)return pp;}}
function css(el,prop){for(var n in prop){el.style[vendor(el,n)||n]=prop[n];}
return el;}
function merge(obj){for(var i=1;i<arguments.length;i++){var def=arguments[i];for(var n in def){if(obj[n]===undefined)obj[n]=def[n];}}
return obj;}
function pos(el){var o={x:el.offsetLeft,y:el.offsetTop};while((el=el.offsetParent)){o.x+=el.offsetLeft;o.y+=el.offsetTop;}
return o;}
var defaults={lines:12,length:7,width:5,radius:10,rotate:0,color:'#000',speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:'spinner',top:'auto',left:'auto'};var Spinner=function Spinner(o){if(!this.spin)return new Spinner(o);this.opts=merge(o||{},Spinner.defaults,defaults);};Spinner.defaults={};merge(Spinner.prototype,{spin:function(target){this.stop();var self=this;var o=self.opts;var el=self.el=css(createEl(0,{className:o.className}),{position:'relative',zIndex:o.zIndex});var mid=o.radius+o.length+o.width;var ep;var tp;if(target){target.insertBefore(el,target.firstChild||null);tp=pos(target);ep=pos(el);css(el,{left:(o.left=='auto'?tp.x-ep.x+(target.offsetWidth>>1):o.left+mid)+'px',top:(o.top=='auto'?tp.y-ep.y+(target.offsetHeight>>1):o.top+mid)+'px'});}
el.setAttribute('aria-role','progressbar');self.lines(el,self.opts);if(!useCssAnimations){var i=0;var fps=o.fps;var f=fps/o.speed;var ostep=(1-o.opacity)/(f*o.trail/100);var astep=f/o.lines;!function anim(){i++;for(var s=o.lines;s;s--){var alpha=Math.max(1-(i+s*astep)%f*ostep,o.opacity);self.opacity(el,o.lines-s,alpha,o);}
self.timeout=self.el&&setTimeout(anim,~~(1000/fps));}();}
return self;},stop:function(){var el=this.el;if(el){clearTimeout(this.timeout);if(el.parentNode)el.parentNode.removeChild(el);this.el=undefined;}
return this;},lines:function(el,o){var i=0;var seg;function fill(color,shadow){return css(createEl(),{position:'absolute',width:(o.length+o.width)+'px',height:o.width+'px',background:color,boxShadow:shadow,transformOrigin:'left',transform:'rotate('+~~(360/o.lines*i+o.rotate)+'deg) translate('+o.radius+'px'+',0)',borderRadius:(o.width>>1)+'px'});}
for(;i<o.lines;i++){seg=css(createEl(),{position:'absolute',top:1+~(o.width/2)+'px',transform:o.hwaccel?'translate3d(0,0,0)':'',opacity:o.opacity,animation:useCssAnimations&&addAnimation(o.opacity,o.trail,i,o.lines)+' '+1/o.speed+'s linear infinite'});if(o.shadow)ins(seg,css(fill('#000','0 0 4px '+'#000'),{top:2+'px'}));ins(el,ins(seg,fill(o.color,'0 0 1px rgba(0,0,0,.1)')));}
return el;},opacity:function(el,i,val){if(i<el.childNodes.length)el.childNodes[i].style.opacity=val;}});!function(){function vml(tag,attr){return createEl('<'+tag+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',attr);}
var s=css(createEl('group'),{behavior:'url(#default#VML)'});if(!vendor(s,'transform')&&s.adj){sheet.addRule('.spin-vml','behavior:url(#default#VML)');Spinner.prototype.lines=function(el,o){var r=o.length+o.width;var s=2*r;function grp(){return css(vml('group',{coordsize:s+' '+s,coordorigin:-r+' '+-r}),{width:s,height:s});}
var margin=-(o.width+o.length)*2+'px';var g=css(grp(),{position:'absolute',top:margin,left:margin});var i;function seg(i,dx,filter){ins(g,ins(css(grp(),{rotation:360/o.lines*i+'deg',left:~~dx}),ins(css(vml('roundrect',{arcsize:1}),{width:r,height:o.width,left:o.radius,top:-o.width>>1,filter:filter}),vml('fill',{color:o.color,opacity:o.opacity}),vml('stroke',{opacity:0}))));}
if(o.shadow){for(i=1;i<=o.lines;i++){seg(i,-2,'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)');}}
for(i=1;i<=o.lines;i++)seg(i);return ins(el,g);};Spinner.prototype.opacity=function(el,i,val,o){var c=el.firstChild;o=o.shadow&&o.lines||0;if(c&&i+o<c.childNodes.length){c=c.childNodes[i+o];c=c&&c.firstChild;c=c&&c.firstChild;if(c)c.opacity=val;}};}
else{useCssAnimations=vendor(s,'animation');}}();window.Spinner=Spinner;})(window,document);var userAgent=navigator.userAgent.toLowerCase();$.browser.chrome=/chrome/.test(navigator.userAgent.toLowerCase());if($.browser.chrome){userAgent=userAgent.substring(userAgent.indexOf('chrome/')+7);userAgent=userAgent.substring(0,userAgent.indexOf('.'));$.browser.version=userAgent;$.browser.safari=false;$(window).resize(function(){$('#bg_video').hide(0);$('#bg_video').show(0);});}
var video=$('#bg_vid').get(0);video.addEventListener('loadstart',loading,false);video.addEventListener('canplaythrough',loaded,false);function loading(e){if(!e){e=window.event;}
$('#spinner').show();$('#bg_video').css('background-color','#9e9e9e');}
function loaded(e){if(!e){e=window.event;}
$('#spinner').hide();}
var myLoader=html5Preloader();myLoader.addFiles('bg_vid*:/static/img/bg.webm||/static/img/bg2.mp4||/static/img/bg2.swf||/static/img/bg_fallback.jpg');var video=document.getElementById('bg_vid');var src;$('#bg_video').bind('contextmenu',function()
{return false;});var userAgent=navigator.userAgent.toLowerCase();$.browser.chrome=/chrome/.test(navigator.userAgent.toLowerCase());if($.browser.chrome){userAgent=userAgent.substring(userAgent.indexOf('chrome/')+7);userAgent=userAgent.substring(0,userAgent.indexOf('.'));$.browser.version=userAgent;$.browser.safari=false;src='static/img/bg.webm';}
if($.browser.mozilla){src='static/img/bg.webm';}
if($.browser.safari){src='static/img/bg2.mp4';}
if($.browser.msie){src='static/img/bg2.swf';}
video.src=src;video.play();video.addEventListener("ended",function(){if(video.ended='true'){video.currentTime=10.03;video.play();}},false);$(function(){$('#aboutactivator').click(function(){$('#aboutoverlay').fadeIn('fast',function(){$('#mobilemain').hide(0);$('#aboutbox').animate({'top':'20%'},0);});});$('#boxclose').click(function(){$('#aboutbox').animate({'top':'-200%'},0,function(){$('#aboutoverlay').fadeOut('fast');$('#footer').show(0);$('#mobilemain').show(0);});});});$(function(){$('#aaboutactivator').click(function(){$('#aboutoverlay').fadeIn('fast',function(){$('#mobilemain').hide(0);$('#aboutbox').animate({'top':'0px'},0);$('#mobileboxclose').show(0);});});$('#mobileboxclose').click(function(){$('#aboutbox').animate({'top':'-200%'},0,function(){$('#aboutoverlay').fadeOut('fast');$('#mobilemain').show(0);$('#mobileboxclose').hide(0);});});});$(function(){$('#signup,#newsletterboxclose,#boxclose,#thanksclose').mouseover(function(){$(this).css("opacity","1.0");});$('#signup,#newsletterboxclose,#boxclose,#thanksclose').mouseleave(function(){$(this).css("opacity",".5");});});$(document).keyup(function(e){if(e.keyCode==27){$('#aboutbox').animate({'top':'-200%'},0,function(){$('#aboutoverlay').fadeOut('fast');$('#footer').show(0);$('#mobilemain').show(0);});$('#newsletterbox').animate({'top':'-200%'},500,function(){$('#newsletteroverlay').fadeOut(0);$('#newsletterboxclose,#newmobileboxclose,#signup').fadeOut(0);});$('#thanksbox').animate({'top':'-200%'},0,function(){$('#thanksoverlay').hide(0);$('#thanksclose').hide(0);$('#mobilethanksclose,#signup').hide(0);});}});$(function(){$('#newsletteractivator,#nnewsletteractivator').click(function(){$('#newsletteroverlay').animate({'top':'0px'},0,function(){$('#newsletterbox').css('top','0px');$('#newsletterbox').show(0);console.log('hey!');$('#id_firstname').focus();$('#newsletterboxclose').show(0);$('#newmobileboxclose').show(0);$('#signup').show(0);});});$('#newsletterboxclose,#newmobileboxclose').click(function(){$('#newsletterbox').animate({'top':'-200%'},500,function(){$('#newsletteroverlay').fadeOut(0);$('#newsletterboxclose,#newmobileboxclose,#signup').fadeOut(0);});});});$(function(){$('#id_firstname').focus(function(){$(this).css("border-bottom","thin solid #ffffff")});$('#id_firstname').focusout(function(){$(this).css("border-bottom","none")});$('#id_email').focus(function(){$(this).css("border-bottom","thin solid #ffffff")});$('#id_email').focusout(function(){$(this).css("border-bottom","none")});});$("#id_firstname").keyup(function(){var nameval=$(this).val();}).keyup();$("#id_firstname").click(function(){var nameval=$("#id_firstname").val();if(nameval=='YOUR NAME'){$("#id_firstname").val('');}});$("#id_firstname").focusout(function(){var nameval=$("#id_firstname").val();if(nameval==''){$("#id_firstname").val('YOUR NAME');}});$("#id_email").keyup(function(){var emailval=$(this).val();}).keyup();$("#id_email").click(function(){var emailval=$("#id_email").val();if(emailval=='YOUR EMAIL'){$("#id_email").val('');}});$("#id_email").focusout(function(){var emailval=$("#id_email").val();if(emailval==''){$("#id_email").val('YOUR EMAIL');}});function validateEmail()
{var x=document.forms["myForm"]["email"].value;var atpos=x.indexOf("@");var dotpos=x.lastIndexOf(".");var str=$.trim($('#id_firstname').val());if($('#id_firstname').val()=='YOUR NAME'){$('#id_firstname').css("border-bottom","1px solid red");$('#nameerror').show();return false;}
if(str==''){$('#id_firstname').css("border-bottom","1px solid red");$('#nameerror').show();return false;}
if(atpos<1||dotpos<atpos+2||dotpos+2>=x.length)
{$('#id_email').css("border-bottom","1px solid red");$('#emailerror').show();return false}
else
{event.preventDefault();var name=$("#id_firstname").val();var email=$("#id_email").val();var data={name:name,email:email,csrfmiddlewaretoken:csrf};var args={type:"POST",url:"/",data:data};var request=$.ajax(args);request.done(function(){$('#newsletterbox').animate({'top':'-200%'},300,function(){$('#newsletteroverlay').fadeOut(0);$('#newsletterboxclose,#newmobileboxclose').fadeOut(0);});$('#thanksoverlay').fadeIn(400,function(){$('#thanksbox').animate({'top':'0px'},0);$('#thanksclose').css('top','50px');$('#thanksclose').show(0);$('#mobilethanksclose').show(0);});$('#thanksclose,#mobilethanksclose').click(function(){$('#thanksbox').animate({'top':'-200%'},0,function(){$('#thanksoverlay').hide(0);$('#thanksclose').hide(0);$('#mobilethanksclose,#signup').hide(0);});});});}}