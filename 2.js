function toggleFAQ(button) {
    const faqContent = button.nextElementSibling;
    const faqSign = button.querySelector(".faq-sign");

    // Toggle kelas "show" untuk konten FAQ
    faqContent.classList.toggle("show");

    // Toggle kelas "rotate" untuk efek animasi rotasi pada tanda
    faqSign.classList.toggle("rotate");

    if (faqContent.classList.contains("show")) {
        faqSign.textContent = "+";  // Ubah ke tanda positif
    } else {
        faqSign.textContent = "–";  // Ubah ke tanda negatif
    }
}
document.querySelector(".submit-button").addEventListener("mousedown", function () {
    this.style.transform = "scale(0.95)";
});

document.querySelector(".submit-button").addEventListener("mouseup", function () {
    this.style.transform = "scale(1)";
});