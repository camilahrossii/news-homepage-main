

function showMobileMenu() {
    const mobileMenu = document.querySelector("nav ul"); 
    if(mobileMenu.style.opacity === "1"){
        mobileMenu.style.opacity = "0"
    } else {
        mobileMenu.style.opacity = "1" 
    }
}
