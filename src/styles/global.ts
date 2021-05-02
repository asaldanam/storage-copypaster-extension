import { createGlobalStyle } from 'styled-components';
import theme from './theme';
 
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,700;1,400&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-family: ${theme.font.family.main};
    color: ${theme.colors.grey_text_default};
  }

  input {
    font-family: ${theme.font.family.main};
    color: ${theme.colors.grey_text_default};
    appearance: none;
    border: none;
    :focus, :active {
      outline: none;
    } 
  }

  button {
    font-family: ${theme.font.family.main};
    appearance: none;
    border: 0;
    padding: 0;
    background: none;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    text-transform: none;
    overflow: visible;
    :not(:disabled) {
      cursor: pointer;
    }
  }


`;
 
export default GlobalStyle;