import cart from './components/cart.js';
import loader from './components/loader.js';
import products from './components/products.js';
import showCart from './components/showCart.js';
import showMenu from './components/showMenu.js';
import getProducts from './helpers/getProducts.js';

/* UI Elements */

/* Hidden loader */
loader()

/* Show Menu */
showMenu()

/* Show Cart */
showCart()

/* End UI Elements */

/* Products */
const { db, printProducts } = products(await getProducts())

/* Cart */
cart(db, printProducts)

/* Dark Mode */
let toggle=document.getElementById("toggle");
let body=document.body;
let label__toggle=document.getElementById("label__toggle")

toggle.addEventListener("change",(event)=>{
    let checked=event.target.checked;
    body.classList.toggle("dark");
    if (checked==true) {
        label__toggle.innerHTML="<i class='bx bx-sun'>"
    }
    else {
        label__toggle.innerHTML="<i class='bx bx-moon'>"
    }

    
})

/* Nav bar animation */

document.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 0) {
        header.classList.add("scrolled")
    }
    else {
        header.classList.remove("scrolled")
    }
})


