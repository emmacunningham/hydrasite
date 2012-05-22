# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'MainPage.about_text_left'
        db.add_column('hydra_mainpage', 'about_text_left',
                      self.gf('django.db.models.fields.TextField')(default='what we do'),
                      keep_default=False)

        # Adding field 'MainPage.about_text_right'
        db.add_column('hydra_mainpage', 'about_text_right',
                      self.gf('django.db.models.fields.TextField')(default='more about us'),
                      keep_default=False)

    def backwards(self, orm):
        # Deleting field 'MainPage.about_text_left'
        db.delete_column('hydra_mainpage', 'about_text_left')

        # Deleting field 'MainPage.about_text_right'
        db.delete_column('hydra_mainpage', 'about_text_right')

    models = {
        'hydra.mainpage': {
            'Meta': {'object_name': 'MainPage'},
            'about_text_left': ('django.db.models.fields.TextField', [], {'default': "'what we do'"}),
            'about_text_right': ('django.db.models.fields.TextField', [], {'default': "'more about us'"}),
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