import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const { string, func } = PropTypes;
const htmlElementMapping = {
  title: "h1",
  sectionTitle: "h2",
  subTitle: "h3",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
  link: "a",
};
const fontStylesMapping = {
  title: {
    fontSize: 65 / 16,
    fontWeight: 800,
    lineHeight: 73 / 65,
  },
  sectionTitle: {
    fontSize: 48 / 16,
    fontWeight: 700,
    lineHeight: 1.125,
  },
  subtitle: {
    fontSize: 18 / 16,
    fontWeight: 600,
    lineHeight: 22 / 18,
  },
  h1: {
    fontSize: 56 / 16,
    fontWeight: 800,
    lineHeight: 68 / 56,
  },
  h2: {
    fontSize: 36 / 16,
    fontWeight: 800,
    lineHeight: 44 / 36,
  },
  h3: {
    fontSize: 28 / 16,
    fontWeight: 800,
    lineHeight: 34 / 28,
  },
  h4: {
    fontSize: 24 / 16,
    fontWeight: 700,
    lineHeight: 30 / 24,
  },
  h5: {
    fontSize: 20 / 16,
    fontWeight: 700,
    lineHeight: 25 / 20,
  },
  h6: {
    fontSize: 18 / 16,
    fontWeight: 700,
    lineHeight: 22 / 18,
  },
  p: {
    fontSize: 16 / 16,
    lineHeight: 22 / 18,
    fontWeight: "normal",
  },
  span: {
    fontSize: 16 / 16,
    lineHeight: 22 / 18,
    fontWeight: "normal",
  },
  link: {
    fontSize: 16 / 16,
    lineHeight: 22 / 18,
  },
};

const getFontStyleMapping = (variant) => {
  const defaultFontProps = fontStylesMapping.p;
  const fontProps = fontStylesMapping[variant] || defaultFontProps;
  return fontProps;
};

const TypographyRoot = ({ variant, children, ...others }) => {
  const ElementToRender = htmlElementMapping[variant] || "span";
  return <ElementToRender {...others}>{children}</ElementToRender>;
};

const StyledTypography = styled(({ ...otherProps }) => (
  <TypographyRoot {...otherProps} />
))`
  ${({ ...props }) => css`
    font-size: ${getFontStyleMapping(props.variant).fontSize}rem;
    font-weight: ${getFontStyleMapping(props.variant).fontWeight};
    line-height: ${getFontStyleMapping(props.variant).lineHeight};
    color: ${props.color};
    text-transform: ${props.variant === "subtitle" ? "uppercase" : ""};
    ${props.variant === "textLink"
      ? css`
          cursor: pointer;
          text-decoration: none;
        `
      : ""};
    ${props.textAlign
      ? css`
          text-align: ${props.textAlign};
        `
      : ""}
  `}
`;

const Typography = ({ variant, children, ...others }) => {
  return (
    <StyledTypography variant={variant} {...others}>
      {children}
    </StyledTypography>
  );
};
Typography.propTypes = {
  variant: PropTypes.oneOfType([
    PropTypes.oneOf([
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "subtitle",
      "heroTitle",
      "flexbookTitle",
      "p",
      "span",
      "textLink",
    ]),
    PropTypes.string,
  ]),
  color: string,
  textTransform: string,
  href: string,
  onClick: func,
  theme: PropTypes.shape({}),
};
Typography.defaultProps = {
  variant: "p",
  color: "black",
};
export { Typography };
