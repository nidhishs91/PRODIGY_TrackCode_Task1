window.addEventListener("scroll" , function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("fixed",window.scrollY > 0);
})
