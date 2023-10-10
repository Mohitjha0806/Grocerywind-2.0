gsap.from(".logo, li, .btn-1", {
    y: -100,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
})


gsap.from("#h1", {
    x: -300,
    opacity: 0,
    delay: 2,
    stagger: 0.2,
    duration: 1.2,
})
gsap.from("#h2", {
    x: 300,
    opacity: 0,
    delay: 2,
    stagger: 0.2,
    duration: 1.2,
})
gsap.from("#h3", {
    x: -300,
    opacity: 0,
    delay: 2,
    stagger: 0.2,
    duration: 1.2,
})

gsap.from(".p-content", {
    x: 300,
    delay: 2,
    opacity: 0,
    duration: 1.3,
})
gsap.from(".shop-btn", {
    delay: 3,
    opacity: 0,
    duration: 1
})
gsap.from(".right-part-c1", {
    x: 120,
    delay: 3,
    opacity: 0,
    rotate: 30,
    duration: 1.5,
    blur: 100,
})


// ===========navbar===========
const menu = document.querySelector('.menu-icon');
const list = document.querySelector('.menu-item');
const btn = document.querySelector('btn-1')

menu.addEventListener("click", () => {
    list.classList.toggle("active")
})

// ===========navbar===========



var countDownDate = new Date("November, 2023 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);



