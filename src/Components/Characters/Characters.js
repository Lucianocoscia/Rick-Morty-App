import React from "react";

const Characters = ({ characters = [] }) => {
    return (
        <div className="row">
            {/* Utilizo el map para iterar los personajes de la appi en cards utilizando Bootstrap para estilos */}
        {characters.map((item, index) => (
            <div key={index} className="col mb-4">
                <div className="card h-100 " style={{minWidth: "200px"}}>
                    <img src={item.image} alt='' />
                    <div className="card-body ">
                        <h5 className="card-title text-center">{item.name}</h5>
                        <hr/>
                        
                        <p><span className="h6">Species:</span> {item.species}</p>
                        <p><span className="h6">Location:</span> {item.location.name}</p>
                    </div>
                </div>
            </div> 
        ))}
        </div>
    );
};

export default Characters;
