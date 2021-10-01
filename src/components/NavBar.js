import React from "react";





const NavBar = () => {

    const burger = () =>{
        const Linker2 = document.getElementById('Linker2');
        const NavBarReplacement = document.getElementById('NavBarReplacement');
        Linker2.classList.add('show');
        NavBarReplacement.classList.add('show');
    }

    return (
        <div>
        <div class="NavBar" id="NavBar">

        <h1>Thomasgården</h1>
        
        
        <button class="Burger" id="Burger" onClick={burger}>
            <svg fill="white" viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="15" rx="10"></rect>
                <rect y="30" width="100" height="15" rx="10"></rect>
                <rect y="60" width="100" height="15" rx="10"></rect>
            </svg>
        </button>

        <div class="Linker" id="Linker">
            <a href="/aapningstider">Åpningstider</a>
            <a href="/meny">Meny</a>
            <a href="">Galleri</a>
            <a href="">Arrangementer</a>
            <a href="">Kontakt</a>
        </div>
        
    </div> 

    <div class="NavBarReplacement" id="NavBarReplacement">
        <div class="Linker2" id="Linker2">
            <a href="">Åpningstider</a>
            <a href="">Meny</a>
            <a href="">Galleri</a>
            <a href="">Arrangementer</a>
            <a href="">Kontakt</a>
        </div>
    </div>
    </div>
    )
}


export default NavBar