let id

async function getData(){

    let q = document.querySelector("#search").value

    let url =  `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`

    let res = await fetch(url)

    let data = await res.json()

    console.log(data)
    // append(data.meals)
    if(q != ''){
        return data.meals
    }
    }

    // getData()

    function append(data){
        console.log(data)
        let results = document.querySelector("#results")
        results.innerHTML = null
        data.forEach(function(elem){
            let box = document.createElement("div")
            let p = document.createElement('p')
            p.innerText = elem.strMeal

            box.append(p)
            results.append(box)
        })
    }

    async function main(){
        let data = await getData()

        append(data)
    }

    function debouncing(func, delay){
        if(id){
            clearTimeout(id)
        }

        id = setTimeout(function(){
                func()
            }, delay)
    }