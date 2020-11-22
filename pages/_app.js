// import '../styles/globals.css'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const globalMuiCustomCTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#269CCC",
      },
    },
    typography: {
      fontFamily: ["poppins", "sans-serif"].join(","),
    },
  });

  return (
    <div
      style={{
        fontFamily: 'Mali, sans-serif',
      }}
    >
      <Head>
        <title>Ecom app</title>
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBdG0y3s5nK0bqVEPM3ILC6u_uQ9fZ_CN4&libraries=places" /> */}
      </Head>
      <ThemeProvider theme={globalMuiCustomCTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );

  // return <Component {...pageProps} />;
}

export default MyApp;
