import styled, { css } from "styled-components";
import { IconButton } from "../../styles/common";
import theme from "../../styles/theme";

export const Container = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme.colors.grey_background};
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
`;

export const Count = styled.p`
  margin: 0;
  font-size: 11px;
  color: black;
  background: ${theme.colors.alt_default};
  border-radius: 999px;
  font-weight: bold;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75em;
`;

export const Name = styled.p`
  margin: 0;
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
`;

export const Button = styled(IconButton)`
  width: 2rem;
  height: 2rem;
  color: ${theme.colors.main_default};
`;