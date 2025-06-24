from django.http import JsonResponse
import os

# Helper to get codespace name from environment or fallback
def get_codespace_url():
    codespace = os.environ.get('CODESPACE_NAME', '[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]')
    return f"https://{codespace}-8000.app.github.dev"

# API root endpoint for API discovery
def api_root(request):
    return JsonResponse({
        "api": "OctoFit Tracker API",
        "endpoints": [
            get_codespace_url(),
            "http://localhost:8000"
        ]
    })

from rest_framework import viewsets
from .models import User, Team, Activity, Leaderboard, Workout
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, LeaderboardSerializer, WorkoutSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer
