from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.filters import OrderingFilter
from .models import Skill, SkillType, Project
from .serializers import SkillSerializer, SkillTypeSerializer, ProjectSerializer

# Create your views here.


class SkillList(viewsets.ModelViewSet):
    """
    스킬셋 조회
    """

    queryset = SkillType.objects.all()
    serializer_class = SkillTypeSerializer
    filter_backends = [OrderingFilter]
    ordering_fields = ['skill_type']
    ordering = ['skill_type']

class ProjectList(viewsets.ModelViewSet):
    """
    프로젝트 조회
    """

    queryset = Project.objects.all()
    serializer_class = ProjectSerializer