from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Skill, SkillType
from .serializers import SkillSerializer, SkillTypeSerializer

# Create your views here.


class SkillList(viewsets.ModelViewSet):
    """
    스킬셋 조회
    """

    queryset = SkillType.objects.all()
    serializer_class = SkillTypeSerializer