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
    container.innerHTML = null
    if(data == Object){
        // console.log(data)
    }
    else{
        data.forEach((elem) => {
            
            // console.log(elem.idMeal)
            let box = document.createElement("div")
            
            let img = document.createElement("img")
            img.src = elem.strMealThumb
            
            let name = document.createElement("p")
            name.innerText = elem.strMeal 
            
            let add = document.createElement("button")
            add.innerText = "Add Item"
            add.setAttribute("id", 'add')
            add.addEventListener('click', function(){
                cartFun(elem)
            })
            
            let prodData = {
                idMeal: elem.idMeal,
                strArea: elem.strArea,
                strInstructions: elem.strInstructions,
                strMeal: elem.strMeal,
                strMealThumb: elem.strMealThumb,
                strCategory: elem.strCategory
            }
            img.onclick = () => {
                prodDisFun(prodData)
            }
            name.onclick = () => {
                prodDisFun(prodData)
            }


            box.append(img, name, add)
            container.append(box)
        })

        let cartArr = JSON.parse(localStorage.getItem("cartList")) || []
        let cartFun = (elem) => {
            let a = cartArr.filter(function(el){
                return el.idMeal == elem.idMeal
              })
              
              if(a.length == 0){
                cartArr.push(elem)
                alert("Item added to cart")
                localStorage.setItem("cartList", JSON.stringify(cartArr))
              }
              else{
                alert("Product already added")
              }
        }
    }
    
}

let prodDisFun = (prodData) => {
    localStorage.setItem("prodData", JSON.stringify(prodData))

    window.location.href = 'prodDis.html'
}

export {query, append}