// gsap.to(".box",{
//     x:1200,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:0.7,
//     repeat:-1,
//     yoyo:true
// })

var tl=gsap.timeline();

tl.from("h2",{
    y:-30,
    duration:1,
    delay:1,
    opacity:0
})
tl.from("h4",{
    y:-30,
    duration:1,
    opacity:0,
    stagger:0.5
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.2
})