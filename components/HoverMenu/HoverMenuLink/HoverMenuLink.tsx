import classes from "./HoverMenuLink.module.css";
import Link from 'next/link';

const HoverMenuLink = ({link,title})=>{
    return (
        <div className={classes.HoverMenuLink}>
            <Link href={link}>
                <a>
                    {title}
                </a>
            </Link>
        </div>
    )
};
export default HoverMenuLink;