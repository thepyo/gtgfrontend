import { Plus_Jakarta_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const jakarta = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#00AEEF',
      cl900: "#007A9A",
      cl300: '#66C8E1',
      cl100: '#A5D7E8',
      cl50: '#D0E9F1'
    },
    secondary: {
      main: '#1DB5BE',
      cl900: '#2A4E51',
      cl300: '#75E3EA',
      cl100: '#D5FAFC',
      cl50: '#ECFEFF'
    },
    neutral: {
        main: '#1F2937',
        cl900: '#000002',
        cl800: '#1F2937',
        cl700: '#374151',
        cl600: '#4B5563',
        cl500: '#6B7280',
        cl400: '#9CA3AF',
        cl300: '#D1D5DB',
        cl200: '#E5E7EB',
        cl100: '#F3F4F6'
    },
    accent: {
        cl01: '#C1E5C0',
        cl02: '#C0DAE5',
        cl03: '#FDD9D9',
        cl04: '#FFC3D8',
        cl05: '#A0DCFF',
        cl06: '#D9E8EF',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: jakarta.style.fontFamily,
  },
});

export default theme;