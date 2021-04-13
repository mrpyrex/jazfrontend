import React, {useEffect} from 'react'
import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import '../styles/flat-icon/flaticon.css'
import Layout from '../components/Layout';
import "react-datetime/css/react-datetime.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'suneditor/dist/css/suneditor.min.css'
import store from '../components/store'
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
    })
  }, [])
  
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp



// import App from 'next/app'
// import { Provider } from 'react-redux'
// import withRedux from 'next-redux-wrapper'
// import store from '../components/store'
// import Layout from '../components/Layout';
// import '../styles/globals.css'
// import '../styles/bootstrap.min.css'
// import '../styles/flat-icon/flaticon.css'

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
//     console.log(appProps)
//     return {
//       appProps:appProps
//     }    
//   }

//   render() {
//     const { Component, appProps } = this.props
//     return (
//       <Provider store={store}>
//         <Layout>
//         <Component {...appProps} />
//         </Layout>
//       </Provider>
//     )
//   }
// }

// const makeStore = () => store
// export default withRedux(makeStore) (MyApp)




// import React from 'react';
// import App from 'next/app';
// import {wrapper} from '../components/store';

// class MyApp extends App {
//     static getInitialProps = async ({Component, ctx}) => {

//         ctx.store.dispatch({type: 'TOE', payload: 'was set in _app'});

//         return {
//             pageProps: {
//                 // Call page-level getInitialProps
//                 ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
//                 // Some custom thing for all pages
//                 pathname: ctx.pathname,
//             },
//         };

//     };

//     render() {
//         const {Component, pageProps} = this.props;

//         return (
//             <Component {...pageProps} />
//         );
//     }
// }

// export default wrapper.withRedux(MyApp);