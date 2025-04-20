function page1Animation(){
    var tl=gsap.timeline()
    tl.from("nav h1,nav h4,nav button",{
        y:-30,
        delay:0.5,
        duration:0.7,
        opacity:0,
        stagger:0.15,
        rotate:36
    })
    
    tl.from(".center-part1 h1",{
        opacity:0,
        x:-500,
        duration:0.5
    })
    
    tl.from(".center-part1 p",{
        opacity:0,
        x:-100,
        duration:0.3
    })
    tl.from(".center-part2 img",{
        opacity:0,
        x:500,
        duration:0.3
    })
    tl.from(".center-part1 button",{
        opacity:0,
        y:500,
        duration:0.3
    })
    
    tl.from(".section1bottom img",{
        y:30,
        opacity:0,
        duration:0.3,
        stagger:0.15
    })
    
}

function page2Animation(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 85%",
            end:"top -50%",
            scrub:2
        }
    })
    
    tl2.from(".services",{
        x:-100,
        opacity:0
    })
    
    tl2.from(".elem.line1.left",{
        x:-200,
        opacity:0,
    },"line1")
    tl2.from(".elem.line1.right",{
        x:200,
        opacity:0,
    },"line1")
    tl2.from(".elem.line2.left",{
        x:-200,
        opacity:0
    },"line2")
    tl2.from(".elem.line2.right",{
        x:200,
        opacity:0
    },"line2")
}

page1Animation()
page2Animation()