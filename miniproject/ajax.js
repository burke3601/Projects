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

ajax("https://api.openbrewerydb.org/breweries?per_page=1000",(results)=>{
    
    let data = JSON.parse(results)
    console.log(data)

    let ul = document.createElement("ul")
    data.forEach(item => {
        let li = document.createElement("li")
        li.innerHTML=JSON.stringify(item.name)
        ul.append(li)
        document.body.append(ul)

        let nestedList = document.createElement("ul")
        let nestedLi = document.createElement("li")
        nestedLi.innerHTML=JSON.stringify(item.brewery_type)
        nestedList.append(nestedLi)
        li.append(nestedList)

        let nestedListCity = document.createElement("ul")
        let nestedLiCity = document.createElement("li")
        nestedLiCity.innerHTML=JSON.stringify(item.city)
        nestedListCity.append(nestedLiCity)
        li.append(nestedListCity)
        



    })






    // let li = document.createElement("li")
    // li.append(results)
    // document.body.append(li)

    
})

