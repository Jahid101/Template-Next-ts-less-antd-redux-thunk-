import type { AppProps } from 'next/app';
// import '../styles/globals.less';
require('../styles/globals.less');
import { wrapper } from "../Redux";
import Router from "next/router";
//@ts-ignore
import NProgress from "nprogress";
import { useEffect } from 'react';


// process.env.NODE_ENV === "production" && Sentry.init({
//   dsn: "https://aad954f8784944189abc979f6e802dfb@o1114429.ingest.sentry.io/6145637",

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });



NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done()
});

Router.events.on("routeChangeError", () => {
  NProgress.done()
});

Router.events.on('routeChangeComplete', () => {
  // //console.log("zzzzzz");

  // window.scroll({
  //   top: 0,
  //   left: 0
  // });
});

// Router.onRouteChangeComplete = () => NProgress.done();

// Router.onRouteChangeError = () => NProgress.done();


function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {

  }, [])

  return <Component {...pageProps} />
}
// export default MyApp
export default wrapper.withRedux(MyApp);
