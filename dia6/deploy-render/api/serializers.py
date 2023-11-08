from rest_framework import serializers

from .models import (
    Category,Company,Location,
    Candidate,Skill,Type,Job,JobSkill
)

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
        
class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'
        
class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = '__all__'
        
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'
        
class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = '__all__'
        
class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['company_name'] = instance.company.name
        representation['location_name'] = instance.location.name
        return representation
    
class JobSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobSkill
        fields = '__all__'
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['skill_name'] = instance.skill.name
        representation['job_name'] = instance.job.title
        return representation
    
class JobSkillListSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobSkill
        fields = ['id']
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['skill_name'] = instance.skill.name
        return representation
        
class JobListSerializer(serializers.ModelSerializer):
    skills = JobSkillListSerializer(many=True,read_only=True)
    class Meta:
        model = Job
        fields = ['id','title','image','salary','skills']
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['company_name'] = instance.company.name
        representation['location_name'] = instance.location.name
        return representation
    
class JobSkillCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobSkill
        fields = ['skill']
        
class JobCreateSerializer(serializers.ModelSerializer):
    skills = JobSkillCreateSerializer(many=True)
    class Meta:
        model = Job
        fields = ['image','title','salary','company','type',
                  'category','location','status',
                  'experience_year','skills']
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['company_name'] = instance.company.name
        representation['location_name'] = instance.location.name
        return representation
    
    def create(self,validated_data):
        lista_skills = validated_data.pop('skills')
        job = Job.objects.create(**validated_data)
        for skill in lista_skills:
            JobSkill.objects.create(job=job,**skill)
        return job
