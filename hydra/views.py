from django.http import HttpResponse
from django.template import RequestContext, Context, loader
from hydra.models import MainPage, NewsletterSignup, NewsletterForm
from django.shortcuts import render_to_response
from django.core.context_processors import csrf



def index(request):
	c = {}
	c.update(csrf(request))
	thanks = 1
	if request.method == 'POST': # If the form has been submitted...
		form = NewsletterForm(request.POST, initial={'firstname': 'YOUR FIRST NAME', 'email': 'YOUR EMAIL'}) # A form bound to the POST data
		if form.is_valid(): 
			firstname = form.cleaned_data['firstname']
			email = form.cleaned_data['email']
			signup = NewsletterSignup()
			signup.email = email
			signup.firstname = firstname
			signup.save()
			return render_to_response('hydra/index.html', {
				'form': form, 'thanks': thanks
				},context_instance=RequestContext(request))

	else:
		form = NewsletterForm() # An unbound form

		return render_to_response('hydra/index.html', {
			'form': form,
			},context_instance=RequestContext(request))

			
			
			
			

