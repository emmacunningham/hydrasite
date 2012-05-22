from django.db import models
from django.forms import ModelForm
from django.core.exceptions import ValidationError

def validate_only_one_instance(obj):
    model = obj.__class__
    if (model.objects.count() > 0 and
            obj.id != model.objects.get().id):
        raise ValidationError("Can only create 1 %s instance" % model.__name__)



class AboutCopy(models.Model):
	about_title = models.CharField(max_length=250,default="About")
	about_text_left = models.TextField(default="what we do")
	about_text_right = models.TextField(default="more about us")
	def clean(self):
	        validate_only_one_instance(self)
	
	
class NewsletterSignup(models.Model):
	firstname = models.CharField(max_length=250)
	email = models.EmailField(max_length=75)
	
class NewsletterForm(ModelForm):
	class Meta:
		model = NewsletterSignup
		
		def __init__(self, *args, **kwargs):
		        super(NewsletterForm, self).__init__(*args, **kwargs)
		        self.fields['myfield'].widget.attrs.update({'size' : '80'})