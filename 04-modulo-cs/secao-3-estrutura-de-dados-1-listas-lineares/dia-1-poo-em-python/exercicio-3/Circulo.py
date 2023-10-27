from typing import Union
from Figura_geometrica import Figura_geometrica


class Circulo(Figura_geometrica):
    def __init__(self, raio: int) -> None:
        self.raio = raio

    def area(self) -> Union[int, float]:
        return 3.14 * self.raio**2

    def perimetro(self) -> Union[int, float]:
        return 2 * 3.14 * self.raio

    def __str__(self):
        return f"""
                Círculo de raio {self.raio},
                área de {self.area()} e perímetro de {self.perimetro()}.
        """
