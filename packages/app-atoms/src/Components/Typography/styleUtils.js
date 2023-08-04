export const htmlElementMapping = {
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
};

const fontStylesMapping = {
  title: {
    fontSize: 65 / 16,
    fontWeight: 800,
    lineHeight: 73 / 65,
  },
  sectionTitle: {
    fontSize: 30 / 16,
    fontWeight: 700,
    lineHeight: 1.125,
  },
  subtitle: {
    fontSize: 18 / 16,
    fontWeight: 700,
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
};

export const getFontStyleMapping = (variant) => {
  const defaultFontProps = fontStylesMapping.p;
  const fontProps = fontStylesMapping[variant] || defaultFontProps;
  return fontProps;
};
