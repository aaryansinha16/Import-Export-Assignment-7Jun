let prodData = JSON.parse(localStorage.getItem("prodData"))
// console.log(prodData)


let displayData = (data) => {
    let col1 = document.createElement("div")
    col1.setAttribute('class', 'col1')
    let img = document.createElement("img")
    img.src = data.strMealThumb

    let col2 = document.createElement("div")
    col2.setAttribute('class', 'col2')
    let name = document.createElement("h3")
    name.innerText = data.strMeal
    name.setAttribute("class",'name')
    let category = document.createElement("p")
    category.innerText = data.strCategory
    category.setAttribute('class','category')
    let area = document.createElement("p")
    area.innerText = data.strArea
    area.setAttribute("class", 'area')
    let instructions = document.createElement("p")
    instructions.innerText = data.strInstructions
    instructions.setAttribute("class",'instructions')
    let add = document.createElement("button")
    add.innerText = "Add Item"
    add.setAttribute("id", 'add')
    add.addEventListener('click', function(){
        cartFun(data)
    })

    console.log(name)
    col1.append(img)
    col2.append(name,category, area, instructions, add)

    document.querySelector("#content").append(col1, col2)
}
let cartArr = JSON.parse(localStorage.getItem("cartList")) || []
        let cartFun = (elem) => {
            // console.log(data)
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

displayData(prodData)