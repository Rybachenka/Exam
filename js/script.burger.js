let burger = document.querySelector('.icon');
let menuBody = document.querySelector('.menu-header');

if (burger){
    burger.addEventListener("click", function(e){
        burger.classList.toggle('active');
        menuBody.classList.toggle('active');
    })
}