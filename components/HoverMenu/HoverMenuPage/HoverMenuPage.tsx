import classes from "./HoverMenuPage.module.css";
import HoverMenuPageItem from './HoverMenuPageItem/HoverMenuPageItem';

const HoverMenuPage = ({ pageTitle, data }) => {
    return (
        <div className={classes.HoverMenuPage}>
            <div>
                <h2>{pageTitle}</h2>
            </div>
            {
                data && data.map(({ title, link }) => {
                    return (
                        <HoverMenuPageItem title={title} link={link} key={link}/>
                    )
                })
            }
        </div>
    )
};

export default HoverMenuPage;