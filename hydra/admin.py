from hydra.models import AboutCopy, NewsletterSignup
from django.contrib import admin

class NewsletterAdmin(admin.ModelAdmin):
	fields = ('name','email')
	list_display = ('name','email')

admin.site.register(AboutCopy)
admin.site.register(NewsletterSignup, NewsletterAdmin)