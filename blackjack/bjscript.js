const dealCards= function(){
    console.log('dealCards workd')
}

let button = document.querySelector("#deal-button")
button.onclick = function(){
    button.addEventListener("click", dealCards)
}



// document.getElementById("deal-button").addEventListener("click", dealCards);

// function dealCards(){
//     document.
// }



// button.onclick = function(){
//     button.addEventListener("click", dealCards)
// }



