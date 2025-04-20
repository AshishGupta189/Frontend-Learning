var tl=gsap.timeline()
var btn=document.querySelector("#nav i")
var full=document.querySelector("#full i")

tl.to("#full",{
    right:0,
    duration:0.8,

})

tl.from("#full h4",{
    x:150,
    duration:0.6,
    opacity:0,
    stagger:0.25
})
tl.from("#full i",{
    opacity:0

})
tl.pause()
btn.addEventListener("click",function(){
    tl.play();
})
full.addEventListener("click",function(){
    tl.reverse();
})