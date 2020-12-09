from django.db import models
from django.utils.translation import ugettext_lazy as _
from .choices import LEVEL_CHOICES, TYPE_CHOICES


def skill_svg(instance, filename):
    return f"skill/{filename}"


# Create your models here.
class Project(models.Model):
    title = models.CharField(_("프로젝트명"), max_length=50)
    desc = models.TextField(_("설명"))

    def __str__(self):
        return f"{self.title}"


class SkillType(models.Model):
    skill_type = models.CharField(_("기술 구분"), max_length=20, choices=TYPE_CHOICES)

    def __str__(self):
        return f"{self.skill_type}"


class Skill(models.Model):
    tag = models.CharField(_("기술명"), max_length=50, default="")
    level = models.CharField(_("수준"), max_length=50, default="B", choices=LEVEL_CHOICES)
    percent = models.IntegerField(_("역량퍼센트"), default=0)
    icon = models.FileField(_("SVG 아이콘파일"), null=True, blank=True, upload_to=skill_svg)
    skill_type = models.ForeignKey(
        SkillType,
        on_delete=models.CASCADE,
        verbose_name="기술구분",
        null=True,
        related_name="skill",
    )

    def __str__(self):
        return f"{self.tag}"
