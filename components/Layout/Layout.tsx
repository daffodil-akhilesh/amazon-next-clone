import Head from "next/head";
import constants from "../../constants";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <Head>
        <link rel="icon" href="amazon.ico" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <title>{constants.HOME_TITLE}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
