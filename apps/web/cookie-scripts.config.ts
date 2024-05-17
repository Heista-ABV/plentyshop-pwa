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
    /*<script async src="https://www.googletagmanager.com/gtag/js?id=G-EZ1LTWVYXB" type="text/plain" data-cookie-consent="tracking.googleAnalytics"></script>

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}

    gtag('consent', 'default', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted', 
        'analytics_storage': 'granted' 
    });

    gtag('js', new Date());

    gtag('config', "G-EZ1LTWVYXB", { 'anonymize_ip': true })
    */
  },
};

export default cookieScripts;
