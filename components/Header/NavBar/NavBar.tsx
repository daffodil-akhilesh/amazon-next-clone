import NavBarItem from "./NavBarItems/NavBarItem";
import links from "./NavLinks";
import classes from "./NavBar.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({}) => {
  return (
    <div className={classes.NavBar}>
      <div className={classes.NavBarLeft}>
          <FontAwesomeIcon icon={faBars}/>
          <span> All </span>
      </div>
      <div className={classes.NavBarCenter}>
        {links.map((link,index) => {
          return <NavBarItem navTitle={link.title} navLink={link.link} key={index}/>;
        })}
      </div>
      <div className={classes.NavBarRight}>
        <Image
          src={"/posters/posterNav.jpg"}
          alt={"Poster"}
          width={400}
          height={39}
        />
      </div>
    </div>
  );
};

export default NavBar;
