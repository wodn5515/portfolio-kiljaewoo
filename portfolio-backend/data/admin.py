from django.contrib import admin
from .models import Skill, Project, SkillType

# Register your models here.


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("tag", "level", "percent", "skill_type")
    list_display_link = ("tag",)


@admin.register(SkillType)
class SkillTypeAdmin(admin.ModelAdmin):
    pass


admin.site.register(Project)