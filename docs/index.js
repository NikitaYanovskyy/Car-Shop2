// Mobile menu

const menuButton = document.querySelector(`.burger`);
const openMenu = document.querySelector(`.mobile-menu`);
const closeMenu = document.querySelector(`.burger-close`);
const main = document.querySelector(`main`);

menuButton.addEventListener(`click` , ()=>{
    openMenu.style.display = `block`;
    main.style.transition = `all 0.2s ease-in-out`;
    main.style.opacity = `0.5`;
})
closeMenu.addEventListener(`click` , ()=>{
    openMenu.style.display = `none`;
    main.style.opacity = `1`;
})


// Search bar 
const ulArray = document.querySelectorAll(`.search-options1 ul`);
const optionsArray = document.querySelectorAll(`.search-border`);

ulArray.forEach((e , i) =>{
    optionsArray[i].addEventListener(`click` , ()=>{
        ulArray.forEach(e =>{
            e.style.display = `none`;
            ulArray[i].style.display = `block`;
        })
        
    })
})