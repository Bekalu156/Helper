function sendMail(event) {
  event.preventDefault(); // Prevents form from refreshing

  let parms = {
    user_name: document.getElementById("name").value,
    user_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_cdcm8lh", "template_i0ctkad", parms)
    .then(function (response) {
      console.log("SUCCESS!", response);
      alert("Email sent successfully!");
    })
    .catch(function (error) {
      console.error("FAILED...", error);
      alert("Failed to send email. Please try again.");
    });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contact-form").addEventListener("submit", sendMail);

  const toggleButton = document.getElementById("checkbtn");
  const sidebar = document.getElementById("active");

  // Toggle sidebar when button is clicked
  toggleButton.addEventListener("click", function (event) {
    event.stopPropagation(); // prevent this click from bubbling to document
    sidebar.classList.toggle("show");
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggle = toggleButton.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnToggle) {
      sidebar.classList.remove("show");
    }
  });
});
