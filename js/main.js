VANTA.NET({
    el: "#animation",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x1f2d2a,
    points: 12.00,
    maxDistance: 19.00
})

setTimeout(()=>{
    const main = document.querySelector('main');
    main.style.opacity = 1;
    main.style.filter = 'blur(0px)';
},1000)