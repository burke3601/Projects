const ajax = (url, callback, method='GET')=>{
    if(!url) return console.error("Request Required")
    if(!callback) return console.error("Callback Required")
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", evt=>{
        let req = evt.target;
        if(req.readyState !== 4) return;
        if(req.status === 200) return callback(req.response)
        callback("")
    })
    request.open(method,url)
    request.send()
}

ajax("https://api.openbrewerydb.org/breweries?by_state=georgia",(results)=>{
    //declares data
    let data = JSON.parse(results)
    console.log(data)
        //send data from API to console
      
    let testDiv = document.createElement("div")
    
    
    data.forEach(item => {

        let liName = document.createElement("li")
        liName.innerHTML=(item.name)
        testDiv.append(liName)
        document.body.append(ul)
        //this is appending the brewery name to the body

            let nestedList = document.createElement("ul")
            let nestedLi = document.createElement("li")
            nestedLi.innerHTML=("Brewery Type: " + item.brewery_type)
            nestedList.append(nestedLi)
            liName.append(nestedList)
            //this appends the brewery type to the brewery name

                let nestedListCity = document.createElement("ul")
                let nestedLiCity = document.createElement("li")
                nestedLiCity.innerHTML=(item.city + ", GA")
                nestedListCity.append(nestedLiCity)
                liName.append(nestedListCity)
                //this appends the brewery location to the brewery type

                let nestedListPhone = document.createElement("ul")
                let nestedLiPhone = document.createElement("li")
                nestedLiPhone.innerHTML=("Phone Number: " + item.phone)
                nestedListPhone.append(nestedLiPhone)
                liName.append(nestedListPhone)
                //appends phone to location

                    let nestedListWeb = document.createElement("ul")
                    let nestedLiWeb = document.createElement("li")
                    nestedLiWeb.innerHTML=("Website: " + item.website_url)
                    nestedListWeb.append(nestedLiWeb)
                    liName.append(nestedListWeb)
                    //appends website to phone

        let closeButton =document.createElement("button")
        closeButton.innerHTML = ('X')
        liName.append(closeButton)
        liName.addEventListener("click", exitOut);
        //adds event listener

        liName.classList.add("liName")

    })

})


const exitOut = (e) => {
    if (e.target.tagName = "button"){
        e.target.parentNode.remove()
}}

//creates function to close
//need to figure out how to only apply to brewery name

