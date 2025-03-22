// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation class when section comes into view
const sections = document.querySelectorAll('.full-page');
const options = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate__fadeInDown, .animate__fadeInUp, .animate__zoomIn, .animate__flipInX, .animate__fadeInLeft')
                .forEach(el => el.classList.add('animate__animated'));
        }
    });
}, options);

sections.forEach(section => observer.observe(section));