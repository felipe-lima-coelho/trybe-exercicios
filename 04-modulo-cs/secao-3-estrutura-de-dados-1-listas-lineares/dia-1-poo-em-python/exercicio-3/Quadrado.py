from typing import Union
from Figura_geometrica import Figura_geometrica


class Quadrado(Figura_geometrica):
    def __init__(self, lado: int) -> None:
        self.lado = lado

    def area(self) -> Union[int, float]:
        return self.lado**2

    def perimetro(self) -> Union[int, float]:
        return self.lado * 4

    def __str__(self):
        return f"""
                Quadrado de lado {self.lado},
                área de {self.area()} e perímetro de {self.perimetro()}.
        """
