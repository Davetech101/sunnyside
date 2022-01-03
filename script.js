const learnMore = document.getElementById('lm-1')
const learnMore2 = document.getElementById('lm-2')
const lM = document.querySelector('.lm-1')
const lM2 = document.querySelector('.lm-2')
const fb = document.querySelector('.fb')
const ig = document.querySelector('.ig')
const twitter = document.querySelector('.twitter')
const pin = document.querySelector('.pin')
const nav = document.querySelector('.mobile-nav')
const header =  document.querySelector('.header-right')
const tee = document.querySelector('.header-text')


nav.addEventListener('click', () => {
    header.classList.toggle('show')
    tee.classList.toggle('tee')
})



learnMore.addEventListener('mouseenter', () => {
    lM.style.opacity = 1
})

learnMore.addEventListener('mouseleave', () => {
    lM.style.opacity = 0
})

learnMore2.addEventListener('mouseleave', () => {
    lM2.style.opacity = 0
})

learnMore2.addEventListener('mouseenter', () => {
    lM2.style.opacity = 1
})

fb.addEventListener('mouseenter', () => {
   let fba = document.querySelector('.fba')
   let fbhov = document.querySelector('.fbhov')
    fba.style.opacity = 0
    fbhov.style.opacity = 1
})

fb.addEventListener('mouseleave', () => {
    let fba = document.querySelector('.fba')
    let fbhov = document.querySelector('.fbhov')
    fba.style.opacity = 1
    fbhov.style.opacity = 0
})

ig.addEventListener('mouseenter', () => {
    let iga = document.querySelector('.iga')
    let ighov = document.querySelector('.ighov')
    iga.style.opacity = 0
    ighov.style.opacity = 1
})
 
ig.addEventListener('mouseleave', () => {
    let iga = document.querySelector('.iga')
    let ighov = document.querySelector('.ighov')
    iga.style.opacity = 1
    ighov.style.opacity = 0
})

twitter.addEventListener('mouseenter', () => {
    let twittera = document.querySelector('.twittera')
    let twitterhov = document.querySelector('.twitterhov')
    twittera.style.opacity = 0
    twitterhov.style.opacity = 1
})
 
twitter.addEventListener('mouseleave', () => {
    let twittera = document.querySelector('.twittera')
    let twitterhov = document.querySelector('.twitterhov')
    twittera.style.opacity = 1
    twitterhov.style.opacity = 0
})

pin.addEventListener('mouseenter', () => {
    let pina = document.querySelector('.pina')
    let pinhov = document.querySelector('.pinhov')
    pina.style.opacity = 0
    pinhov.style.opacity = 1
})
 
pin.addEventListener('mouseleave', () => {
    let pina = document.querySelector('.pina')
    let pinhov = document.querySelector('.pinhov')
    pina.style.opacity = 1
    pinhov.style.opacity = 0
})