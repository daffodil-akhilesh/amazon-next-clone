import Head from "next/head";
import constants from "../../constants";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <Head>
        <link rel="icon" href="amazon.ico" />
        <title>{constants.HOME_TITLE}</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
