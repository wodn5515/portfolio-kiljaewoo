from django.shortcuts import render
from django.http import Http404
from rest_framework import viewsets
from rest_framework import views
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

class ProjectDetail(views.APIView):

    def get_object(self, pk):
        try:
            return Project.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk, format=None):
        project = self.get_object(pk)
        serializer = ProjectSerializer(project)
        return Response(serializer.data)