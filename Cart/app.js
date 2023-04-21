//   Toggle function      //both are right 


const data = [
    {
        id: 1,
        name: "Smart Phone",
        price: 10000,
        image: "images/smartphone.jpg"
        
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 2000,
        image: "images/smartwatch.jpg"
    },

    {
        id: 3,
        name: "Camera",
        price: 60000,
        image: "images/camera.jpg"
    },

    {
        id: 4,
        name: "Computer",
        price: 20000,
        image: "images/computer.jpg"
    },

    {
        id: 5,
        name: "Ear Phone",
        price: 500,
        image: "images/earphones.jpg"
    },
    {
        id: 6,
        name: "Ear Pods",
        price: 1500,
        image: "images/earpods.jpg"
    },

    {
        id: 7,
        name: "Head Phone",
        price: 1000,
        image: "images/headphone.jpg"
    },

    {
        id: 8,
        name: "Home Theatre",
        price: 5000,
        image: "images/hometheatre.jpg"
    },

    {
        id: 9,
        name: "LapTop",
        price: 80000,
        image: "images/laptop.webp"
    },

    {
        id: 10,
        name: "Tablet",
        price: 15000,
        image: "images/tablet.jpg"
    },

    {
        id: 11,
        name: "Speaker",
        price: 1000,
        image: "images/speakers.jpg"
    },
]
let totalpricetag = document.getElementById("totalprice")

const maincart = document.querySelector("#maincart")
let carts = document.querySelector(".carts")

let cartnum = document.querySelector(".cartnum") // dkwedeheh

const contianer = document.querySelector(".container")
let products = document.querySelector(".products")

let cartsdata = document.querySelector(".cartdata")



let add = carts.classList.add("hide")
maincart.addEventListener("click", cartopen)


let crosscancel= document.querySelector(".crosscancel").addEventListener("click", ()=>{
    carts.classList.add("hide")
  
    
 })


function cartopen() {


    if (carts.classList.contains("hide")) {
         carts.classList.remove("hide")
         
    } else {
        // boby.addEventListener("click" ,()=>{
        //     // carts.classList.add("hide")
        // })
    }

    //  let toggle = carts.classList.toggle("hide") 

    if(array.length===0){
        carts.classList.add("hide")
    }

}






function renderProduct(){
    data.map((elem) => {
        let { id, name, price, image } = elem
        //    console.log(arraydata)
    
        contianer.innerHTML +=
    
            ` <div class="products" ${id}>
       <img src="${image}" alt="">
       <h2>${name}</h2>
       <h3>  ${ price}</h3>
       <button class="addtocart" onclick="cartadd(${id})" >$ Add To Cart</button>
    </div>`
    
    
    
    
    
    
    })
}

renderProduct()





let array =  JSON.parse(localStorage.getItem("eid") ) || []
cartitemshow()







const addtocart = document.querySelector(".addtocart")


   // please do not write empty array before forEach() method
  
    function cartadd (id) {

       
       
        // array.some((arr)=> arr.id == b.target.id)
        let matchid = data.find((bata)=>bata.id==id)
        
        // console.log(matchid)
       let arrayfilter = array.some((arr)=> arr.id == id)   // Very Important
       if(arrayfilter){
        alert("You Already have The Same Product In Cart🛒")
        plus (id)
       }else{
        array.push( {...matchid , unit : 1})
      

       }
       localStorage.setItem("eid" , JSON.stringify(array))
       cartnumber ()
       totalprice ()
       
       
       cartitemshow()
    //  let add =carts.classList.add("s")
     
    
    //  b.target.removeEventListener("click", cartadd )
    } // event

    
   






function cartitemshow (){
    cartsdata.innerHTML = ""
        
       array.map((value) => {
   
        let { id, name, price, image , unit} = value
        
        // let cart = document.createElement("div")
        // cart.classList.add("cart")
        // cart.setAttribute("id" , id)
       
      
        cartsdata.innerHTML +=
        
        
    
    
    ` <div class="cart" id="${id}">
    <i class="fa-solid fa-circle-xmark crossmark" id="removebtn" onclick="cancelcartitem(${id})"></i>
    <img src="${image}" alt="">
    <h2>${name}</h2>
    <h3> $ ${price}</h3>
    <i class="fa-solid fa-plus plus"  onclick="plus(${id})"> </i>
    <h5 class="unit"  id="${id}">${unit}</h5>
    <i class="fa-solid fa-minus minus" onclick="minus(${id})"> </i>
    <h4>  $  ${price * unit}</h4>
    </div>
    `
    
    
    // cartsdata.appendChild(cart)
    
    
    
    
   
    
    
    })
    
    
}










function plus (id){
   
// let s= document.getElementById(id).children[5]
let number  = document.getElementsByClassName("unit")

array.forEach(element =>{
    
    if(id=== element.id && element.unit < 9  ){
     element.unit++
     

       
     localStorage.setItem("eid" , JSON.stringify(array))
        
    }
})

totalprice ()
cartitemshow()
cartnumber ()

}


function minus (id){
   
    let number  = document.getElementsByClassName("unit")
   
    array.forEach(element =>{
        
        
        if(id=== element.id && element.unit > 0){

             element.unit --
          
        }
        if(element.unit === 0){
            cancelcartitem (id)
           
        }


        if(array.length === 0){
            carts.classList.add("hide")
        }


        localStorage.setItem("eid" , JSON.stringify(array))

       
       
    })
    
    totalprice ()
    cartitemshow()
    cartnumber ()
    
    
}


function cancelcartitem (id){
 array =  array.filter((fil)=> fil.id!==id)
 cartitemshow()
 totalprice ()
 cartnumber ()
 if(array.length === 0){
 totalpricetag.innerHTML = 0
 carts.classList.add("hide")
}
 localStorage.setItem("eid" , JSON.stringify(array))
 
}


function totalprice (){
    
  let s =  0
    array.forEach(element =>{


      s +=   element.unit*element.price
      
      totalpricetag.innerHTML =  "$" + s 

    
      
        
    })
    
    
   
        
}




function cartnumber (){
let c = 0
    array.forEach(element => {
        c += element.unit
    });
    cartnum.innerHTML = c
    
   
}

cartnumber ()

let clearall = document.querySelector(".clearall").addEventListener("click" , emptyarray )
function emptyarray (){

    array =[]

    if(array.length === 0){
 totalpricetag.innerHTML = 0}
    if(array.length === 0){
        cartnum.innerHTML = 0
    }
 
    localStorage.setItem("eid" , JSON.stringify(array))

    carts.classList.add("hide")
    cartitemshow ()
    
}





