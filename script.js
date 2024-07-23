
/*==================== toggle icon navbar ====================*/
let iconsMenu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

iconsMenu.addEventListener('click', function () {
  iconsMenu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
      });
    };
  });


  /*==================== sticky navbar ====================*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

  iconsMenu.classList.remove('bx-x');
  navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 1500,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/

const typed = new Typed('.multiple-text', {
  strings: ['Software Engineer', 'Backend Developer', 'Application Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/*==================== read more ====================*/
let readmore = document.querySelector('#btn-readMore');

let readmoreS1 = document.querySelector('#btn-s1');
let readmoreS2 = document.querySelector('#btn-s2');

var moreElement = document.getElementById("more");

var moreElementS1 = document.getElementById("moreS1");
var moreElementS2 = document.getElementById("moreS2");

readmore.addEventListener('click', function () {
  if (more.classList.contains('expanded')) {
    more.classList.remove('expanded');
    readmore.innerHTML = "Read More";
  } else {
    more.classList.add('expanded');
    readmore.innerHTML = "Less";
  }
});


readmoreS1.addEventListener('click', function () {
  if (moreElementS1.classList.contains('expanded')) {
    moreElementS1.classList.remove('expanded');
    readmoreS1.innerHTML = "Read More";
  } else {
    moreElementS1.classList.add('expanded');
    readmoreS1.innerHTML = "Less";
  }
});

readmoreS2.addEventListener('click', function () {
  if (moreElementS2.classList.contains('expanded')) {
    moreElementS2.classList.remove('expanded');
    readmoreS2.innerHTML = "Read More";
  } else {
    moreElementS2.classList.add('expanded');
    readmoreS2.innerHTML = "Less";
  }
});




/*==================== contact form with email ====================*/


function sendMail(){
let parms = {
name :document.getElementById("name").value,
email : document.getElementById("email").value,
subject : document.getElementById("subject").value,
message : document.getElementById("message").value,
phone : document.getElementById("phone").value
}
emailjs.send("service_1we8wg8","template_bmpgb3j",parms).then(function() {
  $.toast({
      heading: 'Success',
      text: 'Email sent successfully',
      showHideTransition: 'slide',
      icon: 'success'
  });
  document.getElementById("emailForm").reset();

});
}