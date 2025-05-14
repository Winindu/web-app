// Hero Slider
const heroSection = document.getElementById('hero');
const heroImages = [
    'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
    'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg'
];
let currentHeroImage = 0;

function changeHeroImage(direction) {
    currentHeroImage = (currentHeroImage + direction + heroImages.length) % heroImages.length;
    heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroImages[currentHeroImage]}')`;
}

document.querySelector('.hero-controls .prev').addEventListener('click', () => changeHeroImage(-1));
document.querySelector('.hero-controls .next').addEventListener('click', () => changeHeroImage(1));

// Testimonials Slider
const testimonials = [
    {
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
        name: 'Robert Downey',
        text: 'Had an amazing experience at Whispering Willow! The atmosphere was cozy, the staff was super friendly, and the food was absolutely delicious. Every bite was full of flavor, and you can tell they use fresh ingredients. Can\'t wait to come back!'
    },
    {
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
        name: 'Sarah Johnson',
        text: 'The ambiance is perfect for both casual dining and special occasions. Their attention to detail in presentation and taste is remarkable. Highly recommended!'
    }
];

let currentTestimonial = 0;

function updateTestimonial() {
    const testimonialContainer = document.querySelector('.testimonial');
    const currentData = testimonials[currentTestimonial];
    
    testimonialContainer.innerHTML = `
        <img src="${currentData.image}" alt="${currentData.name}">
        <h3>${currentData.name}</h3>
        <p>${currentData.text}</p>
    `;
}

function changeTestimonial(direction) {
    currentTestimonial = (currentTestimonial + direction + testimonials.length) % testimonials.length;
    updateTestimonial();
}

document.querySelector('.testimonial-controls .prev').addEventListener('click', () => changeTestimonial(-1));
document.querySelector('.testimonial-controls .next').addEventListener('click', () => changeTestimonial(1));

// Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
updateTestimonial();