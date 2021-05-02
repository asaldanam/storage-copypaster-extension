import React, { useState } from "react";
import ReactDOM from "react-dom";
import _debounce from 'lodash/debounce';
import { copyCookiesToWebsite } from "./services/cookies/utils";
import useWebsitesCookies from "./services/cookies/useWebsitesCookies";
import useCurrentTab from "./services/tabs/useCurrentTab";

const Popup = () => {
  const { url } = useCurrentTab();
  const { entities: websites, ids: websiteList } = useWebsitesCookies();
  
  const [ searchTerm, setSearchTerm ] = useState<string>('');

  console.log('UPDATED', { searchTerm, websites })

  return (
    <>
      <p>Find cookies:</p>

      <input 
        defaultValue={searchTerm}
        onChange={_debounce((e) => setSearchTerm(e.target.value), 250)}
      />

      <ul>
        {websiteList
          .filter(websiteName => websiteName.includes(searchTerm))
          .splice(0, 10)
          .map(websiteName => {
            const website = websites[websiteName];
            return (
              <li key={websiteName}>
                <span>{websiteName}</span>
                <button onClick={() => copyCookiesToWebsite(url, website?.cookies)}>O</button>
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
