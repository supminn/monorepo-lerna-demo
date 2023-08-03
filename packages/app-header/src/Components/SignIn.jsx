import styled from "styled-components";

const PrimaryColor = "#000080";
const SecondaryColor = "#ff8000";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${PrimaryColor};
  border-radius: 4px;
  margin: 10px 0;
  width: 100%;
`;

const Button = styled.button`
  background-color: ${PrimaryColor};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${SecondaryColor};
  }
`;

function SignInForm() {
  return (
    <Form>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Sign In</Button>
    </Form>
  );
}

export default SignInForm;
// FIXME: replace components using atoms
