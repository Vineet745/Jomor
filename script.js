let cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", function (dets) {
    let x = dets.pageX;
    let y = dets.pageY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

})




let website = document.querySelector(".website")
let image = document.querySelector(".website-image-section")
let identity = document.querySelector(".identity")
let image2 = document.querySelector(".identity-image-section")
let lastcheck = document.querySelector(".last-check")
let footerImg = document.querySelector(".page7-img")

website.addEventListener("mouseenter", function () {
    image.style.display = "initial"
})
website.addEventListener("mouseleave", function () {
    image.style.display = "none"
})

identity.addEventListener("mouseenter", function () {
    image2.style.display = "initial"
})

identity.addEventListener("mouseleave", function () {
    image2.style.display = "none"
})
lastcheck.addEventListener("mouseenter", function () {
    footerImg.style.display = "initial"
})
lastcheck.addEventListener("mouseleave", function () {
    footerImg.style.display = "none"
})


// Gsap
// page1
gsap.to("section", {
    scrollTrigger: {
        trigger: "section",
        toggleActions: "play pause resume reverse",
        start: "top -2%",
        scrub: true
    },
    opacity: 0,
    duration: 1,
    rotate: "5deg",
})

// page2

gsap.from(".page2 .text1", {
    scrollTrigger: {
        trigger: ".page2",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    y: 200,
    x: 300,
    opacity: 0
})


gsap.from(".page2 .text2", {
    scrollTrigger: {
        trigger: ".page2",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    y: 200,
    x: 300,
    opacity: 0
})
gsap.to(".img-child", {
    scrollTrigger: {
        trigger: ".page2",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    scale: 1.1
})

// page3


gsap.from(".page3 .text1", {
    scrollTrigger: {
        trigger: ".page3",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    y: 200,
    x: 300,
    opacity: 0
})

gsap.from(".page3 .text2", {
    scrollTrigger: {
        trigger: ".page3",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    y: 200,
    x: 300,
    opacity: 0
})
gsap.to(".page3-img-child", {
    scrollTrigger: {
        trigger: ".page3",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    scale: 1.1
})

// page4
gsap.from(".page4 .text1", {
    scrollTrigger: {
        trigger: ".page4",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    y: 200,
    x: 300,
    opacity: 0
})

gsap.from(".page4 .text2", {
    scrollTrigger: {
        trigger: ".page4",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    y: 200,
    x: 300,
    opacity: 0
})
gsap.to(".page4-img-child", {
    scrollTrigger: {
        trigger: ".page4",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    scale: 1.1
})

// page5

gsap.from(".page5 .text1", {
    scrollTrigger: {
        trigger: ".page5",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    y: 200,
    x: 300,
    opacity: 0
})

gsap.from(".page5 .text2", {
    scrollTrigger: {
        trigger: ".page5",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    y: 200,
    x: 300,
    opacity: 0
})
gsap.to(".page5-img-child", {
    scrollTrigger: {
        trigger: ".page5",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    scale: 1.1
})

// page6

gsap.from(".page6 .text1", {
    scrollTrigger: {
        trigger: ".page6",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    y: 200,
    x: 300,
    opacity: 0
})

gsap.from(".page6 .text2", {
    scrollTrigger: {
        trigger: ".page6",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    y: 200,
    x: 300,
    opacity: 0
})
gsap.to(".page6-img-child", {
    scrollTrigger: {
        trigger: ".page6",
        toggleActions: "play pause resume reverse",
        start: "top 12%",
    },
    scale: 1.1
})

// page7

gsap.to(".page7-child", {
    scrollTrigger: {
        trigger: ".page7",
        toggleActions: "play pause resume reverse",
        start: "top 20%",
        scrub: true,
    },
    opacity: 0,
    rotate: "5deg"
})

// page8

gsap.from(".page8", {
    scrollTrigger: {
        trigger: ".page8",
        toggleActions: "play pause resume reverse",
        start: "top 20%",
    },
    opacity: 0,
})

gsap.from(".line", {
    scrollTrigger: {
        trigger: ".page8",
        toggleActions: "play pause resume reverse",
        start: "top 20%",
    },
    width: "0",
})


// navbar

let plus =document.querySelector(".plus")
let hamberger = document.querySelector(".hamberger")
let mover = document.querySelector(".mover")
let two = document.querySelector(".two")

hamberger.addEventListener("mouseenter",function(){
    plus.style.display="initial";
    mover.style.display="none";
    two.style.display="none";
})

hamberger.addEventListener("mouseleave",function(){
    plus.style.display="none";
    mover.style.display="initial";
    two.style.display="initial";

})


