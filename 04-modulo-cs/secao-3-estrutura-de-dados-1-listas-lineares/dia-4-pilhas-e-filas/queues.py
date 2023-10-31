from lists.linked_list import LinkedList
from lists.node import Node


class Queue:
    def __init__(self) -> None:
        self.data = LinkedList()

    def enquere(self, value: int) -> None:
        self.data.insert_last(value)

    def dequeue(self) -> Node:
        first_node_removed = self.data.remove_first()
        return first_node_removed

    def peek(self) -> Node:
        first_node = self.data.head_value
        return first_node

    def is_empty(self) -> bool:
        return self.data.is_empty()

    def __str__(self) -> str:
        return self.data
