const body = document.body;
const navbarMenu = document.getElementById('navbarMenu');
const skills = document.querySelector('.skills')
const skillPer = document.querySelectorAll('.skill-per')
const tabs = document.querySelectorAll('.nav-links ul li')
var header = document.querySelector('header')


// Loader
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
});



window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY > 0)
    // header.classList.toggle("sticky", window.scrollY > 10)
})



// Function to close the navbar
function closeNavbar() {
    const checkbox = document.getElementById('check');
    if (checkbox.checked) {
        checkbox.checked = false; // Uncheck the checkbox to close the navbar
        body.classList.remove('no-scroll');
        body.classList.remove('no-click'); // Enable clicking again
        navbarMenu.classList.remove('open'); // Remove the 'open' class from the navbar
    }
}

// Add event listeners to each nav link
document.querySelectorAll('.nav-link a').forEach(link => {
    link.addEventListener('click', function (e) {
        // Prevent default anchor behavior
        e.preventDefault();

        // Scroll to the section smoothly
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });

        // Close the navbar after scrolling
        closeNavbar();
    });
});



function toggleMenu() {
    
    // Toggle the navbar menu visibility
    navbarMenu.classList.toggle('open');
    // Check if the menu is open
    if (navbarMenu.classList.contains('open')) {
      // Disable scrolling
      body.classList.add('no-scroll');
      body.classList.add('no-click');
    } else {
      // Enable scrolling
      body.classList.remove('no-scroll');
      body.classList.remove('no-click');
    }
    
}


tabs.forEach((tab)=> {
    tab.addEventListener('click', ()=> {

        tabs.forEach((tab)=> {
            tab.classList.remove('active')
        })

        tab.classList.add('active')
    })
})


let progressIntervals = [];

function showProgress() {
    skillPer.forEach((skill, index) => {
        let startPoint = 0;
        let endPoint = skill.getAttribute('per');
        // console.log(endPoint);
        
        // Clear any existing interval for this skill bar to prevent multiple intervals
        clearInterval(progressIntervals[index]);

        progressIntervals[index] = setInterval(() => {
            if (startPoint >= endPoint) {
                clearInterval(progressIntervals[index]);
            } else {
                startPoint++;
                skill.style.width = `${startPoint}%`;
                skill.firstElementChild.innerText = `${startPoint}%`;
            }
        }, 20);
    });
}

function hideProgress() {
    skillPer.forEach((skill, index) => {
        // Clear existing interval to stop the progress
        clearInterval(progressIntervals[index]);
        skill.style.width = '0%';
        skill.firstElementChild.innerText = '0%';
    });
}

window.addEventListener('scroll',()=>{
    const sectionPosition = skills.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if(sectionPosition < screenPos){
        // console.log('Show');
        showProgress()
    }
    else{
        // console.log('hide');
        hideProgress()
    }
})




// OWL Carousel JS 
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayHoverPause:true,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            },
        }
    });
});




let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.nav-link')


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY 
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight 
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(navLink => {
                navLink.classList.remove('active')
                document.querySelector('.nav-link a[href*=' + id + ']').parentElement.classList.add('active')
            })
        }
    })
}






/*==================== Scroll Reveal ======================*/
ScrollReveal({ 
    reset: true,
    distance: '90px', 
    duration: 2000, 
    delay: 200
});

ScrollReveal().reveal('.titleSec .title, .text-animation, .socialIcon a:nth-child(odd), .websiteImageBox:nth-child(2)', {origin: 'top'});
ScrollReveal().reveal('.titleSec p, .UI-UX, .socialIcon a:nth-child(even), .websiteImageBox:nth-child(5), .cardSec .card:nth-child(2)', {origin: 'bottom'});

ScrollReveal().reveal('.aboutMe, .textAnimationSocial, .Programming-skills, .webDeveloper, .websiteImageBox:nth-child(1), .websiteImageBox:nth-child(4), .submitBtn, .cardSec .card:nth-child(1)', {origin: 'left'});
ScrollReveal().reveal('.educational_qualification, .svg-container, .Designing-skills, .Graphics, .websiteImageBox:nth-child(3), .websiteImageBox:nth-child(6), .formSection, .cardSec .card:nth-child(3)', {origin: 'right'});


