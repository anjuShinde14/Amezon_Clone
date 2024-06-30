document.getElementById('deliveryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Get form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Display confirmation message
    document.getElementById('confirmationMessage').classList.remove('hidden');
    
    // Log the data to the console (you can replace this with actual form submission code)
    console.log('Form submitted:', data);
    
    // Optionally, reset the form
    event.target.reset();
});
