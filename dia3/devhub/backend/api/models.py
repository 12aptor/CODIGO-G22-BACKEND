# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbl_category'


class Company(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'tbl_company'


class Location(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'tbl_location'


class Skill(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'tbl_skill'


class Type(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'tbl_type'
        
        
class Candidate(models.Model):
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=200, blank=True, null=True)
    title = models.CharField(max_length=200)
    experience_year = models.IntegerField()
    location = models.ForeignKey('Location', models.DO_NOTHING)
    resume = models.CharField(max_length=255, blank=True, null=True)
    aboutme = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbl_candidate'


class CandidateExperience(models.Model):
    position = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    date_start = models.DateField()
    date_end = models.DateField(blank=True, null=True)
    candidate = models.ForeignKey(TblCandidate, models.DO_NOTHING)
    company = models.ForeignKey('Company', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_candidate_experience'


class CandidateSkill(models.Model):
    candidate = models.ForeignKey(TblCandidate, models.DO_NOTHING)
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
    candidate = models.ForeignKey(TblCandidate, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_candidate_study'


class Job(models.Model):
    image = models.CharField(max_length=200, blank=True, null=True)
    title = models.CharField(max_length=200)
    salary = models.FloatField()
    created_date = models.DateField(blank=True, null=True)
    vacancies = models.IntegerField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    company = models.ForeignKey(TblCompany, models.DO_NOTHING)
    type = models.ForeignKey('Type', models.DO_NOTHING)
    category = models.ForeignKey(TblCategory, models.DO_NOTHING)
    location = models.ForeignKey('Location', models.DO_NOTHING)
    status = models.IntegerField()
    experience_year = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'tbl_job'


class JobApply(models.Model):
    date_apply = models.DateField()
    status = models.IntegerField()
    job = models.ForeignKey(TblJob, models.DO_NOTHING)
    candidate = models.ForeignKey(TblCandidate, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_job_apply'


class JobSkill(models.Model):
    id = models.IntegerField(primary_key=True)
    job = models.ForeignKey(TblJob, models.DO_NOTHING)
    skill = models.ForeignKey('Skill', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_job_skill'



