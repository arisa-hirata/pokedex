import React from 'react';

const Pages = ({ handlePagesClick }) => {
  return (
    <div class="d-flex justify-content-center">
      <button
        onClick={() => handlePagesClick('prev')}
        class="btn btn-danger mx-sm-3 mb-2"
      >
        <div>
          <i className="fa fa-caret-left" style={{ fontSize: 25 }}></i>
        </div>
      </button>

      <button
        onClick={() => handlePagesClick('next')}
        class="btn btn-danger mx-sm-3 mb-2"
      >
        <div>
          <i className="fa fa-caret-right" style={{ fontSize: 25 }}></i>
        </div>
      </button>
    </div>
  );
};

export default Pages;
