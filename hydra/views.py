from django.http import HttpResponse
from django.template import Context, loader
from hydra.models import MainPage, NewsletterSignup

def index(request):
    t = loader.get_template('hydra/index.html')
    c = Context({
 				
    })
    return HttpResponse(t.render(c))