from rest_framework import routers
from book import views

router = routers.DefaultRouter()
router.register('', views.BookViewSet, basename='book')
urlpattern= router.urls
print(urlpattern)