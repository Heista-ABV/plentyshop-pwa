type CookieScripts = {
  [key: string]: () => void;
};

const cookieScripts: CookieScripts = {
  loadExampleScript: () => {
    // Implementation of loadExampleScript
  },
  // Add other scripts if needed 
  loadGA4Script: () => {
    // Implementation of GA4    
  },
};

export default cookieScripts;
