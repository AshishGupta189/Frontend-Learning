


function marqueeAnimation(){
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY>0){
            console.log(dets.deltaY)
            gsap.to(".marquee",{
                transform:"translateX(-200%)",
                repeat:-1,
                duration:5,
                ease:"none"
            })

            gsap.to(".marquee img",{
                rotate:180,
                ease:"none"
            })
        }else{
            gsap.to(".marquee",{
                transform:"translateX(0%)",
                repeat:-1,
                duration:5,
                ease:"none"
            })

            gsap.to(".marquee img",{
                rotate:0,
                ease:"none"
            })
        }
    })
}

marqueeAnimation()