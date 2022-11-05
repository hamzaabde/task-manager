from rest_framework import serializers
from .models import Board, Column, Task, SubTask


class SubTaskSerializer(serializers.ModelSerializer):
    task = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = SubTask
        fields = ['note', 'done', 'task']


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['title', 'description', 'position', 'column']


class ColumnSerializer(serializers.ModelSerializer):
    board = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Column
        fields = ['id', 'name', 'position', 'done']


class BoardSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(read_only=True)
    created_at = serializers.ReadOnlyField()
    last_modified = serializers.ReadOnlyField()

    class Meta:
        model = Board
        fields = ['owner', 'name', 'description',
                  'created_at', 'last_modified']


class SubTaskRelatedSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubTask
        fields = ['id', 'note', 'done']


class TaskRelatedSerializer(serializers.ModelSerializer):
    sub_tasks = SubTaskRelatedSerializer(many=True)

    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'sub_tasks', 'position']


class ColumnRelatedSerializer(serializers.ModelSerializer):
    tasks = TaskRelatedSerializer(many=True)

    class Meta:
        model = Column
        fields = ['id', 'name', 'position', 'tasks']


class BoardRelatedSerializer(serializers.ModelSerializer):
    columns = ColumnRelatedSerializer(many=True)

    class Meta:
        model = Board
        fields = ['id', 'name', 'description', 'columns']
