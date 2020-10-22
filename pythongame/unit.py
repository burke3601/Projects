
class Unit:
    def __init__(self, name, position, patience = 10, attack_power = 2):
        self.name = name
        self.position = position
        self.patience = patience
        

    def move(self, dir):
        if dir == "up":
            self.position = [self.position[0], self.position[1]-1]
        elif dir == "down":
            self.position = [self.position[0], self.position[1]+1]
        elif dir == "left":
            self.position = [self.position[0]-1, self.position[1]]
        elif dir == "right":
            self.position = [self.position[0]+1, self.position[1]]

    def lose_patience(self, attack_power):
        self.patience = self.patience - attack_power
    


class Chef(Unit):
    def __init__(self, name, position, patience = 10, attack_power = 2)
    super().__init__(name,position,patience, attack_power)
    self.inventory =[]

    def __str__(self):
        inv = ""

       
    