module.exports = {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px'
    },
    colors: {
      black: '#000',
      white: '#FFF',
      dark: '#8A92A6',
      text: '#101828',
      lightText: '#8A92A6',
      gray: '#D0D5DD',
      background: '#FAFAFA'
    },
    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '40px',
      7: '48px',
      8: '64px',
      9: '80px'
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '28px',
      xl: '32px'
    },
    fontWeight: {
      light: '400',
      regular: '500',
      bold: '600'
    },
    borderRadius: {
      sm: '5px',
      md: '8px',
      lg: '12px'
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
