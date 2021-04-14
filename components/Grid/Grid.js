import classes from "./Grid.module.css";
import { Carousel } from "react-responsive-carousel";

let Banners = [
  { link: "/banners/websiteBanner.jpg" },
  { link: "/banners/websiteBanner.jpg" },
  { link: "/banners/websiteBanner.jpg" },
  { link: "/banners/websiteBanner.jpg" },
];

const Grid = () => {
  return (
    <div className={classes.Grid}>
      <Carousel showThumbs={false} showIndicators={false}>
        {Banners.map((banner) => {
          return (
            <div>
              <img src={banner.link} />
            </div>
          );
        })}
      </Carousel>
      <div className={classes.Gradient}></div>
      <div
        style={{
          width: "100%",
          height: "300px",
          background: "white",
        }}></div>
    </div>
  );
};

export default Grid;
