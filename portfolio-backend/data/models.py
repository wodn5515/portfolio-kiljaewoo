from django.db import models
from django.utils.translation import ugettext_lazy as _

# Create your models here.
class Project(models.Model):
    title = models.CharField(_('프로젝트명'), max_length=50)
    desc = models.TextField(_('설명'))

    def __str__(self):
        return f'{self.title}'