from django.db import models
from django.utils.translation import ugettext_lazy as _
from .choices import LEVEL_CHOICES, TYPE_CHOICES


def skill_svg(instance, filename):
    return f"skill/{filename}"


# Create your models here.
class SkillType(models.Model):
    skill_type = models.CharField(_("기술 구분"), max_length=20, choices=TYPE_CHOICES)

    def __str__(self):
        return f"{self.skill_type}"


class Skill(models.Model):
    tag = models.CharField(_("기술명"), max_length=50, default="")
    level = models.CharField(_("수준"), max_length=50, default="T", choices=LEVEL_CHOICES)
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


class Project(models.Model):
    title = models.CharField(_("프로젝트명"), max_length=50, default="")
    desc = models.TextField(_("설명"), default="", blank=True)
    thumbnail = models.ImageField(_("썸네일"), null=True)
    main_skill_used = models.ManyToManyField(Skill, verbose_name=_("주사용기술"), related_name="main_skill")
    sub_skill_used = models.ManyToManyField(Skill, verbose_name=_("보조사용기술"), related_name="sub_skill")
    github = models.CharField(_("깃헙주소"), max_length=255, default="", blank=True)
    site = models.CharField(_("사이트주소"), max_length=255, default="", blank=True)
    term = models.CharField(_("기간"), max_length=50, default="")

    def __str__(self):
        return f"{self.title}"

