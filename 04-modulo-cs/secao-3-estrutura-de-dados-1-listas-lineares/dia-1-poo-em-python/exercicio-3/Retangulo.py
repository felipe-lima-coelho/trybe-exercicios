from typing import Union
from Figura_geometrica import Figura_geometrica


class Retangulo(Figura_geometrica):
    def __init__(self, base: int, altura: int) -> None:
        self.base = base
        self.altura = altura

    def area(self) -> Union[int, float]:
        return self.base * self.altura

    def perimetro(self) -> Union[int, float]:
        return (self.base + self.altura) * 2

    def __str__(self):
        return f"""
                Retângulo de base {self.base} e altura {self.altura},
                área de {self.area()} e perímetro de {self.perimetro()}.
        """
