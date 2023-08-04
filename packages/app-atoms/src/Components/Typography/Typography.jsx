import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { getFontStyleMapping, htmlElementMapping } from "./styleUtils";

const StyledTypography = styled(({ variant, children, ...otherProps }) => {
  const ElementToRender = htmlElementMapping[variant] || "span";
  return <ElementToRender {...otherProps}>{children}</ElementToRender>;
})`
  ${({ ...props }) => css`
    margin-block-start: 0.75rem;
    margin-block-end: 0.75rem;
    font-size: ${getFontStyleMapping(props.variant).fontSize}rem;
    font-weight: ${getFontStyleMapping(props.variant).fontWeight};
    line-height: ${getFontStyleMapping(props.variant).lineHeight};
    color: ${props.color};
    text-transform: ${props.variant === "subtitle" ? "uppercase" : ""};
    ${props.textAlign
      ? css`
          text-align: ${props.textAlign};
        `
      : ""}
  `}
`;

function Typography({ variant, children, ...others }) {
  return (
    <StyledTypography variant={variant} {...others}>
      {children}
    </StyledTypography>
  );
}

Typography.propTypes = {
  variant: PropTypes.oneOfType([
    PropTypes.oneOf([
      "title",
      "sectionTitle",
      "subtitle",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "span",
    ]),
    PropTypes.string,
  ]),
  color: PropTypes.string,
  children: PropTypes.string,
};

Typography.defaultProps = {
  variant: "p",
  color: "black",
  children: "Placeholder for text",
};
export { Typography };
