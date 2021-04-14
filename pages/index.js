import Layout from "../components/Layout/Layout";
import TopBar from "../components/Header/TopBar/TopBar";
import NavBar from "../components/Header/NavBar/NavBar";
import classes from "../styles/index.module.css";
import Grid from "../components/Grid/Grid";

const Home = () => {
  return (
    <Layout>
      <TopBar />
      <div className={classes.NavBarContainer}>
        <NavBar />
        <Grid/>
      </div>
    </Layout>
  );
};

export default Home;
