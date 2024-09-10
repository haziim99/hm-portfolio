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

// Add animation for skills section
// Add animation for skills section
const skillBoxes = document.querySelectorAll('.skill-box');

skillBoxes.forEach(box => {
    const progress = box.querySelector('.skill-progress');
    const targetWidth = parseInt(progress.style.width); // الحصول على عرض النسبة المئوية المستهدف
    progress.style.width = '0%'; // إعادة تعيين العرض إلى 0%
    
    // استخدام setInterval لتحميل العرض ببطء
    let currentWidth = 0;
    const duration = 4000; // 
    const increment = targetWidth / (duration / 100); // حساب الزيادة لكل 100 مللي ثانية

    const interval = setInterval(() => {
        if (currentWidth < targetWidth) {
            currentWidth += increment; // زيادة العرض
            progress.style.width = Math.min(currentWidth, targetWidth) + '%'; // تحديث العرض
            progress.textContent = Math.round(currentWidth) + '%'; // تحديث النص
        } else {
            clearInterval(interval); // إيقاف التحميل عند الوصول إلى الهدف
        }
    }, 100); // كل 100 مللي ثانية
});


window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
});

const buttons = document.querySelectorAll('.btn, .h-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    });
});

const icons = document.querySelectorAll('.row-icon i');

icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

/* window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    document.body.style.backgroundColor = `rgba(27, 31, 36, ${Math.min(scrollPosition / 500, 1)})`;
}); */

window.onload = function() {
    const loader = document.querySelector('.loader'); // تأكد من وجود عنصر للتحميل
    loader.style.display = 'none'; // إخفاء عنصر التحميل بعد التحميل
};

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

