import PropTypes from 'prop-types';

export const bookPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  image_url: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
});

export const bookDetailPropType = PropTypes.shape({
  bookPropType,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
});

export const bookArrayPropType = PropTypes.arrayOf(bookPropType);
