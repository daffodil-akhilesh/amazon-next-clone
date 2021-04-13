import Layout from "../components/Layout/Layout";
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <div>
        <Link href="/auth/login">
          <a>Login</a>
        </Link>
        <br/>
        <Link href="/auth/signIn">
          <a>Sign Up</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
