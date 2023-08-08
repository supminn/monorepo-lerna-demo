import PropTypes from "prop-types";
import { Button, Input, Typography } from "app-atoms";
import { useState } from "react";
import styled from "styled-components";
import { loginWithCredentials } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Form = styled.form`
  margin: auto;
`;

const Actions = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SignInForm({ setSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginWithCredentials({ email, password }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={handlePasswordChange}
      />

      <Actions>
        <Button type="submit">Sign In</Button>
        <Typography variant={"h6"}>or</Typography>
        <Button
          variant={"text"}
          color={"secondary"}
          onClick={() => setSignIn(false)}>
          Sign Up
        </Button>
      </Actions>
      {error && <Typography color="red">{error}</Typography>}
    </Form>
  );
}

SignInForm.propTypes = {
  setSignIn: PropTypes.func,
};

export default SignInForm;
