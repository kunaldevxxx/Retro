const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var t1 = gsap.timeline()

t1.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
t1.to("#page1",{
    y:"30vh",
    delay:1,
    duration:1,
})
t1.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8
})