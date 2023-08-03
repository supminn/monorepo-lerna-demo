import { Button, Image, Typography } from "app-atoms";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
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
    <>
      {showModal && (
        <Modal
          show={showModal}
          title={signIn ? "Sign In" : "Sign Up"}
          onCloseModal={() => setShowModal(false)}>
          {signIn ? <Signin /> : <SignUp />}
        </Modal>
      )}
      <header>
        <Image src={reactLogo} title="react-logo" />
        <Typography variant={"title"}>My Video Library</Typography>
        <Typography variant={"sectionTitle"}>
          This is my sectiontitle
        </Typography>
        <Typography variant={"subTitle"}>This is my subtitle</Typography>
        <div>
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
        </div>
      </header>
    </>
  );
}

export default App;
