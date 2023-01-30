// function to show scroll up buttton
const scrollUpButton = document.querySelector('.btp');
function showScrollUpButton() {
    if (window.scrollY > 200) {
        scrollUpButton.classList.add('show');
    } else {
        scrollUpButton.classList.remove('show');
    }
}
// function to scroll to top smoothly
function scrollToTop() {
    window.scrollTo({
      // scroll to top smoothly
        top: 0,
        behavior: 'smooth' 
      
    });
}
scrollUpButton.addEventListener('click', scrollToTop);
// add event listener to window
window.addEventListener('scroll', showScrollUpButton);