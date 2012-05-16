from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext, Context, loader
from hydra.models import AboutCopy, NewsletterSignup, NewsletterForm
from django.shortcuts import render_to_response
from django.core.context_processors import csrf
from django.utils import simplejson




def index(request):
	c = {}
	c.update(csrf(request))
	thanks = 1
	aboutcopy = AboutCopy.objects.get(pk=1)
	abouthead = aboutcopy.about_title
	aboutleft = aboutcopy.about_text_left
	aboutright = aboutcopy.about_text_right
	if request.method == 'POST': 
		form = NewsletterForm(request.POST) 
		if form.is_valid(): 
			firstname = form.cleaned_data['firstname']
			email = form.cleaned_data['email']
			signup = NewsletterSignup()
			signup.email = email
			signup.firstname = firstname
			signup.save()
			#status = simplejson.dumps({'status': "success"})
			#return HttpResponse(status, mimetype="application/json")
			return render_to_response('hydra/index.html', {
				'form': form, 'thanks': thanks
				},context_instance=RequestContext(request))

	else:
		form = NewsletterForm() # An unbound form

		return render_to_response('hydra/index.html', {
			'form': form, 'abouthead': abouthead, 'aboutleft': aboutleft, 'aboutright': aboutright,
			},context_instance=RequestContext(request))

			
			
			
			

