import React from 'react';
import PropTypes from 'prop-types';

const AutoComplete = ({
  items,
  onClick,
  searchValue,
  customClasses,
}) => (
  <ul className={customClasses ? `autocomplete ${customClasses}` : 'autocomplete'}>
    {
      items.map((item) => {
        const formattedText = { __html: item.text.replace(new RegExp(searchValue, 'ig'), `<b>${searchValue}</b>`) };
        // eslint-disable-next-line
        return <li onClick={() => onClick(item)} dangerouslySetInnerHTML={formattedText} />
      })
    }
  </ul>
);

// eslint-disable-next-line
AutoComplete.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
  })).isRequired,
  searchValue: PropTypes.string,
  customClasses: PropTypes.string,
};

// eslint-disable-next-line
AutoComplete.defaultProps = {
  searchValue: '',
  customClasses: '',
};

export default AutoComplete;
