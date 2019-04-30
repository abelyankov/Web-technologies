# Register your models here.
from django.contrib import admin
from api.models import Post


@admin.register(Post)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'body', 'like_count')
