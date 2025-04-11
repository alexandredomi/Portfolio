const btnMenuOpen = document.querySelector("#btnMenuOpen")
const btnMenuClose = document.querySelector("#btnMenuClose")
const btnCurriculo = document.querySelector("#btn-download")
const btnCloseLinkMenuMobile = document.querySelectorAll("#closeLinkMenuMobile");
const menuMobile = document.querySelector(".menuMobile")

//abrir e fechar menu mobile 
btnMenuOpen.addEventListener("click", function() {
    menuMobile.classList.add("flex")
})
btnMenuClose.addEventListener("click", function() {
    menuMobile.classList.remove("flex")
})
//fechando menu mobile ao clicar no links de direcionamento 
btnCloseLinkMenuMobile.forEach((btn) => {
    btn.addEventListener("click", function() {
        menuMobile.classList.remove("flex");
    });
});
btnCurriculo.addEventListener('click', ()=>{
    alert('curriculo baixado')
})