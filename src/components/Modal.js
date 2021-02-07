import PropTypes from 'prop-types'
export default function Modal({ children, showModal }) {
  return showModal ? (
    <div data-test="modal" className="modal">
      {children}
    </div>
  ) : (
    <div data-test="modal"></div>
  );
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  children: PropTypes.node,
}