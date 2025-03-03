export const BREAKPOINTS = {
  MOBILE: 850,
  TABLET: 1024,
  DESKTOP: 1440,
};

export const isMobileWidth = (width) => width <= BREAKPOINTS.MOBILE;
export const isTabletWidth = (width) =>
  width <= BREAKPOINTS.TABLET && width > BREAKPOINTS.MOBILE;
export const isDesktopWidth = (width) => width > BREAKPOINTS.TABLET;
