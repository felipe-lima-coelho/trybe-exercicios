class Estatistica:
    def __init__(self, numbers: list):
        self.__numbers = numbers

    def media(self):
        return sum(self.__numbers) / len(self.__numbers)

    def mediana(self):
        numbers = sorted(self.__numbers)
        if len(numbers) % 2 == 0:
            return (
                numbers[len(numbers) // 2] + numbers[(len(numbers) // 2) - 1]
            ) / 2
        else:
            return numbers[(len(numbers) // 2)]

    def moda(self):
        numbers = sorted(self.__numbers)
        moda = []
        for i in range(len(numbers)):
            if numbers.count(numbers[i]) > 1:
                moda.append(numbers[i])
        return moda
