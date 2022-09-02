import React from "react";


const Pagination = ({ prev, next, onPrevious, onNext }) => {
    // declaramos las constantes q inicializan las funciones declaradas en app.js, pasadas como props para utilizarlas
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };
  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {/* Aca utilizo ternarios para condicionar la aparicion de los botones Prev, Next */}
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;