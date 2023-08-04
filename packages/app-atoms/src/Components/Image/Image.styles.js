import styled from "styled-components";

export const StyledImage = styled.img`
  height: auto;
  margin: 0.5rem;
  border-radius: 0.5rem;
  width: ${(props) => {
    switch (props.size) {
      case "xs":
        return "3rem";
      case "small":
        return "6rem";
      case "medium":
        return "12rem";
      case "large":
        return "14rem";
      case "xl":
        return "18rem";
      default:
        return "12rem";
    }
  }};
`;
