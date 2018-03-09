import PropTypes from 'prop-types';

export default (PropTypes.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_url: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
});
