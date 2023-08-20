import { useEffect, useState } from "react";
import { Button, Image, Typography } from "app-atoms";
import styled from "styled-components";
import jsLogo from "./assets/javascript.svg";
import Signin from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Modal from "./Components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { logoutButtonPressed } from "./store/authSlice";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [signIn, setSignIn] = useState(null);
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth.login);

  useEffect(() => {
    if (email && showModal) {
      setShowModal(false);
    }
  }, [email, showModal]);

  const openSigninModal = (flag) => {
    setSignIn(flag);
    setShowModal(true);
  };

  return (
    <Header>
      {showModal && (
        <Modal
          show={showModal}
          title={signIn ? "Sign In" : "Sign Up"}
          onCloseModal={() => setShowModal(false)}>
          {signIn ? (
            <Signin setSignIn={setSignIn} />
          ) : (
            <SignUp setSignIn={setSignIn} />
          )}
        </Modal>
      )}
      <FlexContainer>
        <FlexContainer
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}>
          <Image src={jsLogo} title="JS-logo" size="xs" />
          <Typography variant={"h2"}>Videos</Typography>
        </FlexContainer>
        <FlexContainer>
          {email ? (
            <>
              <Button
                variant={"text"}
                onClick={() => (window.location.href = "/playlist")}>
                Playlist
              </Button>
              <Button
                variant={"outline"}
                onClick={() => dispatch(logoutButtonPressed())}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant={"solid"} onClick={() => openSigninModal(true)}>
                Sign In
              </Button>
              <Button
                variant={"outline"}
                onClick={() => openSigninModal(false)}>
                Sign Up
              </Button>
            </>
          )}
        </FlexContainer>
      </FlexContainer>
    </Header>
  );
}

const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.header`
  background-color: rgba(0, 0, 128, 0.4);
  border-bottom: 2px solid #000080;
`;
export default App;
