import styled from "styled-components";
import PropTypes from "prop-types";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const ModalHeader = styled.h3`
  margin-top: 0;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ModalButton = styled.button`
  margin-left: 10px;
`;

function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <ModalWrapper>
      <ModalHeader>{props.title}</ModalHeader>
      <ModalContent>{props.children}</ModalContent>
      <ModalActions>
        <ModalButton onClick={props.onCloseModal}>Cancel</ModalButton>
        <ModalButton onClick={props.onSubmitConfirm}>Confirm</ModalButton>
      </ModalActions>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  onCloseModal: PropTypes.func,
  onSubmitConfirm: PropTypes.func,
  children: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
};
export default Modal;
// FIXME: Styling to look like a modal
