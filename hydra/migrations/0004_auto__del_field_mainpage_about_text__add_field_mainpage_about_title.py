# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Deleting field 'MainPage.about_text'
        db.delete_column('hydra_mainpage', 'about_text')

        # Adding field 'MainPage.about_title'
        db.add_column('hydra_mainpage', 'about_title',
                      self.gf('django.db.models.fields.CharField')(default='About', max_length=250),
                      keep_default=False)

    def backwards(self, orm):
        # Adding field 'MainPage.about_text'
        db.add_column('hydra_mainpage', 'about_text',
                      self.gf('django.db.models.fields.CharField')(default='a', max_length=250),
                      keep_default=False)

        # Deleting field 'MainPage.about_title'
        db.delete_column('hydra_mainpage', 'about_title')

    models = {
        'hydra.mainpage': {
            'Meta': {'object_name': 'MainPage'},
            'about_title': ('django.db.models.fields.CharField', [], {'default': "'About'", 'max_length': '250'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'})
        },
        'hydra.newslettersignup': {
            'Meta': {'object_name': 'NewsletterSignup'},
            'email': ('django.db.models.fields.EmailField', [], {'max_length': '75'}),
            'firstname': ('django.db.models.fields.CharField', [], {'max_length': '250'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'})
        }
    }

    complete_apps = ['hydra']