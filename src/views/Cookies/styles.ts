import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div``;

interface HeroPictureProps {
  imgSrc: string;
}
export const HeroPicture = styled.picture<HeroPictureProps>`
  ${({ imgSrc }) => css`
    display: block;
    width: 24rem;
    height: 10rem;
    background-image: url(${imgSrc});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  `}
`;

export const TitleBar = styled.header`
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  padding: 0.75rem 0.5rem;
  background: ${theme.colors.main_default};
  color: white;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const CookiesCount = styled.p`
  margin: 0;
  font-weight: lighter;
`;

export const Search = styled.div`
  background: ${theme.colors.grey_background};
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    font-size: 1.15rem;
    padding: 0.5rem 0.875rem;
    ::placeholder {
      color: ${theme.colors.grey_text_placeholder}
    }
  }
`;