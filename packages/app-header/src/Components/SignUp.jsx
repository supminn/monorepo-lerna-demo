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

function SignUpForm() {
  return (
    <Form>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Actions>
        <Button>Sign Up</Button>
        <Typography variant={"h6"}>or</Typography>
        <Button variant={"outline"} color={"secondary"}>
          Sign In
        </Button>
      </Actions>
    </Form>
  );
}

export default SignUpForm;
// FIXME: replace components using atoms
