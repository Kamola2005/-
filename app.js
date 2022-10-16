let nav_right = document.querySelector(".nav_right").addEventListener("click",function(){
    let navigation = document.querySelector(".navigation")
    navigation.classList.add("open")
})
let close = document.querySelector(".close").addEventListener("click",function(){
    let navigation = document.querySelector(".navigation")
    navigation.classList.remove("open")
})



let send = document.querySelector(".send").addEventListener("click",function(){
    let name = document.querySelector(".name").value
    let mail = document.querySelector(".mail").value
    let text = document.querySelector(".text").value
    let modalFooterText = document.querySelector(".modal_footer__text")

    let modalText = document.querySelector(".modal_text")
    modalText.innerHTML = "Assalomu alaykum hurmatli "+name+". Sizning murojatingiz qabul qilindi. Tez orada biz siz bilan   ' "+mail+"  '  email orqali bog'lanamiz!"
    modalFooterText.innerHTML = "Biz sizning shu '"+text+"' talab va takliflaringizni o'ylab ko'ramiz!"
    let modal = document.querySelector(".modal")
    modal.classList.remove("hidden")
    name = ""
    mail = ""
    text = ""

})
let modalClose = document.querySelector(".modal_close").addEventListener("click",function(){
    let modal = document.querySelector(".modal")
    modal.classList.add("hidden")

})
document.addEventListener("keydown",(e)=>{
    if(e.key == "Escape"){
        console.log(("your are click escape"));
    }
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:6,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
  });