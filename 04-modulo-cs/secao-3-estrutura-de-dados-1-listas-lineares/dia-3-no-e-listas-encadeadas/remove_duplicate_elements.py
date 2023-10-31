from linked_list_content import LinkedList


class RemoveDuplicateElements:
    @staticmethod
    def remove(self, linked_list: LinkedList) -> LinkedList:
        values_list = self.get_all_unique_values_list(linked_list)
        new_linked_list = LinkedList()

        for value in values_list:
            new_linked_list.insert_last(value)

        return new_linked_list

    def get_all_unique_values_list(self) -> list:
        values_list = []
        current_node = self.linked_list.head_value

        while current_node:
            value = current_node.value

            if value not in values_list:
                values_list.append(value)

            current_node = current_node.next

        return values_list


if __name__ == "__main__":
    linked_list = LinkedList()

    linked_list.insert_first(1)
    linked_list.insert_last(1)
    linked_list.insert_last(2)

    print(linked_list)

    # new_linked_list = RemoveDuplicateElements.remove(linked_list)
    # print(new_linked_list)
