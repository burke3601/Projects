
from Unit import Unit, Player
from Item import Item
from Menu import Menu

from subprocess import call 
import os 
def clear(): 
    call('clear' if os.name =='posix' else 'cls') 



playing = True
while playing:
    clear()

    print('Welcome to Crazy Kitchen!')
    name = input("What is your name?\n")

    print(f"""
    Hi Chef {name}! 
    The kitchen is a mess. Ingredients have been left all over the place. Try to gather ingredients to make a pizza before you lose your patience! 
    """)

    player =Player(name, [2,2])

    enemies = [
        Unit("banana peel", [3,3]),
        Unit("water spill", [4,1]),
        Unit("gum", [2,4]),
        Unit("broken glass", [3,4]),
        Unit("trash", [0,5]),
        Unit("Gordon Ramsey", [1,4])
    ]
    items = [
        Item("mushrooms", [5,5]),
        Item("pepperonis", [4,5]),
        Item("crushed red pepper", [3,5]),
        Item("extra cheese", [2,5]),
        Item("oven", [4,0])    
    ]

    playing = True
    while playing:
        print(player)
        
        try:
            action = int(input("Make a move:\n1 to move up\n2 to move down \n3 to move left \n4 to move right\n"))
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
               

        for enemy in enemies:
            if enemy.position == player.position:
                
                if enemy.name == "banana peel" or enemy.name == "water spill":
                    print(f"You just slipped on a  {enemy.name}! Be careful and keep looking for those toppings!")
                    enemy.attack(player)
                    print("Your patience is being tested!")
                elif enemy.name == "gum":
                    print(f"You just stepped in {enemy.name}! Gross!")
                    enemy.attack(player)
                    print("Your patience is being tested!")
                elif enemy.name == "broken glass":
                    print(f"You just dropped a plate. Now you have to clean up {enemy.name}!")
                    enemy.attack(player)
                    print("Your patience is being tested!")

                elif enemy.name == "Gordon Ramsey":
                    print(f"{enemy.name} just insulted your dough kneading technique...")
                    enemy.attack(player)
                    print("This might push you over the edge!")
                elif enemy.name == "trash":
                    print(f"Your boss just told you to take out the {enemy.name} to the smelly dumpster...")
                    enemy.attack(player)
                    print("and it's raining so now you're soaking wet.")       
            
        for item in items:
            if item.position == player.position:
                if item.name == "oven":
                    answer = input("You made it to the oven. Are you ready to bake?\nType: yes or no\n")
                    if answer == "yes":
                        playing = False
                        print("Enjoy your pizza!")
                    elif answer == "no":
                        print("Keep looking for toppings and watch your step!")
                        print(action)
                    elif answer != "yes" or answer != "no":
                        print("Invalid entry.")
                        print(action)
                        
                else:
                    item_answer = input(f"You found the {item.name}. Do you want {item.name}?\n yes or no\n")
                    if item_answer == "yes":
                        player.pickup_item(item)
                        print("Keep looking for toppings and watch your step!")
                    elif item_answer == "no":
                        print("Keep looking for toppings and watch your step!")
                        print(action)
                    else:
                        print("Invalid entry.")
                        print(item_answer)

        if player.patience == 2:
            print("Be careful! Your patience is dwindling!")
        if player.patience <= 0:
            print("Oh no!")
            print("You can't handle the heat! Game over!")
            playing = False
        
        if player.position >= [7,7]:
            print("Don't leave! Come back into the kitchen!")
            print(action)
        elif player.position <= [-1,-1]:
            print("Don't leave! Come back into the kitchen!")
            print(action)






    # elif player.position >= [0-1]:
    #     print("Don't leave! Come back into the kitchen!")
    #     print(action)
    # elif player.position <= [-1,0]:
    #     print("Don't leave! Come back into the kitchen!")
    #     print(action)
    

    

    # if player.patience <= 6:
    #     playing == False
    #     print("You can't handle the heat! Game over!") 
    
    # if player.patience <= 0:
    #         playing = False
    #         print("\n\nOh No!!!!!")
    #         print("Can't handle the heat, get out of the kitchen!")


    # if item.name == "mushrooms":
    #             playing = True
    #             print("You found the Mushrooms. ")

    #         if item.name == "pepperonis":
    #             playing = True
    #             print("You found the pepperonis. ")