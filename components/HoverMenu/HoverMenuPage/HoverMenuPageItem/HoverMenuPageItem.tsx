import classes from "./HoverMenuPageItem.module.css";
import Link from "next/link";

const HoverMenuPageItem = ({ title, link }) => {
    return (
        <div className={classes.HoverMenuPageItem}>
            <Link href={link}>
                <a>{title}</a>
            </Link>
        </div>
    )
};
export default HoverMenuPageItem;