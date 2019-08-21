// select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item'); // query selector All selects all the items in the navbar

// Set initial state of menu it is set to true or false for open and close with a variable
let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
       menuBtn.classList.add('close');
       menu.classList.add('show');
       menuNav.classList.add('show');
       menuBranding.classList.add('show');
       navItems.forEach(item => item.classList.add('show')); // is an higher order array method to loop through the nav list (home,mywork,how to reach me and about pages)
      
       // Set menu state
       showMenu = true;
     
    }else{
       menuBtn.classList.remove('close');
       menu.classList.remove('show');
       menuNav.classList.remove('show');
       menuBranding.classList.remove('show');
       navItems.forEach(item => item.classList.remove('show'));

       // set menu state
       showMenu = false;
    }
    
}