from django.db import models
from cloudinary.models import CloudinaryField

class Category(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbl_category'
        
    def __str__(self):
        return self.name


class Company(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'tbl_company'
    
    def __str__(self):
        return self.name


class Location(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'tbl_location'
        
    def __str__(self):
        return self.name


class Skill(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'tbl_skill'

    def __str__(self):
        return self.name

class Type(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'tbl_type'
        
    def __str__(self):
        return self.name
        
        
class Candidate(models.Model):
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=255, blank=True, null=True)
    title = models.CharField(max_length=200)
    experience_year = models.IntegerField()
    location = models.ForeignKey('Location', models.DO_NOTHING)
    resume = models.CharField(max_length=255, blank=True, null=True)
    aboutme = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbl_candidate'
        
    def __str__(self):
        return self.name


class CandidateExperience(models.Model):
    position = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    date_start = models.DateField()
    date_end = models.DateField(blank=True, null=True)
    candidate = models.ForeignKey(Candidate, models.DO_NOTHING)
    company = models.ForeignKey('Company', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_candidate_experience'


class CandidateSkill(models.Model):
    candidate = models.ForeignKey(Candidate, models.DO_NOTHING)
    skill = models.ForeignKey('Skill', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_candidate_skill'


class CandidateStudy(models.Model):
    school = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    date_start = models.DateField()
    date_end = models.DateField(blank=True, null=True)
    candidate = models.ForeignKey('Candidate', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_candidate_study'


class Job(models.Model):
    image = models.CharField(max_length=255, blank=True, null=True)
    title = models.CharField(max_length=200)
    salary = models.FloatField()
    created_date = models.DateField(blank=True, null=True)
    vacancies = models.IntegerField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    company = models.ForeignKey(Company, models.DO_NOTHING)
    type = models.ForeignKey('Type', models.DO_NOTHING)
    category = models.ForeignKey(Category, models.DO_NOTHING)
    location = models.ForeignKey('Location', models.DO_NOTHING)
    status = models.IntegerField()
    experience_year = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'tbl_job'
        
    def __str__(self):
        return self.title


class JobApply(models.Model):
    date_apply = models.DateField()
    status = models.IntegerField()
    job = models.ForeignKey(Job, models.DO_NOTHING)
    candidate = models.ForeignKey('Candidate', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_job_apply'


class JobSkill(models.Model):
    job = models.ForeignKey(Job,related_name='skills',
                            on_delete=models.RESTRICT)
    skill = models.ForeignKey('Skill', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_job_skill'



