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
import UserProfileProductItem from "../components/UserProfile/UserProfileProductItem/UserProfileProductItem";


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
          <UserProfile width={"300px"} height={"500px"}>
            <div>
              <p style={{ padding: "20px 0px 10px 20px", fontWeight: "bold", color: "#111" }}>{"Top Picks for you"}</p>
            </div>
            <div className={classes.UserProfileItems}>
              <UserProfileProductItem width={"100px"} height={"100px"} title={"Your Orders"} imgPath={"/products/orders.png"} imgHref={"/user/orders"} />
              <UserProfileProductItem width={"100px"} height={"100px"} title={"Mobile And Accessories"} imgPath={"/products/mobile.png"} imgHref={"/categories/mobiles"}/>
            </div>
            <div className={classes.UserProfileItems}>
              <UserProfileProductItem width={"100px"} height={"100px"} title={"Fashion"} imgPath={"/products/fashion.png"} imgHref={"/categories/fashion"}/>
              <UserProfileProductItem width={"100px"} height={"100px"} title={"Groceries"} imgPath={"/products/grocery.png"} imgHref={"/categories/grocery"} />
            </div>
          </UserProfile>
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
