import { Button, Input, Typography } from "app-atoms";
import styled from "styled-components";

const Form = styled.form`
  margin: auto;
`;

const Actions = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SignInForm() {
  return (
    <Form>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Actions>
        <Button>Sign In</Button>
        <Typography variant={"h6"}>or</Typography>
        <Button variant={"text"} color={"secondary"}>
          Sign Up
        </Button>
      </Actions>
    </Form>
  );
}

export default SignInForm;
// FIXME: replace components using atoms
