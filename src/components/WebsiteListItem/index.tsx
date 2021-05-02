import React from "react";
import { RiArrowDownCircleLine } from 'react-icons/ri';
import { Cookie } from "../../services/cookies/models";
import { copyCookiesToWebsite } from "../../services/cookies/utils";
import * as S from './styles';

interface WebsiteListItem {
  name: string;
  url: string;
  count: number;
  cookies: Cookie[];
}
const WebsiteListItem = (props: WebsiteListItem) => {
  const { name, count, cookies, url } = props;

  return (
    <S.Container>
      <S.Count>
        <span>{count}</span>
      </S.Count>
      <S.Name>{name}</S.Name>
      <S.ButtonContainer>
        <S.Button  onClick={() => copyCookiesToWebsite(url, cookies)}>
          <RiArrowDownCircleLine />
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default WebsiteListItem;