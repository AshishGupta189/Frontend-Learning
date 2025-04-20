var initial=`M 100 125 Q 700 125 1400 125`
var final=`M 100 125 Q 700 125 1400 125`

var str=document.querySelector("#string");
str.addEventListener("mousemove",function(dets){
    final=`M 120 125 Q 700 ${dets.y} 1400 125`
    gsap.to("svg path",{
        attr:{
            d:final
        },
        ease:"power3.out",
        duration:0.5
    })
});

str.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{
            d:initial
        },
        ease:"elastic.out(1,0.2)",
        duration:1.5
    })
});