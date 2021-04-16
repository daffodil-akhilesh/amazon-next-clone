import Layout from "../components/Layout/Layout";
import TopBar from "../components/Header/TopBar/TopBar";
import NavBar from "../components/Header/NavBar/NavBar";
import classes from "../styles/index.module.css";
import Grid from "../components/Grid/Grid";
import UserProfile from "../components/UserProfile/UserProfile";

const Home = () => {
  return (
    <Layout>
      <TopBar />
      <div className={classes.NavBarContainer}>
        <NavBar />
        <Grid />
        <div className={classes.ProfileContainer}>
          <UserProfile width={300} height={500} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
