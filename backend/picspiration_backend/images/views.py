from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Image, Comment, Collection
from .serializers import ImageSerializer, CommentSerializer, CollectionSerializer

class ImageListCreateView(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ImageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class ImageLikeView(generics.UpdateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def patch(self, request, *args, **kwargs):
        image = self.get_object()
        user = request.user
        if user in image.likes.all():
            image.likes.remove(user)
            action = 'unliked'
        else:
            image.likes.add(user)
            action = 'liked'
        return Response({'status': f'Successfully {action} the image.'})

class CommentListCreateView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        image_id = self.kwargs.get('image_id')
        image = Image.objects.get(id=image_id)
        serializer.save(user=self.request.user, image=image)

class CollectionListCreateView(generics.ListCreateAPIView):
    serializer_class = CollectionSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return Collection.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CollectionDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CollectionSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return Collection.objects.filter(user=self.request.user)

class AddImageToCollectionView(generics.UpdateAPIView):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def patch(self, request, *args, **kwargs):
        collection = self.get_object()
        image_id = request.data.get('image_id')
        try:
            image = Image.objects.get(id=image_id)
            if image not in collection.images.all():
                collection.images.add(image)
                return Response({'status': 'Image added to collection successfully.'})
            else:
                return Response({'status': 'Image already in collection.'}, status=status.HTTP_400_BAD_REQUEST)
        except Image.DoesNotExist:
            return Response({'status': 'Image not found.'}, status=status.HTTP_404_NOT_FOUND)