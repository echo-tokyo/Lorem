const mySlider = new Splide('#mySlider', {
    perPage: 4,
    gap: '10px',
    pagination: false,
    breakpoints: {
        1900: {
            perPage: 3,
        }
    }
}) 
mySlider.mount()