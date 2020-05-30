import React from'react';
import HeaderBackground from "./header/bg-header-desktop.svg";
const Header=()=>{
    return(<header className="header">
     <img className="headerImage" src = {HeaderBackground} alt='header-background'/>
    </header>)
}

export default Header;