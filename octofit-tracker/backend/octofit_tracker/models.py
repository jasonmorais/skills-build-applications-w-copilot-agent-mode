from django.contrib.auth.models import User

from djongo import models

class Team(models.Model):
    name = models.CharField(max_length=100)
    members = models.JSONField()  # store user IDs as a list of strings
    class Meta:
        db_table = 'teams'

class Activity(models.Model):
    user_id = models.CharField(max_length=100)  # store user ID as string
    activity_type = models.CharField(max_length=50)
    duration = models.IntegerField()
    date = models.DateTimeField()
    class Meta:
        db_table = 'activity'

class Leaderboard(models.Model):
    team_id = models.CharField(max_length=100)  # store team ID as string
    points = models.IntegerField()
    class Meta:
        db_table = 'leaderboard'

class Workout(models.Model):
    user_id = models.CharField(max_length=100)  # store user ID as string
    workout_type = models.CharField(max_length=50)
    details = models.JSONField()
    date = models.DateTimeField()
    class Meta:
        db_table = 'workouts'
