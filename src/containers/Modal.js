import PropTypes from 'prop-types'
export default function Congrats({ children, showModal }) {
  return showModal ? (
    <div data-test="modal" className="modal">
      {children}
    </div>
  ) : (
    <div data-test="modal"></div>
  );
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
  secretWord: PropTypes.string.isRequired,
}