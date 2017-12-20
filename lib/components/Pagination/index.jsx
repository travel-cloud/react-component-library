import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
  currentPage,
  pageCount,
  previousPage,
  nextPage,
  goToPage,
}) => {
  const pages = [];
  // eslint-disable-next-line
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push((
      <li key={`page-${i}`}>
        <button
          className={i === currentPage && 'active'}
          onClick={goToPage(i)}
        >
          {i}
        </button>
      </li>
    ));
  }

  return (
    <nav className="pagination">
      <ul>
        <li>
          {
            currentPage <= 1
              ? <button className="disabled">‹</button>
              : <button onClick={previousPage}>‹</button>
          }
        </li>
        {pages}
        <li>
          {
            currentPage >= pageCount
              ? <button className="disabled">›</button>
              : <button onClick={nextPage}>›</button>
          }
        </li>
      </ul>
    </nav>
  );
};

// eslint-disable-next-line
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  goToPage: PropTypes.func.isRequired,
};

export default Pagination;
