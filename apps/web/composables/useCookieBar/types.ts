export interface Cookie {
    name: string;
    accepted: boolean;
    Lifespan: string;
    script: string[];
  }
  export interface CookieGroup {
    name: string;
    accepted: boolean;
    showMore: boolean;
    description: string;
    cookies: Cookie[];
  }

  export interface UseCookieReturn {
    cookieJson: CookieGroup[];
    bannerIsHidden: boolean;
    convertAndSaveCookies: (setAllCookies: boolean, newStatus: boolean) => void;
    defaultCheckboxIndex: number;
    loadThirdPartyScripts: () => void
}

