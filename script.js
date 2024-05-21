var typed= new Typed(".text", {
    strings:["Frontend Developer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000, 
        loop: true
    });

window.onload = function() {
    var audio = document.getElementById('audio-player');
    audio.play();
    };

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);

});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

