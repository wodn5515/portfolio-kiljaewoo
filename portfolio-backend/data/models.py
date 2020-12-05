from django.db import models
from django.utils.translation import ugettext_lazy as _
from .choices import LEVEL_CHOICES

# Create your models here.
class Project(models.Model):
    title = models.CharField(_("프로젝트명"), max_length=50)
    desc = models.TextField(_("설명"))

    def __str__(self):
        return f"{self.title}"


class Skill(models.Model):
    tag = models.CharField(_("기술명"), max_length=50, default="")
    level = models.CharField(_("수준"), max_length=50, default="B", choices=LEVEL_CHOICES)
    percent = models.IntegerField(_("역량퍼센트"), default=0)
