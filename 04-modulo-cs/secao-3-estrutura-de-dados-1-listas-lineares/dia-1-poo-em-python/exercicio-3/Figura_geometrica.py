from typing import Union
from abc import ABC, abstractmethod


class Figura_geometrica(ABC):
    @abstractmethod
    def area(self) -> Union[int, float]:
        raise NotImplementedError

    @abstractmethod
    def perimetro(self) -> Union[int, float]:
        raise NotImplementedError
