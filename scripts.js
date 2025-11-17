const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
});

AOS.init({
  duration: 1000,     // animasyon süresi (ms cinsinden)
  once: true,         // sadece bir kez çalışsın
  easing: 'ease-in-out', // geçiş efekti
});



// Tüm FAQ soruları için açma/kapama fonksiyonu
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const parent = question.parentElement;
        parent.classList.toggle('active'); // Tıklandığında cevapları açıp kapat
    });
});
