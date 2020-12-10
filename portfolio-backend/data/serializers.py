from rest_framework import serializers
from .models import Skill, SkillType, Project


class SkillSerializer(serializers.ModelSerializer):
    level = serializers.SerializerMethodField()
    icon = serializers.ImageField(use_url=True)

    def get_level(self, obj):
        return obj.get_level_display()

    class Meta:
        model = Skill
        fields = "__all__"


class SkillTypeSerializer(serializers.ModelSerializer):
    skill = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = SkillType
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"