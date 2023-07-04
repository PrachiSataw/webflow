
function loaderanimation() {
var counter = 0;
var c = 0;
var i = setInterval(function(){

    document.querySelector("#loadingpage .counter h1").innerHTML = c + "%";
   counter++;
   c++;

   if(counter == 101){
    clearInterval(i);
    
   };
},10);
}

function imagechange(){

  var image = document.getElementById('image');
  var images = ['/images/31.jpg', '/images/team6.jpg', '/images/blog-selection-min.jpg', '/images/flower.jpg', '/images/marmeladz-poster-3.jpg', '/images/rodion-kutsaiev-0VGG7cqTwCo-unsplash.jpg']
  setInterval(function(){
    var random = Math.floor(Math.random() * 6);
    image.src = images[random];
  }, 800);
  
  var image1 = document.getElementById('image1');
  var images1 = ['/images/7.jpg', '/images/team16.jpg', '/images/30.jpg', '/images/chatapp8.jpg', '/images/team5.jpg']
  setInterval(function(){
    var random = Math.floor(Math.random() * 5);
    image1.src = images1[random];
  }, 800);
  
  var image2 = document.getElementById('image2');
  var images2 = ['/images/marmeladz-poster.jpg', '/images/8.jpg', '/images/team-app1-min-p-2000.jpg', '/images/nathana-reboucas-Xfs4JHzLR-g-unsplash.jpg', '/images/33.jpg', '/images/teamapp-using1-p-1600.jpg']
  setInterval(function(){
    var random = Math.floor(Math.random() * 6);
    image2.src = images2[random];
  }, 800);
  
  var image3 = document.getElementById('image3');
  var images3 = ['/images/ca-creative-5rz05L5LZn0-unsplash.jpg', '/images/chatapp8.jpg', '/images/36.jpg', '/images/malte-helmhold-eIDFKcbDxXo-unsplash.jpg', '/images/25.webp', '/images/37.jpg']
  setInterval(function(){
    var random = Math.floor(Math.random() * 6);
    image3.src = images3[random];
  }, 800);

}

function cursormove(){
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText =  cursor2.style.cssText = "left: " + e.clientX
  + "px; top: " + e.clientY + "px;";
});

document.addEventListener("mousemove", parallax);
function parallax(e){
  document.querySelectorAll(".object").forEach(function(move){
    
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX + moving_value) / 250;
    var y = (e.clientY + moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  })
}
}



loaderanimation();
cursormove();
imagechange();

function section1(){
var ld = gsap.timeline();
ld.to("#loadingpage",{
     delay: 1.5,
     duration: 1,
    onComplete: function() {
      document.querySelector("#loadingpage").style.display = "none"
    }
})
ld.to("#nav h1",{
  opacity: 1
})
ld.to(".row h1, .chngimg1, .chngimg2, .chngimg3, .chngimg4, .arrowimage img, #p1",{
  rotateX:"0deg",
  skewY:"0deg",
  delay: 0.2,
  opacity: 1,
  duration: 1.2
})
gsap.to("#rowone h1 , #rowfour h1 ",{
    x: 80,
    scrollTrigger: {
      trigger: "#rowone h1, #rowthree h1",
      scrub: 1,
      // markers: true,
      start: "top 75%"
    }
})
gsap.to("#rowtwo h1, #rowthree h1",{
  x: -80,
  scrollTrigger: {
    trigger: "#rowtwo h1, #rowfour h1",
    scrub: 1,
    // markers: true,
    start: "top 95%"
  }
})
gsap.to(".arrowimage img",{
  scrollTrigger: {
      scroller: "body",
      trigger: ".arrowimage img",
      start: "top 70%",
      scrub: true, 
      // end: "top 30%",
      // pin: true,
      // markers: true,
  },
  y: 250,
  ease:Expo.power3
  // ease: Expo.easeInOut
  
});

gsap.to(".transparent",{
  scrollTrigger: {
      scroller: "body",
      trigger: ".transparent",
      start: "top 100%",
      scrub: true, 
      pin: true,
      // markers: true,
  },
  // y: 500,
  // top: 0

})
}
section1();

function section2(){
var pp = gsap.timeline();
gsap.to(".onetop h1",{
   x: -800,
  scrollTrigger: {
    scroller: "body",
    trigger: ".onetop h1",
    scrub: 4,
    // markers: true,
    start: "top 250%"
  }
})
gsap.to(".onebottom h1",{
  x: 800,
 scrollTrigger: {
   scroller: "body",
   trigger: ".onetop h1",
   scrub: 4,
  //  markers: true,
   start: "top 250%"
 }
})


gsap.to(".text1 h1, .text2 h1, .text3 h1, .text4 h1, .text5 h1, .text6 h1, .text7 h1",{
  rotateX:"0deg",
  skewY:"0deg",
  duration: 1.2,
  opacity:1,
  delay: 0.1,
  stagger: 0.3,
  scrollTrigger: {
    scroller: "body",
    trigger: ".text1 h1, .text2 h1, .text3 h1, .text4 h1, .text5 h1, .text6 h1, .text7 h1",
    start: "top 90%",
    // markers: true,
},
})
gsap.to(".text2 h1,.text6 h1",{
  x: 100,
  delay: 2.5,
  duration: 1,
  // stagger: 0.3,
  scrollTrigger: {
    scroller: "body",
    trigger: ".text2 h1, .text6 h1",
    start: "top 95%",
    scrub: 4, 
    // markers: true,
},
})
gsap.to(".text4 h1,.text7 h1",{
  x: 100,
  delay: 2.5,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".text4 h1, .text7 h1",
    start: "top 95%",
    scrub: 4, 
    // markers: true,
},
})
gsap.to(".text3 h1, .text5 h1",{
  x: -100,
  delay: 2.5,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".text3 h1, .text5 h1",
    start: "top 95%",
    scrub: 4, 
    // delay: 1,
    // markers: true,
},
})
gsap.to(".text9 h1, .text10 h1",{
  rotateX:"0deg",
  skewY:"0deg",
  duration: 1.2,
  opacity:1,
  delay: 0.1,
  stagger: 0.8,
  scrollTrigger: {
    scroller: "body",
    trigger: ".text9 h1, .text10 h1",
    start: "top 105%",
    // scrub: 2, 
    // delay: 1,
    // markers: true,
},
})
}

section2();

function imganimation(){
gsap.to(".sec3image img",{
  width:"100%",
  height:"100%",
  marginTop: "20px",
  delay: 0.5,
  scrollTrigger:{
    trigger:"#section3",
    scroller:"body",
    scrub:2,
    start:"top 0%",
    pin:true,
    // markers: true
  },
  borderRadius:"12px"
})
gsap.to(".sec3image h1, #line",{
  rotateX:"0deg",
  skewY:"0deg",
  duration: 1,
  opacity: 1,
  delay: 0.1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".sec3image h1, #line",
    start: "top 75%",
    // markers: true,
},
})

gsap.to(".sec4image img",{
  width:"100%",
  height:"100%",
  marginTop: "20px",
  delay: 0.5,
  scrollTrigger:{
    trigger:"#section4",
    scroller:"body",
    scrub:2,
    start:"top 0%",
    pin:true,
      // markers:true,
  },
  borderRadius:"12px"
})
gsap.to(".sec4image h1, #line1",{
  rotateX:"0deg",
  skewY:"0deg",
  delay: 0.1,
  duration: 1,
  opacity:1,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".sec4image h1, #line1",
    start: "top 75%",
    // markers: true,
},
})
gsap.to(".sec5image img",{
  width:"100%",
  height:"100%",
  marginTop: "20px",
  delay: 0.5,
  scrollTrigger:{
    trigger:"#section5",
    scroller:"body",
    scrub:2,
    start:"top 0%",
    pin:true,
      // markers:true,
  },
  borderRadius:"12px"
})
gsap.to(".sec5image h1, #line2",{
  rotateX:"0deg",
  skewY:"0deg",
  duration: 1,
  opacity:1,
  delay: 0.1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".sec5image h1, #line2",
    start: "top 75%",
    // markers: true,
},
})
gsap.to(".sec6image img",{
  width:"100%",
  height:"100%",
  marginTop: "20px",
  delay: 0.5,
  scrollTrigger:{
    trigger:"#section6",
    scroller:"body",
    scrub:2,
    start:"top 0%",
    pin:true,
       // markers:true,
  },
  borderRadius:"12px"
})
gsap.to(".sec6image h1, #line3",{
  rotateX:"0deg",
  skewY:"0deg",
  duration: 1,
  opacity:1,
  delay: 0.1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".sec6image h1, #line3",
    start: "top 75%",
    // markers: true,
},
})
gsap.to(".sec7image img",{
  width:"100%",
  height:"100%",
  marginTop: "20px",
  delay: 0.5,
  scrollTrigger:{
    trigger:"#section7",
    scroller:"body",
    scrub:2,
    start:"top 0%",
    pin:true
    // markers:true,
  },
  borderRadius:"12px"
})
gsap.to(".sec7image h1, #line4",{
  rotateX:"0deg",
  skewY:"0deg",
  duration: 1,
  opacity:1,
  delay: 0.1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".sec7image h1, #line4",
    start: "top 75%",
    // markers: true,
},
})
}
imganimation();

function section8(){
gsap.to(".btop h1",{
  x: -500,
 scrollTrigger: {
   scroller: "body",
   trigger: ".btop h1",
   scrub: 5,
  //  markers: true,
   start: "top 200%"
 }
})
gsap.to(".bbottom h1",{
 x: 500,
scrollTrigger: {
  scroller: "body",
  trigger: ".bbottom h1",
  scrub: 5,
  // markers: true,
  start: "top 200%"
}
})
gsap.to(".b3top p, #b3p1, .b3top span",{
  opacity: 2,
  duration: 2,
  scale: 1,
  scrollTrigger: {
   scroller: "body",
   trigger: ".b3top p, #b3p1, .b3top span",
   scrub: 2,
  //  markers: true,
   start: "top 80%"
 }
 })
 gsap.to(".heading h1, #onep p",{
  opacity: 2,
  duration: 1,
  scale: 1,
  scrollTrigger: {
   scroller: "body",
   trigger: ".heading h1, #onep p",
   scrub: 1,
  //  markers: true,
   start: "top 90%"
 }
 })
}
section8();

function section9(){
 gsap.to(".sec9top h1",{
  x: -850,
 scrollTrigger: {
   scroller: "body",
   trigger: ".sec9top h1",
   scrub: 5,
   start: "top 200%"
 }
})
gsap.to(".sec9bottom h1",{
 x: 850,
scrollTrigger: {
  scroller: "body",
  trigger: ".sec9bottom h1",
  scrub: 5,
  start: "top 200%"
}
}) 
gsap.from(".do h1, .teen h1, .chaar h1",{
  rotateX: "90deg",
  rotateY: "-5deg",
  duration: 1,
  delay: 0.5,
  stagger: 0.2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".do h1, .teen h1, .chaar h1",
    start: "top 100%",
},
})
gsap.to(".under1bottom h2, .under1bottom h1",{
  opacity: 2,
  duration: 1,
  scale: 1,
  scrollTrigger: {
   scroller: "body",
   trigger: ".under1bottom h2, .under1bottom h1",
   scrub: 1,
   start: "top 80%"
 }
 })
 gsap.to(".under2centre h1, #a a",{
  opacity: 2,
  duration: 1,
  scale: 1,
  scrollTrigger: {
   scroller: "body",
   trigger: ".under2centre h1, #a a",
   scrub: 1,
   start: "top 70%"
 }
 })
}
section9();

