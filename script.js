// Contact form submission logic
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    if (name && email && phone && message) {
        alert
