from django.shortcuts import render
from django.http import Http404
from rest_framework import viewsets
from rest_framework import views
from rest_framework.response import Response
from rest_framework.filters import OrderingFilter
from .models import Skill, SkillType, Project
from .serializers import SkillSerializer, SkillTypeSerializer, ProjectSerializer

class SkillViewset(viewsets.ModelViewSet):
    """
    스킬셋 조회
    """

    queryset = SkillType.objects.all()
    serializer_class = SkillTypeSerializer
    filter_backends = [OrderingFilter]
    ordering = ['skill_type']

class ProjectViewset(viewsets.ModelViewSet):
    """
    프로젝트 조회
    """

    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
