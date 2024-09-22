from django.urls import path
from .views import UserRegistrationView, UserProfileView, FollowUserView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-register'),
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('follow/<int:pk>/', FollowUserView.as_view(), name='follow-user'),
]