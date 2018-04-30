import React from 'react';
import PropTypes from 'prop-types';
import flatten from 'flat';
import { Link } from 'react-router-dom';
import Wireframe from './Wireframe';

// eslint-disable-next-line
const renderOnClick = ({ column, flattenedItem }) => (
  // eslint-disable-next-line
  <span
    onClick={() => column.onClick(flattenedItem[column.key])}
    className="text-large link"
  >
    {flattenedItem[column.key]}
  </span>
);

// eslint-disable-next-line
const renderLink = ({ column, flattenedItem }) => {
  const linkUrl = column.link.key
    ? `${column.link.url}/${flattenedItem[column.link.key]}`
    : column.link.url.replace(/{([^{]+)}/g, (match, attribute) => flattenedItem[attribute]);

  return (
    // eslint-disable-next-line
    <Link to={linkUrl} className="text-large link">
      {flattenedItem[column.key]}
    </Link>
  );
};

const renderListColumns = ({
  id,
  keyMap,
  item,
  liIndex,
}) => {
  const flattenedItem = flatten(item);

  return keyMap.map((column, index) => {
    // text for the link will be rendered with the action if there is one
    const hasActions = column.onClick || column.link;

    return (
      <p
        id={`${id}-${column.key}`}
        key={`grid-li-${liIndex}-col-${index}`}
        className="pull-left"
        style={{ width: '20%', marginBottom: '15px' }}
      >
        {
          column.onClick ? renderOnClick({ column, flattenedItem }) : ''
        }
        {
          column.link ? renderLink({ column, flattenedItem }) : ''
        }
        {
          !hasActions ? <span className="text-large">{flattenedItem[column.key]}</span> : ''
        }
        <br />
        <span className="text-muted">{column.text || column.key}</span>
      </p>);
  });
};

const Grid = ({
  id,
  classes,
  items,
  keyMap,
  withLoader,
}) => (
  items.length > 0 || !withLoader ?
    <ul id={id} className={`ui-grid list-group ${classes}`}>
      {
        items.map((item, index) => (
          <li className="pull-left" key={`grid-li-${index}`}>
            {renderListColumns({
              id,
              keyMap,
              item,
              liIndex: index,
            })}
          </li>
        ))
      }
    </ul> : <Wireframe loader button={false} rows={3} columns={5} />
);

// eslint-disable-next-line
Grid.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    onClick: PropTypes.func,
    link: PropTypes.shape({
      url: PropTypes.string,
      key: PropTypes.string,
    }),
    key: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  keyMap: PropTypes.arrayOf(PropTypes.object),
  withLoader: PropTypes.bool,
};

// eslint-disable-next-line
Grid.defaultProps = {
  id: '',
  classes: '',
  keyMap: [],
  withLoader: false,
};

export default Grid;
