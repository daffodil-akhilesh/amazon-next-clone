import Layout from "../components/Layout/Layout";
import TopBar from "../components/Header/TopBar/TopBar";
import NavBar from "../components/Header/NavBar/NavBar";
import classes from "../styles/index.module.css";
import Grid from "../components/Grid/Grid";
import UserProfile from "../components/UserProfile/UserProfile";
import ProductSlider from '../components/ProductSlider/ProductSlider';
import { autoLogin } from "../redux/modules/login";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";


let products = [
  { title: "Apple iphone 4s", price: "50000", imgUrl: "/profile.png" },
  { title: "Apple iphone 4s", price: "50000", imgUrl: "/profile.png" },
  { title: "Apple iphone 4s", price: "50000", imgUrl: "/profile.png" },
  { title: "Apple iphone 4s", price: "50000", imgUrl: "/profile.png" },
  { title: "Apple iphone 4s", price: "50000", imgUrl: "/profile.png" },
  { title: "Apple iphone 4s", price: "50000", imgUrl: "/profile.png" },
  { title: "Apple iphone 4s", price: "50000", imgUrl: "/profile.png" },
  { title: "Apple iphone 4s", price: "50000", imgUrl: "/profile.png" },
  { title: "Apple iphone 4s", price: "50000", imgUrl: "/profile.png" },
  { title: "Apple iphone 4s", price: "50000", imgUrl: "/profile.png" },
  { title: "Apple iphone 4s", price: "50000", imgUrl: "/profile.png" },
]

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    autoLogin()(dispatch);
  }, [])
  return (
    <Layout>
      <TopBar />
      <div className={classes.NavBarContainer}>
        <NavBar />
        <Grid />
        <div className={classes.ProfileContainer}>
          <UserProfile width={300} height={500} />
        </div>
        <div className={classes.ProductsContainer}>
          <div className={classes.DealProductsContainer}>
            <ProductSlider products={products} title={"Amazing Deals for You"} autoplay />
          </div>
          <div className={classes.SelectedProductsContainer}>
            <ProductSlider products={products} title={"Items Picked By You"} autoplay={false} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
