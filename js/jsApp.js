
$(document).ready(function (){

let navbar=document.querySelector(".navbar");
let navtoglle=document.querySelector('.nav-toggle')

let cartItem=document.querySelector('.cart-items-container')

let searchForm=document.querySelector('.search-from')

document.querySelector('.nav-toggle').onclick=()=>{
navbar.classList.toggle("active")
   navtoglle.classList.toggle('active')

    cartItem.classList.remove('active')
    searchForm.classList.remove('active')
}

document.querySelector('#cart-btn').onclick=()=>{
    cartItem.classList.toggle('active')
    navbar.classList.remove("active")
    navtoglle.classList.remove('active')
    searchForm.classList.remove('active')
}

document.querySelector('#search-btn').onclick=()=>{
searchForm.classList.toggle('active')
    navbar.classList.remove("active")
    navtoglle.classList.remove('active')
    cartItem.classList.remove('active')
}
window.onscroll=()=>{
    navbar.classList.remove("active")
    navtoglle.classList.remove('active')
    cartItem.classList.remove('active')
    searchForm.classList.remove('active')
}
    $("#home").on('click',function (event){
        event.preventDefault()

        let homeBlock=$('#home').offset().top;
        window.scroll(homeBlock)
    })


    $("#about").on('click',function (event){
    event.preventDefault()

    let aboutBlock=$('#aboutBlock').offset().top;
    window.scroll(0,aboutBlock-140)
})
$("#menu_link").on('click',function (event){
    event.preventDefault()
    let menuBlock=$('.menu').offset().top;
    window.scroll(0,menuBlock-135)
})
    $("#products").on('click',function (event){
        event.preventDefault()
        let productsBlock=$('.products').offset().top;
        window.scroll(0,productsBlock-135)
    })
    $("#reviews_link").on('click',function (event){
        event.preventDefault()
        let reviewsBlock=$('.reviews').offset().top;
        window.scroll(0,reviewsBlock-135)
    })
    $("#contact_link").on('click',function (event){
        event.preventDefault()
        let contactsBlock=$('.contact').offset().top;
        window.scroll(0,contactsBlock-135)
    })
    $("#blog_link").on('click',function (event){
        event.preventDefault()
        let blogBlock=$('.blog').offset().top;
        window.scroll(0,blogBlock-135)
    })
// let aboutBlock=document.getElementsByClassName('.about')
// console.log($('.about').offset().top)

})
