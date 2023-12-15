let menu = document.querySelector("#menubar");
let navbar = document.querySelector("#navbar");
let nav = document.querySelector("#nav");

menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})
window.onscroll = ()=>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if(window.scrollY > 150){
        nav.classList.add("active")
    }
    else{
        nav.classList.remove("active")
    }
}

let countDate = new Date("january 1,2024 00:00:00:00").getTime();
function countDown(){
    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000;
    let minute = second*60;
    let hour = minute*60;
    let day = hour*24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day))/(hour));
    let m = Math.floor((gap % (hour))/(minute));
    let s = Math.floor((gap % (minute))/(second));

    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
}
setInterval(() => {
    countDown();
}, 1000);


var tl = gsap.timeline();

tl.from("#nav,#nav img,#navbar a,#icons a",{
    y:-100,
    duration:1,
    delay:.3,
    stagger:.3,
    opacity:0,
})
tl.from("#home img,#home h2,#home h1,#home button",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:.3
})
tl.from("#category #txt h1,#category #txt p",{
    y:100,
    duration:1,
    opacity:0,
    stagger:.3
})
tl.from("#category-box #box",{
    x:100,
    duration:1,
    opacity:0,
    stagger:.3
})
tl.from("#deal",{
    x:"-100%",
    duration:1,
    delat:.3,
    opcity:0,
})