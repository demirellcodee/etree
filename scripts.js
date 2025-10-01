// Hamburger Menü İşlevselliği
document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("navLinks").classList.toggle("active");
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
