# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Deleting model 'MainPage'
        db.delete_table('hydra_mainpage')

        # Adding model 'AboutCopy'
        db.create_table('hydra_aboutcopy', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('about_title', self.gf('django.db.models.fields.CharField')(default='About', max_length=250)),
            ('about_text_left', self.gf('django.db.models.fields.TextField')(default='what we do')),
            ('about_text_right', self.gf('django.db.models.fields.TextField')(default='more about us')),
        ))
        db.send_create_signal('hydra', ['AboutCopy'])

    def backwards(self, orm):
        # Adding model 'MainPage'
        db.create_table('hydra_mainpage', (
            ('about_text_right', self.gf('django.db.models.fields.TextField')(default='more about us')),
            ('about_title', self.gf('django.db.models.fields.CharField')(default='About', max_length=250)),
            ('about_text_left', self.gf('django.db.models.fields.TextField')(default='what we do')),
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
        ))
        db.send_create_signal('hydra', ['MainPage'])

        # Deleting model 'AboutCopy'
        db.delete_table('hydra_aboutcopy')

    models = {
        'hydra.aboutcopy': {
            'Meta': {'object_name': 'AboutCopy'},
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