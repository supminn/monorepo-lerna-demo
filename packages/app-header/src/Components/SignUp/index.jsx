import { useReducer } from "react";
import PropTypes from "prop-types";
import { Button, Input, Typography } from "app-atoms";
import styled from "styled-components";
import reducer, { initialState } from "./reducer";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../store/authSlice";

const Form = styled.form`
  margin: auto;
`;

const Actions = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SignUpForm({ setSignIn }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const authDispatch = useDispatch();

  const handleFieldChange = (e) => {
    dispatch({
      type: "updateField",
      fieldName: e.target.name,
      payload: e.target.value,
    });
  };

  const handlePasswordBlur = () => {
    dispatch({ type: "validatePassword", payload: state.password });
  };

  const handleConfirmPasswordBlur = () => {
    dispatch({
      type: "validateConfirmPassword",
      payload: state.confirmPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    if (!state.passwordError && !state.confirmPasswordError) {
      authDispatch(createNewUser(state));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={state.name}
        onChange={handleFieldChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={state.email}
        onChange={handleFieldChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        required
        value={state.password}
        onChange={handleFieldChange}
        onBlur={handlePasswordBlur}
      />
      {state.passwordError && <div>{state.passwordError}</div>}
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        required
        value={state.confirmPassword}
        onChange={handleFieldChange}
        onBlur={handleConfirmPasswordBlur}
      />
      {state.confirmPasswordError && <div>{state.confirmPasswordError}</div>}
      <Actions>
        <Button type="submit">Sign Up</Button>
        <Typography variant={"h6"}>or</Typography>
        <Button
          variant={"text"}
          color={"secondary"}
          onClick={() => setSignIn(true)}>
          Sign In
        </Button>
      </Actions>
    </Form>
  );
}

SignUpForm.propTypes = {
  setSignIn: PropTypes.func,
};
export default SignUpForm;
