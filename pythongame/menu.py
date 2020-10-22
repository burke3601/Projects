#menu
  
menu = {
    "Main":{
        "options":["Move"],
        "accept_input":True,
        "on_accept":{
            "action_on":"menu",
            "action":"show_menu_item"
        }
    }, 
    "Move":{
        "options":["up","down","left","right"],
        "accept_input":True,
        "on_accept":{
            "action_on":"player",
            "action":"move"
        }
    }
}