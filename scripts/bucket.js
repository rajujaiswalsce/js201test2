// On clicking remove button the item should be removed from DOM as well as localstorage.


let items = JSON.parse(localStorage.getItem("coffee"));


function gettotal(){
    let total = document.querySelector("#total_amount");

    // let x = 0;
    let price = items.reduce(function(sum,e,i){
        return sum + e.price;

    },0);
    total.innerHTML = price;
}
gettotal()


items.map(function(e,i){
    restore()

  function restore(){
      let bucket = document.getElementById("bucket")

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
       btn.innerText = "Remove";
       btn.setAttribute("id","remove_coffee")
       
   
       btn.addEventListener("click",function(){
           removedata(e,i)
       })
   
       div.append(image,title,price,btn)
   
       bucket.append(div)
  }

})

function removedata(e,i){
    items.splice(i,1);
    localStorage.setItem("coffee",JSON.stringify(items));
    window.location.reload();

}