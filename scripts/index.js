// Add the coffee to local storage with key "coffee"


// "https://masai-mock-api.herokuapp.com/coffee/menu"

let url = `https://masai-mock-api.herokuapp.com/coffee/menu` ;

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res.menu)
    itemsData(res.menu.data)

})


//append



function itemsData(data){
    let container = document.getElementById("menu")

data.map(function(e,i){

   let div = document.createElement("div")

   let image = document.createElement("img")
   image.src = e.image;

   let title  =document.createElement("p")
   title.innerText = e.title;
   title.setAttribute("class","title")

   let price = document.createElement("p")
   price.innerText = e.price;
   price.setAttribute("class","prices")

   let btn = document.createElement("button")
    btn.innerText = "Add to bucket";
    btn.setAttribute("id","add_to_bucket")

    btn.addEventListener("click",function(){
        additems(e,i)
    })

    div.append(image,title,price,btn)

    container.append(div)
   


})

function  additems(e,i){
    let index_array = JSON.parse(localStorage.getItem("coffee")) || []
    index_array.push(e);

    localStorage.setItem("coffee",JSON.stringify(index_array));


    // count 

    let count = document.getElementById("coffee_count")

   count.innerHTML = null
    count.innerHTML = JSON.parse(localStorage.getItem("coffee")).length;

}

  


}

