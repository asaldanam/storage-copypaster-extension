import { useEffect, useState } from "react";
import RegEx from "../../utils/regex";
import { Cookie } from './models';


/** formats a cookies array as normalized relational pattern by cookie website */
export function getCookiesByWebsite(cookies: Cookie[])  {
  const entities = cookies.reduce<{
    [website: string]: { 
      cookies: Cookie[],
      count: number
    } | undefined 
  }>
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
        path: cookie.path,
      })
    })
  }
};