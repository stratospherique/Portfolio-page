import { useMediaQuery } from 'helpers/hooks';
import { theme } from '../helpers/constants';

const useCurrentDevice = () => ({
  isMobileView: useMediaQuery(`max-width: ${theme.breakpoints.md}`),
  isTabletView: useMediaQuery(`max-width: ${theme.breakpoints.lg} and min-width: ${theme.breakpoints.md}`),
  isLaptopView: useMediaQuery(`max-width: ${theme.breakpoints.xl} and min-width: ${theme.breakpoints.lg}`),
  isLargeView: useMediaQuery(`min-width: ${theme.breakpoints.lg}`),
});

export default useCurrentDevice;
