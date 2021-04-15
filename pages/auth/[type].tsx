import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import constants from "../../constants";
import { useRouter } from "next/router";

const AuthComponent = () => {
  let type = useRouter().query.type;

  return (
    <Layout>
      <Head>
        <title>
          {"Amazon "}
          {type == "login" ? constants.LOGIN_TITLE : constants.SIGNUP_TITLE}
        </title>
      </Head>
      <div>
        <h1>
          {type == "login" ? constants.LOGIN_TITLE : constants.SIGNUP_TITLE}
        </h1>
      </div>
    </Layout>
  );
};

export default AuthComponent;
