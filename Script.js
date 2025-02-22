function searchProduct() {
    let query = document.getElementById("search-box").value.toLowerCase();
    if (query.includes("laundry")) {
        window.location.href = "product.html";
    } else {
        alert("Product not found!");
    }
}

function goToProductPage() {
    window.location.href = "product.html";
}

$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});