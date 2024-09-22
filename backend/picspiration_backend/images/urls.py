from django.urls import path
from .views import (
    ImageListCreateView,
    ImageDetailView,
    ImageLikeView,
    CommentListCreateView,
    CollectionListCreateView,
    CollectionDetailView,
    AddImageToCollectionView,
)

urlpatterns = [
    path('', ImageListCreateView.as_view(), name='image-list-create'),
    path('<int:pk>/', ImageDetailView.as_view(), name='image-detail'),
    path('<int:pk>/like/', ImageLikeView.as_view(), name='image-like'),
    path('<int:image_id>/comments/', CommentListCreateView.as_view(), name='comment-list-create'),
    path('collections/', CollectionListCreateView.as_view(), name='collection-list-create'),
    path('collections/<int:pk>/', CollectionDetailView.as_view(), name='collection-detail'),
    path('collections/<int:pk>/add-image/', AddImageToCollectionView.as_view(), name='add-image-to-collection'),
]