# Copilot agent mode
# This management command populates test data for the OctoFit Tracker app
from django.core.management.base import BaseCommand
from octofit_tracker.models import Team, Activity, Leaderboard, Workout
from django.contrib.auth.models import User
from django.utils import timezone

class Command(BaseCommand):
    help = 'Populate test data for OctoFit Tracker'

    def handle(self, *args, **options):
        # Users
        user1 = User.objects.create_user(username='alice', email='alice@example.com', password='alicepass')
        user2 = User.objects.create_user(username='bob', email='bob@example.com', password='bobpass')
        user3 = User.objects.create_user(username='carol', email='carol@example.com', password='carolpass')

        # Teams (store user IDs as strings)
        team1 = Team.objects.create(name='Team Alpha', members=[str(user1.id), str(user2.id)])
        team2 = Team.objects.create(name='Team Beta', members=[str(user3.id)])

        # Activities
        Activity.objects.create(user_id=str(user1.id), activity_type='run', duration=30, date=timezone.now())
        Activity.objects.create(user_id=str(user2.id), activity_type='walk', duration=45, date=timezone.now())
        Activity.objects.create(user_id=str(user3.id), activity_type='cycle', duration=60, date=timezone.now())

        # Leaderboard
        Leaderboard.objects.create(team_id=str(team1.id), points=150)
        Leaderboard.objects.create(team_id=str(team2.id), points=100)

        # Workouts
        Workout.objects.create(user_id=str(user1.id), workout_type='cardio', details={'distance': 5}, date=timezone.now())
        Workout.objects.create(user_id=str(user2.id), workout_type='strength', details={'reps': 20}, date=timezone.now())
        Workout.objects.create(user_id=str(user3.id), workout_type='yoga', details={'duration': 40}, date=timezone.now())

        self.stdout.write(self.style.SUCCESS('Test data added.'))
