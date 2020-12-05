from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Skill
from .serializers import SkillSerializer

# Create your views here.


class SkillList(viewsets.ModelViewSet):
    """
    스킬셋 조회
    """

    queryset = Skill.objects.all()
    serializer_class = SkillSerializer