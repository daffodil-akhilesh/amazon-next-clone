import classes from "./HoverMenuButton.module.css";
import Link from "next/link";

const HoverMenuButton = ({ text, onClick, link }) => {
    return (
        <div className={classes.HoverMenuButton}>
            <button onClick={onClick}>{text}</button>
            <p> New Customer, <Link href={link}><a>click here</a></Link></p>
        </div>
    )
};

export default HoverMenuButton;