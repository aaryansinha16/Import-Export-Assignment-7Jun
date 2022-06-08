let query = async(url) => {
    // let q = document.querySelector("#search").value 
    
    // let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`

    let res = await fetch(url)
    let data = await res.json()
    
    // console.log(data.meals)
    // append(data.meals)
    return data.meals
}

let append = (data, container) => {
    if(data == Object){
        console.log(data)
    }
    else{
        data.forEach((elem) => {
            // console.log(elem)
            let box = document.createElement("div")
    
            let img = document.createElement("img")
            img.src = elem.strMealThumb
    
            let name = document.createElement("p")
            name.innerText = elem.strMeal 
    
            box.append(img, name)
            container.append(box)
        })
    }
    
}

export {query, append}