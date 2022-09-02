import React from "react";

// Componente NavBar utilizando props 
const NavBar = ({ brand }) => {
    return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand text-uppercase ">{brand}</a>
        </div>
    </nav>
    );
};

export default NavBar;
// ItemListContainer ==> lógica de traer los productos se los pasa al ItemList.js y luego al Ítem.js