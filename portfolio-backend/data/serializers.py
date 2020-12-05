from rest_framework import serializers
from .models import Skill
from .choices import LEVEL_CHOICES


class SkillSerializer(serializers.ModelSerializer):
    level = serializers.SerializerMethodField()

    def get_level(self, obj):
        return obj.get_level_display()

    class Meta:
        model = Skill
        fields = "__all__"
