
from Unit import Unit, Player
from Item import Item, Pepperoni
from Menu import Menu

name = input("What is your name?\n")
print(f"Hi Chef {name}! We have a tough task ahead of us. ")
player =Player(name, [0,0])

enemies = [
    Unit("banana peel", [2,3], 10, 2),
    Unit("water spill", [4,1], 10, 2)
]

items = [
    Item("mushrooms", [5,5]),
    Pepperoni("pepperonis", [4,5]),
    Item("crushed red pepper", [3,5]),
    Item("oven", [1,0])
    
    
]

menu = ["Move up", "Move Down", "Move Left", "Move Right"]


playing = True
while playing:
    print(player)
    # show_menu()
    try:
        action = int(input("What is your choice?\n1 to go up\n2 to go down \n3 to go left \n4 to go right\n"))
    except ValueError:
        print("You must enter a valid entry.")
        action = None

    if action:
        if action == 1:
            player.move("up")
        elif action == 2:
            player.move("down")
        elif action == 3:
            player.move("left")
        elif action == 4:
            player.move("right")
        else:
            if action-4 <= len(player.inventory):
                player.inventory[action-5].use()    

    for enemy in enemies:
        if enemy.position == player.position:
            print(f"You ran into {enemy.name}:")
            
        
    for item in items:
        if item.position == player.position:
            if item.name == "oven":
                playing == False
                print("You made it to the oven. Pop it in and enjoy!")
         
                
            else:
                print(f"You found the {item.name}. Keep looking for more toppings")
                player.pickup_item(item)
    



    # if item.name == "mushrooms":
    #             playing = True
    #             print("You found the Mushrooms. ")

    #         if item.name == "pepperonis":
    #             playing = True
    #             print("You found the pepperonis. ")