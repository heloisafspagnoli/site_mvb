from django.conf.urls import patterns, include, url
from django.contrib import admin

from views import quem_somos_view

urlpatterns = patterns('',
    url(r'^quem_somos/', quem_somos_view, name='quem_somos'),
)
