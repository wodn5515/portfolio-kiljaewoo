# Generated by Django 3.1.3 on 2021-01-03 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0012_auto_20210103_1924'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='all_skill_used',
            field=models.ManyToManyField(to='data.Skill', verbose_name='사용기술'),
        ),
    ]
