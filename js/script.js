let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}; 


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY >100);


        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    
};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Author', 'Content Creator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true


});

function renameAndDownload() {
    var filepath = 'file/cv.pdf';
    var defaultFilename = filepath.split('/').pop();
    var filename = document.getElementById('filename-input').value || defaultFilename;
    var link = document.createElement('a');
    link.href = filepath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("CV indirildi.");

    var element = document.getElementById("fileid");
    element.style.color = "white";
    element.innerText = "Dosya yeni adıyla indirildi.";
  };



