function breakText(){
    let h1=document.querySelector("h1")
    let splittedText= h1.textContent.split("")

    let cuttler=""

    splittedText.forEach(function(elem,idx){
        if(idx<(splittedText.length)/2){
            cuttler+=`<span class= "a" >${elem}</span>`
        }else{
            cuttler+=`<span class= "b" >${elem}</span>`
        }
    })


    h1.innerHTML=cuttler
}
breakText()

gsap.from(".a",{
    y:50,
    opacity:0,
    duration:0.4,
    delay:0.5,
    stagger:0.15
})

gsap.from(".b",{
    y:50,
    opacity:0,
    duration:0.4,
    delay:0.5,
    stagger:-0.15
})