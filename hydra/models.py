from django.db import models
from django.forms import ModelForm


class MainPage(models.Model):
	header = models.CharField(max_length=250)
	
class NewsletterSignup(models.Model):
	firstname = models.CharField(max_length=250)
	email = models.EmailField(max_length=75)
	
class NewsletterForm(ModelForm):
	class Meta:
		model = NewsletterSignup