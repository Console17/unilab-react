import React, { useState } from "react";

const pagination = ({ dogsPerPage, totalDogs, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalDogs / dogsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="pagination-wrapper">
      <img
        src="/category-page-photos/Arrow_Right_SM.svg"
        alt="pagination arrow"
        onClick={handlePrevious}
      />
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a
              onClick={() => {
                paginate(number);
              }}
              href="#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <img
        src="/category-page-photos/Arrow_Right_SM.svg"
        alt="pagination arrow"
        onClick={handleNext}
      />
    </div>
  );
};

export default pagination;
