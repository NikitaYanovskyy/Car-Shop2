document.addEventListener(`DOMContentLoaded` , ()=>{
// Mobile menu
//alert(`Сайт поки що у розробці`);

// LOL Laughing
//document.addEventListener(`click` , ()=>{
//   location.href = 'https://www.google.com/search?q=jojo+5&hl=ru&tbm=isch&source=iu&ictx=1&fir=PCG5rNeaRj4VKM%253A%252ChUp56w2VNSLFFM%252C%252Fm%252F02pl2j4&vet=1&usg=AI4_-kRMXA7VJQa1m8DHneMuM-w3nMTnhw&sa=X&ved=2ahUKEwja3p-ah-TjAhVqoosKHaIOBhEQ_h0wE3oECAkQCQ#imgrc=PCG5rNeaRj4VKM:';
//})


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

// Switchers
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

//Advertisement

const advertisementWrapper = document.querySelector(`.advertisment-wrapper`);
const advertismentButton = document.querySelector(`.advertisment-wrapper a`);

advertisementWrapper.addEventListener(`mouseover` , ()=>{
    advertismentButton.style.transform = `scale(1)`;
})
advertisementWrapper.addEventListener(`mouseout` , ()=>{
    advertismentButton.style.transform = `scale(0.9)`;
})


//Footer

const FooterButtonOne = document.querySelector(`.footer-btn1`);
const FooterButtonTwo = document.querySelector(`.footer-btn2`);
const FooterButtonThree = document.querySelector(`.footer-btn3`);

const FooterArrOne = document.querySelectorAll(`.our-company`);
const FooterArrTwo = document.querySelectorAll(`.buying-selling`);
const FooterArrThree = document.querySelectorAll(`.our-partners`);


if(window.matchMedia(`(max-width: 428px)`).matches){
    FooterButtonOne.addEventListener(`click` , ()=>{
        FooterButtonOne.childNodes[1].classList.toggle(`arrow-block`);
        FooterButtonOne.childNodes[2].classList.toggle(`arrow-none`);
        FooterArrOne.forEach(e =>{
        e.classList.toggle(`hidden`);
        })
    })
    
    FooterButtonTwo.addEventListener(`click` , ()=>{
        console.log(FooterButtonTwo.childNodes);
        FooterButtonTwo.childNodes[1].classList.toggle(`arrow-block`);
        FooterButtonTwo.childNodes[2].classList.toggle(`arrow-none`);
        FooterArrTwo.forEach(e =>{
        e.classList.toggle(`hidden`);
        })
    })
    
    FooterButtonThree.addEventListener(`click` , ()=>{
        FooterButtonThree.childNodes[1].classList.toggle(`arrow-block`);
        FooterButtonThree.childNodes[2].classList.toggle(`arrow-none`);
        FooterArrThree.forEach(e =>{
        e.classList.toggle(`hidden`);
        })
    })
}


//Javascript advertisement

const JSButtonOne = document.querySelector(`.javascript-select h5:nth-child(1)`);
const JSButtonTwo = document.querySelector(`.javascript-select h5:nth-child(2)`);
const JSButtonThree = document.querySelector(`.javascript-select h5:nth-child(3)`);

const JSTextOne = document.querySelector(`.javascript-text p:nth-child(1)`);
const JSTextTwo = document.querySelector(`.javascript-text p:nth-child(2)`);
const JSTextThree = document.querySelector(`.javascript-text p:nth-child(3)`);

// Spans
const SpanArr = document.querySelectorAll(`.javascript-select h5 span`);

//Images

const JsImages = document.querySelectorAll(`.javascript-advertisment img`);

JsImages[1].style.opacity = `0`;
JsImages[2].style.opacity = `0`;
JsImages.forEach(e=>{
    e.style.transition = `all 0.3s ease-in-out`;
})

// opacity and left = 0
JSTextOne.style.left = `0`;
JSTextTwo.style.opacity = `0`;
JSTextThree.style.opacity = `0`;
SpanArr[0].style.width = `100%`;


//Button events
JSButtonOne.addEventListener(`click` , ()=>{

//Image manipulation
JsImages[0].style.opacity = `1`;
JsImages[0].style.transform = `scale(1.1)`;
JsImages[1].style.opacity = `0`;
JsImages[1].style.transform = `scale(1)`;
JsImages[2].style.opacity = `0`;
JsImages[2].style.transform = `scale(1)`;

//Buttons manipulation
    JSTextOne.style.opacity = `1`;
    JSTextOne.style.left = `0`;

    JSTextTwo.style.opacity = `0`;
    JSTextTwo.style.left = `30px`;

    JSTextThree.style.opacity = `0`;
    JSTextThree.style.left = `30px`;
    setTimeout(()=>{
    JSTextTwo.style.left = `-30px`;
    JSTextThree.style.left = `-30px`;
    }, 200)

//Span manipulation
    SpanArr.forEach(e=>{
        e.style.width = '0';
    })
    JSButtonOne.childNodes[1].style.width = `100%`;
})


JSButtonTwo.addEventListener(`click` , ()=>{

//Image manipulation
JsImages[0].style.opacity = `0`;
JsImages[0].style.transform = `scale(1)`;
JsImages[1].style.opacity = `1`;
JsImages[1].style.transform = `scale(1.1)`;
JsImages[2].style.opacity = `0`;
JsImages[2].style.transform = `scale(1)`;

//Buttons manipulation
    JSTextTwo.style.opacity = `1`;
    JSTextTwo.style.left = `0`;

    JSTextOne.style.opacity = `0`;
    JSTextOne.style.left = `30px`;

    JSTextThree.style.opacity = `0`;
    JSTextThree.style.left = `30px`;
    setTimeout(()=>{
    JSTextOne.style.left = `-30px`;
    JSTextThree.style.left = `-30px`;
    }, 200)

//Span manipulation
    SpanArr.forEach(e=>{
        e.style.width = '0';
    })
    JSButtonTwo.childNodes[1].style.width = `100%`;
})
JSButtonThree.addEventListener(`click` , ()=>{

//Image manipulation
     JsImages[0].style.opacity = `0`;
     JsImages[0].style.transform = `scale(1)`;
     JsImages[1].style.opacity = `0`;
     JsImages[1].style.transform = `scale(1)`;
     JsImages[2].style.opacity = `1`;
     JsImages[2].style.transform = `scale(1.1)`;

//Buttons manipulation
    JSTextThree.style.opacity = `1`;
    JSTextThree.style.left = `0`;

    JSTextTwo.style.opacity = `0`;
    JSTextTwo.style.left = `30px`;

    JSTextOne.style.opacity = `0`;
    JSTextOne.style.left = `30px`;
    setTimeout(()=>{
    JSTextOne.style.left = `-30px`;
    JSTextTwo.style.left = `-30px`;
    }, 200)

//Span manipulation
    SpanArr.forEach(e=>{
        e.style.width = '0';
    })
    JSButtonThree.childNodes[1].style.width = `100%`;
})