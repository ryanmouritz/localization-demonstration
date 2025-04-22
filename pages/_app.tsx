import Script from "next/script";
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script id="localize"
                src="https://global.localizecdn.com/localize.js"
                onLoad={() => {
                !function(a){if(!a.Localize){a.Localize={};for(var e=["translate","untranslate","phrase","initialize","translatePage","setLanguage","getLanguage","getSourceLanguage","detectLanguage","getAvailableLanguages","untranslatePage","bootstrap","prefetch","on","off","hideWidget","showWidget"],t=0;t<e.length;t++)a.Localize[e[t]]=function(){}}}(window);
                Localize.initialize({ key: 'L0lmDb7Tmcxg2',rememberLanguage: true, });
                }}
            />
            <Component {...pageProps} />
        </>
    );
  }

  export default MyApp;
