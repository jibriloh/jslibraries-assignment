new Glide('.glide', {
    type: 'carousel', 
    autoplay: 2000, 
    animationDuration: 800, 
    keyboard: true,
    hoverpause: false,
 }).mount();

 
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true
});

document.addEventListener("DOMContentLoaded", () => {
    $("form").parsley();
});