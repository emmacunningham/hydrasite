# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'MainPage'
        db.create_table('hydra_mainpage', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('header', self.gf('django.db.models.fields.CharField')(max_length=250)),
        ))
        db.send_create_signal('hydra', ['MainPage'])

    def backwards(self, orm):
        # Deleting model 'MainPage'
        db.delete_table('hydra_mainpage')

    models = {
        'hydra.mainpage': {
            'Meta': {'object_name': 'MainPage'},
            'header': ('django.db.models.fields.CharField', [], {'max_length': '250'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'})
        }
    }

    complete_apps = ['hydra']