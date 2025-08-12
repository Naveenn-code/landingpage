function toggle(){
    document.body.classList.toggle('darkmode')
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      // Show success modal
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();
      form.reset();
      form.classList.remove('was-validated');
      return;
    }

    form.classList.add('was-validated');
  });
  
 const scrollBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    scrollBtn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
  };

  scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
