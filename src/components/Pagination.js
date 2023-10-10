import React from "react";
import React from "react";
import ReactPaginate from "react-paginate";

function Pagination() {
  function Pagination({ pageCount, onPageChange }) {
    return <ReactPaginate pageCount={pageCount} onPageChange={onPageChange} />;
  }
}

export default Pagination;
