from django.contrib import admin
from .models import Skill, Project

# Register your models here.


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = (
        "tag",
        "level",
        "percent",
    )
    list_display_link = ("tag",)
