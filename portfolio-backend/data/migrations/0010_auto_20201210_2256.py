# Generated by Django 3.1.3 on 2020-12-10 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0009_auto_20201210_2256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='desc',
            field=models.TextField(blank=True, default='', verbose_name='설명'),
        ),
    ]
