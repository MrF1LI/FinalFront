/* Navigation Hover */
let winWidth =  window.innerWidth;
let icons = document.querySelectorAll("#icon_side li");

for(let i = 0; i < icons.length; i++) {
    if (winWidth > 770) {
        icons[i].addEventListener("mouseover", function () {
            if (i > 0) {
                icons[i - 1].style.transform = "scale(1.3)";
            }
            icons[i].children[1].style.opacity = "1";
            icons[i].style.transform = "scale(1.7)";
            icons[i].style.marginTop = "15px";
            icons[i].style.marginBottom = "15px";
            if (i < icons.length - 1) {
                icons[i + 1].style.transform = "scale(1.3)";
            }
        });

        icons[i].addEventListener("mouseleave", function () {
            if (i > 0) {
                icons[i - 1].style.transform = "scale(1)";
            }
            icons[i].children[1].style.opacity = "0";
            icons[i].style.transform = "scale(1)";
            icons[i].style.marginTop = "0px";
            icons[i].style.marginBottom = "0px";
            if (i < icons.length - 1) {
                icons[i + 1].style.transform = "scale(1)";
            }
        });
    }
}

/* Typing animation */
document.addEventListener("DOMContentLoaded", function(event) {
    const h2 = document.querySelector("h2");
    const text = h2.textContent;
    h2.textContent = "";
    let index = 0;

    function type() {
        if (index < text.length) {
            h2.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        } else {
            h2.classList.add("typing-done");
        }
    }

    function blinkCursor() {
        h2.classList.toggle("blinking-cursor");
    }

    type();
    setInterval(blinkCursor, 500);
});

/* Section background text function */
const scrollElement = document.getElementById('test');
const scrollElement1 = document.getElementById('test1');
const scrollElement2 = document.getElementById('test2');
const scrollElement3 = document.getElementById('test3');
const sections = document.getElementById('sections');
let scrollPercent = 0;

function handleScroll() {
    const scrollPosition = sections.scrollTop;
    const windowHeight = sections.clientHeight;
    const documentHeight = sections.scrollHeight;
    const maxScroll = documentHeight - windowHeight;
    scrollPercent = (scrollPosition / maxScroll) * 100;

    scrollElement.style.transform = `translateX(${scrollPercent * 3}%)`;
    scrollElement1.style.transform = `translateX(${scrollPercent * 2}%)`;
    scrollElement2.style.transform = `translateX(${scrollPercent * 1.2}%)`;
    scrollElement3.style.transform = `translateX(${scrollPercent / 2.5}%)`;
}

sections.addEventListener('scroll', handleScroll);

/* Motivate me button function */
const buttonMotivateMe = document.querySelector('.motivate-link')
const emojiSad = document.querySelector('.emoji')

buttonMotivateMe.addEventListener('mouseenter', function () {
    emojiSad.classList.remove('fi-rr-sad')
    emojiSad.classList.add('fi-rr-smile')
})

buttonMotivateMe.addEventListener('mouseleave', function () {
    emojiSad.classList.remove('fi-rr-smile')
    emojiSad.classList.add('fi-rr-sad')
})

/* Mobile sidebar function */
const buttonClose = document.querySelector('.close-icon')
const buttonBurger = document.querySelector('.burger-button')
const sideMenu = document.querySelector('.mobile-sidebar-menu')

buttonBurger.addEventListener('click', function () {
    sideMenu.style.display = 'flex'
    sideMenu.classList.add('open');
})

buttonClose.addEventListener('click', function () {
    sideMenu.style.display = 'none'
    sideMenu.classList.remove('open');
})

const menuLinks = document.querySelectorAll('.mobile-navigation a');
menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        sideMenu.style.display = 'none'
    });
});

/* Projects function */
const projectsSection = document.querySelector('#projects');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.body.style.backgroundColor = '#170f18'
            document.querySelector('.project-details').style.color = 'white'
            document.querySelector('.burger-button').style.color = 'white'
            document.querySelector('.project-link-icon').style.color = '#a206bd'
        } else {
            document.body.style.backgroundColor = 'white'
            document.querySelector('.project-details').style.color = 'black'
            document.querySelector('.burger-button').style.color = 'black'
            document.querySelector('.project-link-icon').style.color = '#black'
        }
    })
})

observer.observe(projectsSection)
