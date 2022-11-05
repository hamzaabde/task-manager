from django.db import models
from django.utils.timezone import now
from apps.authentication.models import Account


class Board(models.Model):
    owner: Account = models.ForeignKey(
        Account, related_name='boards', on_delete=models.CASCADE)
    name: str = models.CharField(max_length=255, unique=True)
    description: str = models.TextField(default='')
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(default=now)

    class Meta:
        ordering: list[str] = ['-last_modified', '-created_at']

    def __str__(self) -> str:
        return f"{self.owner.username} - {self.name}"


class Column(models.Model):
    name: str = models.CharField(max_length=255)
    position: int = models.PositiveIntegerField()
    board: Board = models.ForeignKey(
        Board, related_name='columns', on_delete=models.CASCADE, default=1)

    class Meta:
        unique_together = ['board', 'position']
        ordering: list[str] = ['position']

    def __str__(self) -> str:
        return self.name


class Task(models.Model):
    title: str = models.CharField(max_length=255)
    description: str = models.TextField()
    column: Column = models.ForeignKey(
        Column, related_name='tasks', on_delete=models.CASCADE)
    position: int = models.PositiveIntegerField()

    class Meta:
        unique_together = ['column', 'position']
        ordering: list[str] = ['position']

    def __str__(self) -> str:
        return self.title


class SubTask(models.Model):
    note: str = models.TextField()
    done: bool = models.BooleanField(default=False)
    task: Task = models.ForeignKey(
        Task, related_name='sub_tasks', on_delete=models.CASCADE, default=1)

    def __str__(self) -> str:
        return self.note
