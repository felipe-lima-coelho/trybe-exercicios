class Tv:
    def __init__(self, tamanho):
        self.__tamanho = tamanho
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False

    def aumentar_volume(self):
        if self.__ligada and self.__volume <= 98:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__ligada and self.__volume >= 1:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if self.__ligada and 1 < canal > 99:
            raise ValueError("Canal inválido")

        if self.__ligada:
            self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def __str__(self):
        return f"""
            TV de {self.__tamanho} polegadas,
            Canal {self.__canal} no volume {self.__volume}.
            Está ligada? {self.__ligada}.

        """
