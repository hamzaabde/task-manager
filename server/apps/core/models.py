from django.db import models
from django.utils.timezone import now
from apps.authentication.models import Account


class Board(models.Model):
    owner: Account = models.ForeignKey(
        Account, related_name='boards', on_delete=models.CASCADE)
    name: str = models.CharField(max_length=255, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(default=now)

    class Meta:
        ordering: list[str] = ['-last_modified', '-created_at']

    def __str__(self) -> str:
        return f"{self.owner.username} - {self.name}"

    @classmethod
    def get_default_pk(cls):
        account, created = Account.objects.get_or_create(
            username='default_user_account')

        board, created = cls.objects.get_or_create(
            name='default board',
            last_modified=now(),
            owner=account,
        )
        return board.pk


class Column(models.Model):
    name: str = models.CharField(max_length=255)
    order: int = models.PositiveIntegerField()
    board: Board = models.ForeignKey(
        Board, related_name='columns', on_delete=models.CASCADE, default=Board.get_default_pk)

    class Meta:
        ordering: list[str] = ['order']

    def __str__(self) -> str:
        return self.name


class Task(models.Model):
    title: str = models.CharField(max_length=255)
    description: str = models.TextField()
    column: Column = models.ForeignKey(
        Column, related_name='tasks', on_delete=models.CASCADE)
    order: int = models.PositiveIntegerField()

    class Meta:
        ordering: list[str] = ['order']

    def __str__(self) -> str:
        return self.title

    @classmethod
    def get_default_pk(cls):
        task, created = cls.objects.get_or_create(
            title='default task',
            description='default task description',
            column=Column.get_default_pk)
        return task.pk


class SubTask(models.Model):
    note: str = models.TextField()
    done: bool = models.BooleanField(default=False)
    task: Task = models.ForeignKey(
        Task, related_name='sub_tasks', on_delete=models.CASCADE, default=Task.get_default_pk)

    def __str__(self) -> str:
        return self.note
