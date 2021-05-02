import React, { useState } from "react";
import _debounce from 'lodash/debounce';
import { copyCookiesToWebsite } from "../../services/cookies/utils";
import useWebsitesCookies from "../../services/cookies/useWebsitesCookies";
import useCurrentTab from "../../services/tabs/useCurrentTab";
import * as S from './styles';
import WebsiteListItem from "../../components/WebsiteListItem";

const CookiesView = () => {
  const { url, domain } = useCurrentTab();
  const { entities: websites, ids: websiteList } = useWebsitesCookies();
  
  const [ searchTerm, setSearchTerm ] = useState<string>('');

  return (
    <S.Container>
        
      <S.TitleBar>
        <S.Title>{domain}</S.Title>
      </S.TitleBar>

      <S.HeroPicture imgSrc="assets/img/cookie-monster-dancing.gif" />

      <S.Search>
        <input 
          defaultValue={searchTerm}
          placeholder="Find cookies..."
          onChange={_debounce((e) => setSearchTerm(e.target.value), 250)}
        />
      </S.Search>

      <div>
        {websiteList
          .filter(websiteName => websiteName.includes(searchTerm))
          .splice(0, 5)
          .map(websiteName =>  (
              <WebsiteListItem 
                key={websiteName}
                url={url || ''}
                count={websites[websiteName]?.count || 0} 
                name={websiteName}
                cookies={websites[websiteName]?.cookies || []}
              />
            )
          )
        }
      </div>
    </S.Container>
  );
};

export default CookiesView;
