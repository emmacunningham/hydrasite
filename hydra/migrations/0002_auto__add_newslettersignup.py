# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'NewsletterSignup'
        db.create_table('hydra_newslettersignup', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('firstname', self.gf('django.db.models.fields.CharField')(max_length=250)),
            ('email', self.gf('django.db.models.fields.EmailField')(max_length=75)),
        ))
        db.send_create_signal('hydra', ['NewsletterSignup'])

    def backwards(self, orm):
        # Deleting model 'NewsletterSignup'
        db.delete_table('hydra_newslettersignup')

    models = {
        'hydra.mainpage': {
            'Meta': {'object_name': 'MainPage'},
            'header': ('django.db.models.fields.CharField', [], {'max_length': '250'}),
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