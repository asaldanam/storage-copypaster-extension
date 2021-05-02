import { useEffect, useState } from "react";
import { getCookiesByWebsite } from "./utils";
import { Cookie } from './models';

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