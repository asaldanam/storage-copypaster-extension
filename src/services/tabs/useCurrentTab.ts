import { useEffect, useState } from "react";
import RegEx from "../../utils/regex";
import { Tab } from './models';

/** Exposes current tab data */
export default function useCurrentTab() {
  const [tab, setTab] = useState<Tab | undefined>(); 

  const url = tab?.url;

  const domainMatch = url?.match(RegEx.domain);
  const domain = domainMatch && domainMatch[1];

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      setTab(currentTab);
    });
  }, []);

  return { tab, domain, url };
}
