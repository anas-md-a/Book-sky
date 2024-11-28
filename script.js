// select cls(add-btn,pop-form,pop-black)
 
var popform=document.querySelector(".pop-form")
 var popblack=document.querySelector(".pop-black")
 var addbtn=document.querySelector(".add-btn")

 addbtn.addEventListener("click",function(event){
    event.preventDefault()
    popform.style.display="block"
    popblack.style.display="block"

 })

 // select id(book-name,author-name,book-desc,add-book,cancel-book)

var bookname=document.getElementById("book-name")
var authorname=document.getElementById("author-name")
var bookdesc=document.getElementById("book-desc")
var addbook=document.getElementById("add-book")
var cancelbook=document.getElementById("cancel-book")

cancelbook.addEventListener("click",function(event){
    event.preventDefault()
    popform.style.display="none"
    popblack.style.display="none"

})

//select cls(container,box-container)

var container=document.querySelector(".container")
var boxcontainer=document.querySelector(".box-container")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","box-container")
    
    div.innerHTML=`<h3>${bookname.value}</h3>
                    <h5>${authorname.value}</h5>
                    <p>${bookdesc.value}</p>
                    <button id="delete-box" onclick="deletebox(event)">Delete</button>`

    container.append(div)

})

//select id(delete-box)


function deletebox(event){
    event.target.parentElement.remove()
}
