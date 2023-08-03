import { useState } from "react";
import { Button, Image, Typography } from "app-atoms";
import styled from "styled-components";
import jsLogo from "./assets/javascript.svg";
import Signin from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Modal from "./Components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [signIn, setSignIn] = useState(null);

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
          {signIn ? <Signin /> : <SignUp />}
        </Modal>
      )}
      <FlexContainer>
        <FlexContainer>
          <Image src={jsLogo} title="JS-logo" size="xs" />
          <Typography variant={"h2"}>JS Videos</Typography>
        </FlexContainer>
        <FlexContainer>
          <Button
            variant={"text"}
            onClick={() => console.log("redirect somewhere")}>
            Playlist
          </Button>
          <Button variant={"solid"} onClick={() => openSigninModal(true)}>
            Sign In
          </Button>
          <Button variant={"outline"} onClick={() => openSigninModal(false)}>
            Sign Up
          </Button>
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
