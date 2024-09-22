from rest_framework import serializers
from .models import Image, Comment, Collection
from ..users.serializers import UserSerializer

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'user', 'content', 'created_at')

class ImageSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    likes_count = serializers.SerializerMethodField()
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Image
        fields = ('id', 'user', 'title', 'description', 'image', 'created_at', 'updated_at', 'likes_count', 'comments')

    def get_likes_count(self, obj):
        return obj.likes.count()

class CollectionSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Collection
        fields = ('id', 'user', 'name', 'description', 'images', 'created_at', 'updated_at')