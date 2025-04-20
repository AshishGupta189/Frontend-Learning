// gsap.from("#page1 .box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })

// gsap.from("#page2 .box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 .box",
//         scroller:"body",
//         markers:true,
//         start: "top 60%"
//     }
// })

// gsap.from("#page3 .box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page3 .box",
//         scroller:"body",
//         markers:true,
//         start: "top 60%"
//     }
// })

gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        //markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:5,
        // pin:true
    }
})

gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        //markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:true
    }
})

gsap.to("#page3 h1",{
    transform:"translateX(-70%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        scrub:2,
        start:"top 0%",
        end:"top -100%",
        pin:true

    }
})