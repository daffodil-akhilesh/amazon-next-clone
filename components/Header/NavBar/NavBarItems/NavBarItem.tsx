import classes from "./NavBarItem.module.css";
import Link from "next/link";

const NavBarItem = ({ navTitle, navLink }) => {
  return (
    <div className={classes.NavBarItem}>
      <Link href={navLink}>
        <a>{navTitle}</a>
      </Link>
    </div>
  );
};

export default NavBarItem;
