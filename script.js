const btnMenuOpen = document.querySelector("#btnMenuOpen")
const btnMenuClose = document.querySelector("#btnMenuClose")
const btnCurriculo = document.querySelector("#btn-download")
const btnCloseLinkMenuMobile = document.querySelectorAll("#closeLinkMenuMobile");

const menuMobile = document.querySelector(".menuMobile")

btnMenuOpen.addEventListener("click", function() {
    menuMobile.classList.add("flex")
})
btnMenuClose.addEventListener("click", function() {
    menuMobile.classList.remove("flex")
})
btnCloseLinkMenuMobile.forEach((btn) => {
    btn.addEventListener("click", function() {
        menuMobile.classList.remove("flex");
    });
});
btnCurriculo.addEventListener('click', ()=>{
    alert('curriculo baixado')
})

 