from django.contrib import admin
from .models import Board, Column, Task, SubTask


class SubTaskInlineAdmin(admin.StackedInline):
    model = SubTask
    extra: int = 2


class TaskAdmin(admin.ModelAdmin):
    model = Task
    inlines = [SubTaskInlineAdmin]


admin.site.register(Board)
admin.site.register(Column)
admin.site.register(Task, TaskAdmin)
