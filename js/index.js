const nextBtn = document.getElementById('next-btn')
const prevBtn = document.getElementById('prev-btn')
const bannerSliderItem = document.querySelectorAll('.banner-slider-item')
const pagnition = document.querySelector('.pagnition')

let current = 1
const bannerPosition = [100,0,-100]

for (let index = 0; index < bannerPosition.length; index++) {
    const dot = document.createElement("div");
    dot.classList.add('pagnition-item')
    dot.classList.add('rounded')
    index === current && dot.classList.add('active')
    pagnition.appendChild(dot)
}

const pagnitionItem = document.querySelectorAll('.pagnition-item')
const scrollToX = (position) => {
    if( position >= 0 && position < bannerPosition.length) {
        current = position
        prevBtn.style.opacity = position === 0 ? '0' : '1'
        nextBtn.style.opacity = position == (bannerPosition.length - 1) ? '0' : '1'
    }
    bannerSliderItem.forEach((item) => 
        item.style.transform = `translateX(${bannerPosition[current]}%)`
        // item.animate(
        // { transform: 'translateX(-100%)' },
        // {
        //     duration: 1000,
        //     iterations: 1,
        // }
    // )
    )
    pagnitionItem.forEach((item, index) => index === current ? item.classList.add('active') : item.classList.remove('active'))
}
 nextBtn.addEventListener('click', () => scrollToX(current + 1))
 prevBtn.addEventListener('click', () => scrollToX(current - 1))
 pagnitionItem.forEach((item, index) => item.addEventListener('click', () => {
    scrollToX(index)
 }))



 // product
 const btnsAddToCart = document.querySelectorAll('.add-btn')
 const btnsCloseSizeContainer = document.querySelectorAll('.close-btn')
 const sizeContainer = document.querySelectorAll('.size-container')
 btnsAddToCart.forEach((item, index) => item.addEventListener('click', () => toggleSizeContainer(index)))
 btnsCloseSizeContainer.forEach((item, index) => item.addEventListener('click', () => toggleSizeContainer(index)))
 const toggleSizeContainer = (index) => {
    sizeContainer[index].classList.toggle('active')
 }


 //gallery 
 const prevGallery = document.getElementById('prev-gallery')
 const nextGallery = document.getElementById('next-gallery')
 const galleryList = document.querySelector('.gallery-list')
 
 let isScrollDone = true
 const scrollToGallery = (offset) => {
    const viewport = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if ( viewport > 576 && viewport < 762) {
        offset = offset > 0 ? 150 : -150
    }
    if( isScrollDone) {
        isScrollDone = false;
        galleryList.scrollLeft += offset
        setTimeout(() => isScrollDone = true, 500)
    }
 }
 prevGallery.addEventListener('click', () => scrollToGallery(-240))
nextGallery.addEventListener('click', () => scrollToGallery(240))

//login
const toggleOpenFixedSection = (section) => {
    console.log(section);
    section.classList.toggle('opened')
}

const signInBtn = document.getElementById('signin-btn')
const loginSection = document.querySelector('.login-section')
const loginOverlay = document.querySelector('.login-section .overlay')
const closeLoginSectionBtn = document.querySelector('.login-section .closeLogin-btn')
signInBtn.addEventListener('click', () => toggleOpenFixedSection(loginSection))
loginOverlay.addEventListener('click', () => toggleOpenFixedSection(loginSection))
closeLoginSectionBtn.addEventListener('click', () => toggleOpenFixedSection(loginSection))



//cart
const cartBtn = document.getElementById('cart-btn')
const cartSection = document.querySelector('.cart-section')
const cartOverlay = document.querySelector('.cart-section .overlay')
const closeCartSectionBtn = document.querySelector('.cart-section .closeCart-btn')
cartBtn.addEventListener('click', () => toggleOpenFixedSection(cartSection))
cartOverlay.addEventListener('click', () => toggleOpenFixedSection(cartSection))
closeCartSectionBtn.addEventListener('click', () => toggleOpenFixedSection(cartSection))
