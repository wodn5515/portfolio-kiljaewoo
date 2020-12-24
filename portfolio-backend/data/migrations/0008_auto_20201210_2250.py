# Generated by Django 3.1.3 on 2020-12-10 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0007_auto_20201209_2213'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='github',
            field=models.CharField(default='', max_length=255, verbose_name='깃헙주소'),
        ),
        migrations.AddField(
            model_name='project',
            name='site',
            field=models.CharField(default='', max_length=255, verbose_name='사이트주소'),
        ),
        migrations.AddField(
            model_name='project',
            name='skill_used',
            field=models.CharField(default='', max_length=50, verbose_name='사용기술'),
        ),
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(default='', max_length=50, verbose_name='프로젝트명'),
        ),
    ]