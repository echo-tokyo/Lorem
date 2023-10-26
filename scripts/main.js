const mySlider = new Splide('#mySlider', {
    perPage: 4,
    gap: '10px',
    rewind: true,
    rewindByDrag: true,
    breakpoints: {
        1900: {
            perPage: 3,
        },
        980: {
            perPage: 2,
        },
        630: {
            perPage: 1,
            arrows: false,
        }
    }
}) 
mySlider.mount()

// анимации
// const animItems = document.querySelectorAll('._anim-items');
// if(animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index]; // каждый элемент animItem получает каждый элемент массива
//             const animItemHeight = animItem.offsetHeight; // высота объекта
//             const animItemOffset = offset(animItem).top // насколько ниже объект находится относительно верха страницы
//             const animStart = 4; // коэффициент который регулирует момент старта анимации

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight)  {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
//                 animItem.classList.add('_active');
//             } else {{}
//                 if(!animItem.classList.contains('_anim-no-hide')){
//                     animItem.classList.remove('_active');
//                 }
//             }
//         }
//         function offset(el){
//             const rect = el.getBoundingClientRect(),
//                 scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//                 scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//         }
//     }
//     setTimeout(() => {
//         animOnScroll();
//     }, 300);
// }