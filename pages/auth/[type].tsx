import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import constants from "../../constants";
import { useRouter } from "next/router";
import LoginPage from "../../components/LoginPage/LoginPage";

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
        {
          <LoginPage type={type}/>
        }
      </div>
    </Layout>
  );
};

export default AuthComponent;
