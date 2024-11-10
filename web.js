document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    navbar.innerHTML = `
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Produk</a></li>
        </ul>
    `;
});
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}
function toggleDescription(element) {
    const productCard = element.closest(".product-card");
    productCard.classList.toggle("show-description");
}