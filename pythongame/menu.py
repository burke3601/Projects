# menu = {
#     "Main":{
#         "options":["Move"],
#         "accept_input":True,
#         "on_accept":{
#             "action_on":"menu",
#             "action":"show_menu_item"
#         }
#     }, 
#     "Move":{
#         "options":["up","down","left","right"],
#         "accept_input":True,
#         "on_accept":{
#             "action_on":"player",
#             "action":"move"
#         }
#     }
# }

class Menu:
    def __init__(self,player):
        self.player = player

    def show_menu_item(self, key):
        menu_item = menu[key]
        options = menu_item["options"]
        for i in range(len(options)):
            print(f"{i+1}. {options[i]}")
        
        # if menu_item["accept_input"]:
        #     res = int(input("Make your choice.\n"))
        #     value = options[res-1]
        #     print(f"You Chose {value}")

        #     do_on = menu_item["on_accept"]["action_on"]

        #     if do_on == "menu":
        #         getattr(self, menu_item["on_accept"]["action"])(value)
        #         #self.show_menu_item(value)
        #     if do_on == "player":
        #         getattr(self.player, menu_item["on_accept"]["action"])(value)