import styled from "styled-components";
import theme from "./theme";

export const IconButton = styled.button`
  padding: 0.275rem;
  transition: background-color 0.15s linear;
  border-radius: 999px;

  :hover {
    background-color: ${theme.colors.grey_background};
  }

  :active {
    background-color: ${theme.colors.alt_default};
  }

  > * {
    width: 100%;
    height: 100%;
  }
`;