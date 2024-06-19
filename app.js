let rec=document.querySelector("#center");
rec.addEventListener("mousemove",function(details){
    let recloc = rec.getBoundingClientRect();
    var insiderectval = details.clientX - recloc.left;
    if(insiderectval < recloc.width/2){
        var redcolor = gsap.utils.mapRange(0, recloc.width/2, 255, 0, insiderectval);
        gsap.to(rec,{
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4,
        })
    }
    else{
        var bluecolor = gsap.utils.mapRange(recloc.width/2,recloc.width,0, 255, insiderectval);
        gsap.to(rec,{
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,
        })
    }
});

rec.addEventListener("mouseleave", function() {
    gsap.to(rec,{
        backgroundColor: "white",
    })
});

