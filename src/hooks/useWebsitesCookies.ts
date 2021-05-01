import { useEffect, useState } from "react";
import RegEx from "../utils/regex";

type Cookie = chrome.cookies.Cookie;

interface WebsiteCookiesEntity { 
  cookies: Cookie[],
  count: number
};

type WebsiteCookiesEntities = {
  [domain:string]: WebsiteCookiesEntity | undefined 
};

/** formats a cookies array as normalized relational pattern by cookie website */
export function getCookiesByWebsite(cookies: Cookie[])  {
  const entities = cookies.reduce<WebsiteCookiesEntities>
  ((websites, cookie) => {
    const websiteName = cookie.domain.replace(RegEx.firstDot, '');
    const website = websites[websiteName]
    const count = website?.count || 0;
    const cookies = website?.cookies || [];

    return {
      ...websites,
      [websiteName]: {
        cookies: [...cookies, cookie],
        count: count + 1,
      } 
    }
  }, {});

  const ids = Object.keys(entities);

  return { 
    entities,
    ids
  }
}

/** Copy (set) an Array of Cookies to another Website  */
export function copyCookiesToWebsite(url?: string, cookies?: Cookie[] ) {
  if (url && cookies) {
    cookies.forEach(cookie => {
      chrome.cookies.set({
        url: url,
        name: cookie.name,
        value: cookie.value,
      })
    })
  }
};


/** Provides cookies by website domain */
export default function useWebsitesCookies() {
  // stores all browser cookies
  const [allCookies, initAllCookies] = useState<Cookie[]>([]);
  const { entities, ids } = getCookiesByWebsite(allCookies);
  
  // Loads allCookies with browser cookies
  useEffect(() => {
    chrome.cookies.getAll({}, (cookies) => initAllCookies(cookies));
  }, [])

  return { 
    entities,
    ids
  }
}