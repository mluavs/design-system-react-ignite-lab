/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    /*
    algumas considerações sobre a propriedade de tamanho de fonte: 
    - em um design system, a gente geralmente não dá valor número pra fonte, mas uma nomenclatura que representa o tamanho daquele texto
    - - '2xl' tá entre aspas, porque não pode ter número na propriedade do objeto;
    */
    fontSize: {
      xs: 14, //extra small
      sm: 16, //small
      md: 18, //medium
      lg: 20, //large
      xl: 24, //extra large
      '2xl': 32, //2x extra large
    },

    
    /*
    esse padrão de nomenclatura de cor, com as variações dentro de um objeto, é uma exigência da documentação do tailwind
    */ 
    colors: {
      transparent: 'transparent',
      
      black: '#000',
      white: '#FFF',

      gray: {
      900: '#121214',
      800: '#202024',
      700: '#7c7c8a',
      400: '#7c7c7a',
      200: '#c4c4cc',
      100: '#e1e1e6',
      },

      cyan: {
      500: '#81D8F7',
      300: '#A6E0F5',
      }

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
