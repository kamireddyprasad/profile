// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
 
// window.onscroll =() =>{
//     sections.forEach(sec =>{

//         let top = window.scrollY;
//         let offset = sec.offsetTop -150;
//     });
//  };

 /*========================= scroll reveal ======== */

 ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.service-container,.contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });


/*========================= type js =============== */

var typed = new Typed('.multiple-text', {
    strings: ["Frontend Developer", "Backend Developer","Software Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });

