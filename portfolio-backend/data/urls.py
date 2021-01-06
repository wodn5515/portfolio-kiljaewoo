from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .api import SkillViewset, ProjectViewset

router = routers.DefaultRouter()
router.register("skills", SkillViewset, "skills")
router.register("projects", ProjectViewset, "projects")

urlpatterns = router.urls
