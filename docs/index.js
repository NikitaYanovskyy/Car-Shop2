document.addEventListener(`DOMContentLoaded` , ()=>{
// Mobile menu


// LOL Laughing
document.addEventListener(`click` , ()=>{
    location.href = 'https://www.google.com/search?q=jojo+5&hl=ru&tbm=isch&source=iu&ictx=1&fir=PCG5rNeaRj4VKM%253A%252ChUp56w2VNSLFFM%252C%252Fm%252F02pl2j4&vet=1&usg=AI4_-kRMXA7VJQa1m8DHneMuM-w3nMTnhw&sa=X&ved=2ahUKEwja3p-ah-TjAhVqoosKHaIOBhEQ_h0wE3oECAkQCQ#imgrc=PCG5rNeaRj4VKM:';
})


const 
menuButton = document.querySelector(`.burger`),
openMenu = document.querySelector(`.mobile-menu`),
closeMenu = document.querySelector(`.burger-close`),
main = document.querySelector(`main`);

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
const 
ulArray = document.querySelectorAll(`.search-options1 ul`),
optionsArray = document.querySelectorAll(`.search-border`);

// Select Buttons
const 
searchBTNFirst = document.querySelector(`.search-btn1`),
searchBTNSecond = document.querySelector(`.search-btn2`);
// Arows 
const 
searchArrow1 = document.querySelector(`.arrow1`);
searchArrow2 = document.querySelector(`.arrow2`);
// Grid blocks
const 
form1 = document.querySelector(`.form1`),
form2 = document.querySelector(`.form2`);
form2.style.display = `none`;

ulArray.forEach((e , i) =>{
    optionsArray[i].addEventListener(`click` , ()=>{
        ulArray.forEach(e =>{
            e.style.display = `none`;
            ulArray[i].style.display = `block`;
        })
        
    })
})

searchBTNFirst.addEventListener(`click` , ()=>{
    form2.style.display = `none`;
    form1.style.display = `grid`;
 
    searchBTNFirst.style.backgroundColor = `#fff`;
    searchBTNFirst.style.color = `#000`;
    searchBTNSecond.style.backgroundColor = `lightcoral`;
    searchBTNSecond.style.color = `#fff`;

    searchArrow2.style.display = `none`;
    searchArrow1.style.display = `block`;

})

searchBTNSecond.addEventListener(`click` , ()=>{
    form2.style.display = `grid`;
    form1.style.display = `none`;

    searchBTNSecond.style.backgroundColor = `#fff`;
    searchBTNSecond.style.color = `#000`;
    searchBTNFirst.style.backgroundColor = `lightcoral`;
    searchBTNFirst.style.color = `#fff`;

    searchArrow2.style.display = `block`;
    searchArrow1.style.display = `none`;

})
})


