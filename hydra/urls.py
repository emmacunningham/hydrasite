from hydra import settings
from django.conf.urls import patterns, include, url
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'hydrasite.views.home', name='home'),
    # url(r'^hydrasite/', include('hydrasite.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^', 'hydra.views.index'),
	url(r'^static/(?P<path>.*)$', 'django.views.static.serve',  
	         {'document_root': settings.STATIC_ROOT}),
    url(r'^admin/', include(admin.site.urls)),
)
