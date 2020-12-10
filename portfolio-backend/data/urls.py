from django.contrib import admin
from django.urls import path, include
from . import views

skill = views.SkillList.as_view({"get": "list"})
project = views.ProjectList.as_view({"get": "list"})

urlpatterns = [
    path("skill", skill, name="skill"),
    path("project", project, name="project"),
]
