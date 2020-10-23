
class Item:
    def __init__(self, name, position):
        self.name = name 
        self.position = position
    def use(self):
        self.owner.patience += 10
        for i in range(len(self.owner.ingredients)):
            if self.owner.ingredients[i] == self:
                del self.owner.ingredients[i]
            self.owner = None
    def get_picked_up(self,owner):
        self.owner = owner
        self.position = [ -555,-555]

# class Pepperoni(Item):
#     def __init__(self, name, position):
#         super().__init__(name,position)
#         self.owner = None

#     def use(self):
#         self.owner.patience += 10
#         for i in range(len(self.owner.inventory)):
#             if self.owner.inventory[i] == self:
#                 del self.owner.inventory[i]
#             self.owner = None
#     def get_picked_up(self,owner):
#         self.owner = owner
#         self.position = [ -555,-555]
      
        
        
