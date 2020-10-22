class Item:
    def __init__(self, name, position):
        self.name = name 
        self.position = position

class Toppings(Item):
    def __init__(self):
        