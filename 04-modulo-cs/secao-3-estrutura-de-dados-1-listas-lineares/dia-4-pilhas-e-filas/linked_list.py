from node import Node


class LinkedList:
    def __init__(self) -> None:
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def __get_node_at(self, position: int) -> Node:
        current_node = self.head_value

        if current_node:
            while position > 0 and current_node.next:
                current_node = current_node.next
                position -= 1

        return current_node

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.__get_node_at(position)
        if value_to_be_returned:
            value_returned = Node(value_to_be_returned.value)

        return value_returned

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)

        current_value = self.__get_node_at(position - 1)
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

    def insert_first(self, value: int) -> None:
        new_firt_node = Node(value)
        new_firt_node.next = self.head_value
        self.head_value = new_firt_node
        self.__length += 1

    def insert_last(self, value: int):
        if not self.head_value:
            return self.insert_first(value)

        size = self.__length
        current_node = self.__get_node_at(size - 1)
        new_node = Node(value)
        current_node.next = new_node
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1

        return value_to_be_removed

    def remove_last(self):
        if self.__length <= 1:
            return self.remove_first()

        previous_to_be_removed = self.__get_node_at(len(self) - 2)
        value_to_be_removed = previous_to_be_removed.next

        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.__get_node_at(position - 1)

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def is_empty(self):
        return not self.__length
