import styled from "styled-components";
import PropTypes from "prop-types";
import { Button, Typography } from "app-atoms";

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 80%;
  height: 80%;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #000080;
  padding: 1rem;
  border-radius: 1rem;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const ModalHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <ModalWrapper>
      <ModalHeader>
        <Typography variant={"h3"}>{props.title}</Typography>
        <Button color="warning" variant="outline" onClick={props.onCloseModal}>
          Close
        </Button>
      </ModalHeader>
      <ModalContent>{props.children}</ModalContent>
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
