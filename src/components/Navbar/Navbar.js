import React from "react";
// import './navbar.css'

const menu = document.getElementsByClassName('menu-items')[0];
const menuToggler = document.getElementById('menu-toggler');
const btn = document.getElementById('btn');
menu.classList.add('nav-hidden');
menuToggler.addEventListener('click', () => {
  menu.classList.toggle('nav-visible');
  menu.classList.toggle('nav-hidden');
  menu.style.display='flex';
  menuToggler.classList.toggle('bi-list');
  menuToggler.classList.toggle('bi-x-lg');
});
const list = Array.from(document.getElementsByClassName('list-items'));
window.onclick = (e) => {
  if (e.target != menuToggler) {
    menu.classList.add('nav-hidden');
    menu.classList.remove('nav-visible');
    menuToggler.classList.toggle('bi-list');
    menuToggler.classList.toggle('bi-x-lg');
  }
}
list.forEach((element) => {
  element.addEventListener('click', () => {
    menu.classList.add('nav-hidden');
    menu.classList.remove('nav-visible');
  })
});

function Navbar(){
    return (
    <nav>
        <i class="bi bi-list" id="menu-toggler"></i>
        <h3 class="logo">hack the tank</h3>
        <ul class="menu-items">
            <li class="list-items"><a href=""><span class="slash">/</span>home</a></li>
            <li class="list-items"><a href=""><span class="slash">/</span>event</a></li>
            <li class="list-items"><a href=""><span class="slash">/</span>team</a></li>
            <li class="list-items"><a href=""><span class="slash">/</span>prizes</a></li>
            <li class="list-items"><a href=""><span class="slash">/</span>contact</a></li>

        </ul>
    </nav>
    )
}

export default Navbar;