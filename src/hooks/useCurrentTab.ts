import { useEffect, useState } from "react";
import RegEx from "../utils/regex";

/** Exposes current tab data */
export default function useCurrentTab() {
  const [tab, setTab] = useState<chrome.tabs.Tab>(); 

  const url = tab?.url;

  const domainMatch = url?.match(RegEx.domain);
  const domain = domainMatch && domainMatch[1];

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      setTab(tabs[0]);
    });
  }, []);

  return { tab, domain, url };
}
