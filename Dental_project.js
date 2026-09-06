// ================= MENU =================

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");

}


// ================= SCROLL =================

function scrollToServices() {

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });

}


// ================= APPOINTMENT FORM =================

function openForm() {

    document.getElementById("appointmentModal").style.display = "flex";

}


function closeForm() {

    document.getElementById("appointmentModal").style.display = "none";

}


// ================= FORM SUBMIT =================

function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you " + name +
        "! Your appointment request has been submitted."
    );

    document.getElementById("appointmentModal").style.display = "none";

}


// ================= TESTIMONIAL =================

const testimonials = [

    {
        text: "Excellent service and very friendly doctors. My dental treatment was comfortable and smooth.",
        name: "— Rahul"
    },

    {
        text: "The clinic was clean and the doctor explained every step clearly. Highly recommended!",
        name: "— Priya"
    },

    {
        text: "I had a great experience with my dental treatment. The staff were very professional.",
        name: "— Arun"
    }

];

let currentTestimonial = 0;


function showTestimonial() {

    document.getElementById("testimonialText").textContent =
        testimonials[currentTestimonial].text;

    document.getElementById("patientName").textContent =
        testimonials[currentTestimonial].name;

}


function nextTestimonial() {

    currentTestimonial++;

    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }

    showTestimonial();

}


function previousTestimonial() {

    currentTestimonial--;

    if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
    }

    showTestimonial();

}


// ================= CLOSE MODAL =================

window.onclick = function(event) {

    const modal = document.getElementById("appointmentModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }

};